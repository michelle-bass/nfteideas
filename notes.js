/* 상세 페이지 교사 메모 저장 — 본문은 정적 HTML로 구워져 있고, 이 스크립트는
 * 배정 학생/메모 입력만 localStorage(portfolio-notes-v1)에 저장한다.
 * window.IDEA_ID 는 각 페이지에서 지정된다. */
(function () {
  "use strict";

  var STORE_KEY = "portfolio-notes-v1";
  var id = window.IDEA_ID;
  var studentEl = document.getElementById("note-student");
  var memoEl = document.getElementById("note-memo");
  var stateEl = document.getElementById("save-state");
  if (!id || !studentEl || !memoEl) return;

  function loadNotes() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  var existing = loadNotes()[id];
  if (existing) {
    studentEl.value = existing.student || "";
    memoEl.value = existing.memo || "";
    if (existing.updated) stateEl.textContent = "마지막 저장: " + existing.updated;
  }

  var timer = null;
  function scheduleSave() {
    stateEl.textContent = "저장 중…";
    if (timer) clearTimeout(timer);
    timer = setTimeout(save, 500);
  }
  function save() {
    var notes = loadNotes();
    var student = studentEl.value.trim();
    var memo = memoEl.value;
    if (!student && !memo.trim()) {
      delete notes[id];
    } else {
      notes[id] = { student: student, memo: memo, updated: new Date().toISOString() };
    }
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(notes));
      stateEl.textContent = notes[id] ? "저장됨: " + notes[id].updated : "저장 내용 없음";
    } catch (e) {
      stateEl.textContent = "저장 실패 — 브라우저 저장 공간을 확인하세요.";
    }
  }

  studentEl.addEventListener("input", scheduleSave);
  memoEl.addEventListener("input", scheduleSave);
})();
