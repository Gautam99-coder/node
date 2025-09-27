const fs = require('fs').promises;
const path = require('path');

const FILE = path.join(__dirname, '..', 'tasks.json');

async function readTasks() {
  try {
    const data = await fs.readFile(FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    // if file missing, return empty array
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeTasks(tasks) {
  // write atomically
  await fs.writeFile(FILE, JSON.stringify(tasks, null, 2), 'utf8');
}

async function getAll() {
  return readTasks();
}

async function getById(id) {
  const tasks = await readTasks();
  return tasks.find(t => t.id === id);
}

async function create(task) {
  const tasks = await readTasks();
  // create id: number incremental
  const nextId = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  const newTask = { id: nextId, title: task.title, completed: false, createdAt: new Date().toISOString() };
  tasks.push(newTask);
  await writeTasks(tasks);
  return newTask;
}

async function update(id, changes) {
  const tasks = await readTasks();
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return null;
  tasks[idx] = { ...tasks[idx], ...changes };
  await writeTasks(tasks);
  return tasks[idx];
}

async function remove(id) {
  let tasks = await readTasks();
  const before = tasks.length;
  tasks = tasks.filter(t => t.id !== id);
  if (tasks.length === before) return false;
  await writeTasks(tasks);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
