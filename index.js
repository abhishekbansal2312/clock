const body = document.body;
const time = document.getElementById("time");
const day = document.getElementById("day");

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekName = dayOfWeek[date.getDay()];
  time.textContent = `${hours < 9 ? "0" + hours : hours} : ${
    mins < 9 ? "0" + mins : mins
  } : ${secs < 9 ? "0" + secs : secs} ${ampm}`;
  day.textContent = `${dayOfWeekName}, ${month} ${date.getDate()}, ${date.getFullYear()}`;
}, 1000);
