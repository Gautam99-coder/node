const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'data', 'tasks.json');

async function readFileSafe() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    // if file doesn't exist, create it
    if (err.code === 'ENOENT') {
      await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
      await fs.writeFile(DATA_PATH, '[]', 'utf8');
      return [];
    }
    throw err;
  }
}

async function writeTasks(tasks) {
  await fs.writeFile(DATA_PATH, JSON.stringify(tasks, null, 2), 'utf8');
}

async function getAll() {
  return await readFileSafe();
}

async function addTask({ title, description }) {
  const tasks = await readFileSafe();
  const task = {
    id: Date.now().toString(),
    title: (title || '').trim(),
    description: (description || '').trim(),
    createdAt: new Date().toISOString()
  };
  tasks.unshift(task); // newest first
  await writeTasks(tasks);
  return task;
}

async function deleteTask(id) {
  let tasks = await readFileSafe();
  const before = tasks.length;
  tasks = tasks.filter(t => t.id !== id);
  if (tasks.length === before) return false;
  await writeTasks(tasks);
  return true;
}

module.exports = { getAll, addTask, deleteTask };
