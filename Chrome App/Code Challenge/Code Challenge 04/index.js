const clockTitle = document.querySelector('.clock');

function getClock() {
  const today = new Date();
  const christmasEve = new Date('2023-12-24');
  const differenceDays = christmasEve - today;

  const leftDays = String(Math.floor(differenceDays / (1000 * 60 * 60 * 24)));

  const leftHours = String(
    Math.floor((differenceDays / (1000 * 60 * 60)) % 24)
  ).padStart(2, '0');

  const leftMinutes = String(
    Math.floor((differenceDays / (1000 * 60)) % 60)
  ).padStart(2, '0');

  const leftSeconds = String(Math.floor((differenceDays / 1000) % 60)).padStart(
    2,
    '0'
  );

  clockTitle.innerText = `${leftDays}d:${leftHours}h:${leftMinutes}m:${leftSeconds}s`;
}

getClock();
setInterval(getClock, 1000);
