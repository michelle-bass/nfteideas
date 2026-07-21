# 기후·재난 비즈니스 아이디어 포트폴리오

폭염·정전·홍수·가뭄 대응 비즈니스 아이디어 30선을 담은 정적 웹사이트입니다.
빌드 도구 없이 브라우저에서 바로 열립니다(순수 HTML/CSS/JS).

## 구조

| 파일 | 설명 |
|------|------|
| `index.html` | 헤더 + 카테고리 필터 + `배정됨만 보기` 토글 + 카드 그리드 |
| `ideas/<id>.html` | 아이디어별 상세 페이지(본문까지 정적 HTML로 구움). 30개 |
| `ideas-data.js` | 콘텐츠 원본(확정본). 수정하지 않음 |
| `style.css` | 공통 스타일 |
| `app.js` | index 로직: 카드 렌더·필터·학생 배지·메모 내보내기/가져오기 |
| `notes.js` | 상세 페이지 교사 메모 저장(localStorage) |
| `build_pages.py` | `ideas-data.js` → `ideas/*.html` 정적 생성기 |

## 상세 페이지 다시 빌드

`ideas-data.js`가 바뀌면 상세 페이지를 다시 생성합니다.

```bash
python build_pages.py
```

## 원칙

- 콘텐츠·수치·URL은 `ideas-data.js`에서만 가져오며 생성·윤색하지 않습니다.
- `url`이 없는 참고문헌은 링크로 만들지 않고 **※미확인** 배지로 표시합니다.
- 검증 전 수치(※)가 있는 아이디어는 상단에 안내 박스를 표시합니다.

## 메모

- 교사 메모·배정 학생은 브라우저 `localStorage`(`portfolio-notes-v1`)에만 저장됩니다.
- 다른 기기와 공유하려면 index 상단의 **메모 내보내기 / 가져오기**를 사용하세요.

## 배포 (GitHub Pages)

Settings → Pages → Branch: `main`, 폴더: `/ (root)`.
`index.html`이 루트에 있으므로 상대경로(`ideas/…` ↔ `../index.html`)가 그대로 동작합니다.
