const display = document.querySelector('#display');
const status = document.querySelector('#status');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let elapsed = 0;
let startedAt = null;
let interval = null;

function render() {
  const milliseconds = elapsed + (startedAt === null ? 0 : performance.now() - startedAt);
  const seconds = Math.floor(milliseconds / 1000);
  display.textContent = [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60]
    .map(value => String(value).padStart(2, '0')).join(':');
}

start.addEventListener('click', () => {
  if (startedAt !== null) return;
  startedAt = performance.now();
  interval = setInterval(render, 100);
  start.disabled = true;
  stop.disabled = false;
  status.textContent = 'Timer is running.';
  render();
});

stop.addEventListener('click', () => {
  if (startedAt === null) return;
  elapsed += performance.now() - startedAt;
  startedAt = null;
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;
  status.textContent = 'Paused. Take your time.';
  render();
});

reset.addEventListener('click', () => {
  clearInterval(interval);
  elapsed = 0;
  startedAt = null;
  start.disabled = false;
  stop.disabled = true;
  status.textContent = 'Ready when you are.';
  render();
});
