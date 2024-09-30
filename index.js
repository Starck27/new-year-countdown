const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

function getNewYearTime() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  return new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
}

let newYearTime = getNewYearTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  if (gap <= 0) {
    newYearTime = getNewYearTime();
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  dayElement.innerText = d;
  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondElement.innerText = s;

  setTimeout(updateCountdown, 1000);
}
