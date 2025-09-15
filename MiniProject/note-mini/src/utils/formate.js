// src/utils/format.js
function truncate(text, max = 60) {
  if (!text) return '';
  return text.length > max ? text.slice(0, max) + '…' : text;
}

function toTitleCase(s = '') {
  return s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
}

module.exports = { truncate, toTitleCase };
