# -*- coding: utf-8 -*-
"""ideas-data.js -> ideas/<id>.html 정적 생성기.
콘텐츠는 ideas-data.js에서만 가져오며 텍스트를 생성·윤색하지 않는다.
url이 없는 참고문헌은 링크로 만들지 않고 '※미확인' 배지로 표시한다.
detail 페이지 본문을 완전한 HTML로 구워, JS 없이도 본문이 보인다(메모 기능만 JS)."""
import os, re, html, json
from collections import Counter

BASE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(BASE, "ideas-data.js")

CATEGORY = {"heatwave": "폭염", "outage": "정전", "flood": "홍수", "drought": "가뭄"}
FAV = "%F0%9F%8C%A1%EF%B8%8F"  # 🌡️


# ---------- ideas-data.js 파싱 (문자열 인식 토크나이저) ----------
def parse_js_array(text):
    start = text.index("[", text.index("window.IDEAS"))
    pos = start
    n = len(text)

    def skip_ws():
        nonlocal pos
        while pos < n:
            c = text[pos]
            if c in " \t\r\n":
                pos += 1
            elif text[pos:pos+2] == "//":
                nl = text.find("\n", pos)
                pos = n if nl == -1 else nl
            elif text[pos:pos+2] == "/*":
                e = text.find("*/", pos + 2)
                pos = n if e == -1 else e + 2
            else:
                break

    esc_map = {'"': '"', "\\": "\\", "/": "/", "n": "\n", "t": "\t",
               "r": "\r", "b": "\b", "f": "\f"}

    def parse_string():
        nonlocal pos
        quote = text[pos]; pos += 1
        buf = []
        while pos < n:
            c = text[pos]
            if c == "\\":
                nxt = text[pos + 1]
                if nxt == "u":
                    buf.append(chr(int(text[pos+2:pos+6], 16))); pos += 6
                else:
                    buf.append(esc_map.get(nxt, nxt)); pos += 2
            elif c == quote:
                pos += 1
                return "".join(buf)
            else:
                buf.append(c); pos += 1
        raise ValueError("unterminated string")

    def parse_value():
        nonlocal pos
        skip_ws()
        c = text[pos]
        if c == "{":
            return parse_object()
        if c == "[":
            return parse_array()
        if c in "\"'":
            return parse_string()
        m = re.match(r"(null|true|false|-?\d+(?:\.\d+)?)", text[pos:])
        if not m:
            raise ValueError("unexpected token at %d: %r" % (pos, text[pos:pos+20]))
        tok = m.group(1); pos += len(tok)
        return {"null": None, "true": True, "false": False}.get(tok, tok)

    def parse_array():
        nonlocal pos
        pos += 1  # [
        arr = []
        skip_ws()
        if text[pos] == "]":
            pos += 1; return arr
        while True:
            arr.append(parse_value())
            skip_ws()
            if text[pos] == ",":
                pos += 1; skip_ws()
                if text[pos] == "]":
                    pos += 1; return arr
            elif text[pos] == "]":
                pos += 1; return arr
            else:
                raise ValueError("array sep at %d: %r" % (pos, text[pos:pos+20]))

    def parse_object():
        nonlocal pos
        pos += 1  # {
        obj = {}
        skip_ws()
        if text[pos] == "}":
            pos += 1; return obj
        while True:
            skip_ws()
            if text[pos] in "\"'":
                key = parse_string()
            else:
                m = re.match(r"[A-Za-z_$][\w$]*", text[pos:])
                key = m.group(0); pos += len(key)
            skip_ws()
            assert text[pos] == ":", "expected : at %d" % pos
            pos += 1
            obj[key] = parse_value()
            skip_ws()
            if text[pos] == ",":
                pos += 1; skip_ws()
                if text[pos] == "}":
                    pos += 1; return obj
            elif text[pos] == "}":
                pos += 1; return obj
            else:
                raise ValueError("object sep at %d: %r" % (pos, text[pos:pos+20]))

    return parse_array()


# ---------- 렌더 (detail.js 로직과 동일) ----------
def esc(s):
    return (html.escape(str("" if s is None else s), quote=True)
            .replace("&#x27;", "&#39;"))


def render_numbers(text):
    h = esc(text)
    h = re.sub(r"\(추정[^)]*\)",
               lambda m: '<span class="badge-estimate">%s</span>' % m.group(0), h)
    h = re.sub(r"\[(\d+)\]",
               lambda m: '<a class="refmark" href="#ref-%s">[%s]</a>' % (m.group(1), m.group(1)), h)
    return h


def section(title, body):
    return '<section class="section"><h2>%s</h2>%s</section>' % (esc(title), body)


PAGE = '''<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title_esc} · 기후·재난 비즈니스 아이디어 포트폴리오</title>
<meta name="description" content="{cat} · {title_attr}">
<meta property="og:type" content="article">
<meta property="og:title" content="{title_attr}">
<meta property="og:description" content="{cat} · 기후·재난 비즈니스 아이디어 포트폴리오">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E{fav}%3C/text%3E%3C/svg%3E">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">
<link rel="stylesheet" href="../style.css">

<main class="detail" id="detail-root">
{body}
</main>

<script>window.IDEA_ID = {id_json};</script>
<script src="../notes.js"></script>
'''


