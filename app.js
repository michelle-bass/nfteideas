/* index.html 로직 — 카드 렌더 · 필터 · 학생 배지 · 메모 내보내기/가져오기
 * 콘텐츠는 window.IDEAS(ideas-data.js)에서만 가져온다. 텍스트 생성·윤색 없음. */
(function () {
  "use strict";

  var STORE_KEY = "portfolio-notes-v1";
  var CATEGORY = {
    heatwave: "폭염",
    outage:   "정전",
    flood:    "홍수",
    drought:  "가뭄"
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function loadNotes() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  var ideas = window.IDEAS || [];
  var grid = document.getElementById("grid");
  var filters = document.getElementById("filters");
  var assignedToggle = document.getElementById("assigned-toggle");
  var current = "all";
  var assignedOnly = false;

  function hasStudent(notes, id) {
    var n = notes[id];
    return !!(n && n.student && String(n.student).trim());
  }

  function render() {
    var notes = loadNotes();
    var list = ideas.filter(function (it) {
      if (current !== "all" && it.category !== current) return false;
      if (assignedOnly && !hasStudent(notes, it.id)) return false;
      return true;
    });

    if (!list.length) {
      grid.innerHTML = '<p class="empty">' +
        (assignedOnly ? "배정된 학생이 있는 아이디어가 없습니다." : "표시할 아이디어가 없습니다.") +
        "</p>";
      return;
    }

    grid.innerHTML = list.map(function (it) {
      var color = "var(--c-" + it.category + ")";
      var note = notes[it.id];
      var student = note && note.student ? String(note.student).trim() : "";
      var badge = student
        ? '<span class="card-student">👤 ' + esc(student) + "</span>"
        : "";
      return (
        '<a class="card" style="--cat-color:' + color + '" href="ideas/' + encodeURIComponent(it.id) + '.html">' +
          badge +
          '<span class="card-cat cat-' + it.category + '">' + esc(CATEGORY[it.category] || it.category) + "</span>" +
          '<h2 class="card-title">' + esc(it.title) + "</h2>" +
          '<p class="card-subtitle">' + esc(it.subtitle) + "</p>" +
        "</a>"
      );
    }).join("");
  }

  // ---------- 카테고리 필터 ----------
  filters.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-tab[data-cat]");
    if (!btn) return;
    current = btn.getAttribute("data-cat");
    Array.prototype.forEach.call(filters.querySelectorAll(".filter-tab[data-cat]"), function (b) {
      b.setAttribute("aria-pressed", b === btn ? "true" : "false");
    });
    render();
  });

  // ---------- 배정됨만 보기 토글 ----------
  assignedToggle.addEventListener("click", function () {
    assignedOnly = !assignedOnly;
    assignedToggle.setAttribute("aria-pressed", assignedOnly ? "true" : "false");
    render();
  });

  // ---------- 내보내기 ----------
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  document.getElementById("export-btn").addEventListener("click", function () {
    var notes = loadNotes();
    var d = new Date();
    var stamp = d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate());
    var blob = new Blob([JSON.stringify(notes, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-notes-" + stamp + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // ---------- 가져오기 ----------
  var fileInput = document.getElementById("import-file");
  document.getElementById("import-btn").addEventListener("click", function () {
    fileInput.click();
  });
  fileInput.addEventListener("change", function () {
    var file = fileInput.files && fileInput.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var incoming;
      try {
        incoming = JSON.parse(reader.result);
      } catch (e) {
        alert("가져오기 실패: JSON 파일을 읽을 수 없습니다.");
        fileInput.value = "";
        return;
      }
      if (!incoming || typeof incoming !== "object" || Array.isArray(incoming)) {
        alert("가져오기 실패: 올바른 메모 파일 형식이 아닙니다.");
        fileInput.value = "";
        return;
      }
      var merged = loadNotes();
      var overwrites = Object.keys(incoming).filter(function (id) {
        return Object.prototype.hasOwnProperty.call(merged, id);
      });
      if (overwrites.length &&
          !confirm(overwrites.length + "개 항목이 이미 있습니다. 가져온 내용으로 덮어쓸까요?")) {
        fileInput.value = "";
        return;
      }
      Object.keys(incoming).forEach(function (id) {
        merged[id] = incoming[id];
      });
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(merged));
      } catch (e) {
        alert("저장 실패: 브라우저 저장 공간을 확인하세요.");
        fileInput.value = "";
        return;
      }
      fileInput.value = "";
      render();
      alert("메모를 가져왔습니다.");
    };
    reader.readAsText(file);
  });

  render();
})();
