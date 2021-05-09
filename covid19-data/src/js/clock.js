function atTime() {
  const time = new Date();
  const Year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();
  const date = `${Year}년 ${month < 10 ? `0${month}` : `${month}`}월 ${
    day < 10 ? `0${day}` : `${day}`
  }일 ${hour < 10 ? `0${hour}` : `${hour}`}:${
    minute < 10 ? `0${minute}` : `${minute}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds} 기준 현황
  `}` ;

  const atTime = document.querySelector(".at_time");

  return (atTime.innerText = date);
}
setInterval(atTime, 1000);
