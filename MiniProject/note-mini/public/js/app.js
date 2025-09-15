// public/js/app.js
async function getCount() {
  try {
    const res = await fetch('/notes/json');
    const data = await res.json();
    const el = document.getElementById('note-count');
    if (el) el.textContent = data.notes.length;
  } catch (err) {
    console.error(err);
  }
}
window.addEventListener('DOMContentLoaded', getCount);
