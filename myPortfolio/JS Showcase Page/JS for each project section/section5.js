// SECTION 5 COUNTDOWN TIMER

const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const allTime = document.querySelectorAll(".timeLeft span");

// CREATE 2022 TIME
const time2022 = new Date(2021, 11, 31, 23, 59, 59).getTime();

// CONVERT TO MILLISECONDS
const calcSecond = 1000;
const calcMinute = calcSecond * 60;
const calcHour = calcMinute * 60;
const calcDay = calcHour * 24;

// SET-INTERVAL FUNCTION
const setTime = () => {
  // GET CURRENT TIME
  const timeNow = new Date().getTime();

  // TIME LEFT TO 2022
  const totalTimeLeft = time2022 - timeNow;

  // SET DAY
  day.textContent = Math.floor(totalTimeLeft / calcDay);

  // SET HOUR
  hour.textContent = Math.floor((totalTimeLeft % calcDay) / calcHour);

  // SET MINUTE
  minute.textContent = Math.floor((totalTimeLeft % calcHour) / calcMinute);

  // SET SECOND
  second.textContent = Math.floor((totalTimeLeft % calcMinute) / calcSecond);

  // ALWAYS SHOW DOUBLE DIGITS
  allTime.forEach((span) => {
    if (span.textContent.length === 1) {
      span.textContent = span.textContent.padStart(2, "0");
    }
  });
};

// UPDATE EVERY 1 SECOND
setInterval(setTime, 1000);