def build_detail_body(idea, by_id):
    cat = idea["category"]
    refs = idea.get("references") or []
    parts = []

    parts.append('<a class="back-link" href="../index.html">← 목록으로</a>')

    # 헤드
    parts.append('<div class="detail-head">')
    parts.append('<span class="detail-cat cat-%s">%s</span>' % (cat, esc(CATEGORY.get(cat, cat))))
    parts.append('<h1 class="detail-title">%s</h1>' % esc(idea["title"]))
    parts.append('<p class="detail-subtitle">%s</p>' % esc(idea["subtitle"]))
    if idea.get("region"):
        parts.append('<p class="detail-region">%s</p>' % esc(idea["region"]))
    parts.append("</div>")

    # 미검증 안내 (지시서 규칙 3)
    has_unverified = any((not r.get("url")) or (r.get("verified") is False) for r in refs) \
        or ("※" in (idea.get("numbers") or ""))
    if has_unverified:
        parts.append('<div class="notice">이 아이디어의 일부 수치는 아직 출처 검증 전입니다(※ 표시).</div>')

    if idea.get("concept"):
        parts.append(section("개념", "<p>%s</p>" % esc(idea["concept"])))
    if idea.get("science"):
        parts.append(section("과학 원리", "<p>%s</p>" % esc(idea["science"])))
    if idea.get("numbers"):
        parts.append(section("핵심 숫자", "<p>%s</p>" % render_numbers(idea["numbers"])))
    if idea.get("economics"):
        parts.append(section("해야 하는 이유", "<p>%s</p>" % esc(idea["economics"])))

    checks = idea.get("checks") or []
    if checks:
        body = "<ul>" + "".join("<li>%s</li>" % esc(c) for c in checks) + "</ul>"
        parts.append(section("※ 확인 필요", body))

    # 참고문헌 — url 있을 때만 링크
    if refs:
        lis = []
        for i, r in enumerate(refs):
            nn = i + 1
            label = esc(r["label"])
            if r.get("url"):
                body = '<a href="%s" target="_blank" rel="noopener">%s</a>' % (esc(r["url"]), label)
                if r.get("verified") is False:
                    body += '<span class="badge-unverified">※미확인</span>'
            else:
                body = '<span class="ref-text">%s</span><span class="badge-unverified">※미확인</span>' % label
            lis.append('<li id="ref-%d">%s</li>' % (nn, body))
        parts.append(section("참고문헌", '<ol class="refs">%s</ol>' % "".join(lis)))

    # 연관 아이디어
    rel = [by_id[r] for r in (idea.get("related") or []) if r in by_id]
    if rel:
        lis = "".join('<li><a href="%s.html">%s</a></li>' % (esc(r["id"]), esc(r["title"])) for r in rel)
        parts.append(section("연관 아이디어", '<ul class="related-list">%s</ul>' % lis))

    # 교사 메모 (본문은 정적, 저장 로직만 notes.js)
    parts.append(
        '<div class="notes">'
        '<h2>교사 메모</h2>'
        '<label for="note-student">배정 학생</label>'
        '<input type="text" id="note-student" autocomplete="off" placeholder="학생 이름">'
        '<label for="note-memo">메모</label>'
        '<textarea id="note-memo" placeholder="지도 메모"></textarea>'
        '<div class="save-state" id="save-state" aria-live="polite"></div>'
        '</div>'
    )

    parts.append('<a class="back-link" href="../index.html">← 목록으로</a>')
    return "\n".join(parts)


def main():
    src = open(DATA, encoding="utf-8").read()
    ideas = parse_js_array(src)
    by_id = {it["id"]: it for it in ideas}
    outdir = os.path.join(BASE, "ideas")
    os.makedirs(outdir, exist_ok=True)

    # 기존 생성 파일 정리 (id가 바뀐 경우 대비)
    for f in os.listdir(outdir):
        if f.endswith(".html"):
            os.remove(os.path.join(outdir, f))

    for it in ideas:
        page = PAGE.format(
            title_esc=esc(it["title"]),
            title_attr=esc(it["title"]),
            cat=CATEGORY.get(it["category"], it["category"]),
            fav=FAV,
            body=build_detail_body(it, by_id),
            id_json=json.dumps(it["id"]),
        )
        with open(os.path.join(outdir, it["id"] + ".html"), "w", encoding="utf-8") as fp:
            fp.write(page)

    counts = Counter(it["category"] for it in ideas)
    nulls = sum(1 for it in ideas for r in (it.get("references") or []) if not r.get("url"))
    print("생성:", len(ideas), "개  카테고리:", dict(counts))
    print("url 없는 참고문헌(링크 금지 대상):", nulls, "건")
    print("ids:", ",".join(it["id"] for it in ideas))


if __name__ == "__main__":
    main()
