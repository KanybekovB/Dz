//*GMAIL CHECK*

const gmailCheck = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmail_result = document.querySelector("#gmail_result");
const regExp = /\w{5}@gmail.com$/; // *ДОЛЖЕН БЫТЬ НЕ МЕНЬШЕ 5

gmailButton.addEventListener("click", () => {
  let checkGmail = regExp.test(gmailCheck.value);
  if (checkGmail === true) {
    gmail_result.innerHTML = "account is found";
    gmail_result.style.color = "green";
  } else {
    gmail_result.innerHTML = "account is not found";
    gmail_result.style.color = "red";
  }
});

//*CHILD BLOCK*

const childBlock = document.querySelector(".child_block");
let positionX = 0;
let positionY = 0;
const moveBlock = () => {
  if (positionX < 447 && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
    setTimeout(moveBlock, 3);
  } else if (positionX >= 447 && positionY < 447) {
    positionY++;
    childBlock.style.top = `${positionY}px`;
    setTimeout(moveBlock, 3);
  } else if (positionX > 0 && positionY >= 447) {
    positionX--;
    childBlock.style.left = `${positionX}px`;
    setTimeout(moveBlock, 3);
  } else if (positionX === 0 && positionY <= 447) {
    positionY--;
    childBlock.style.top = `${positionY}px`;
    setTimeout(moveBlock, 3);
  }
};

moveBlock();

//*STOP WATCH* with 'setInterval'

const ml_Seconds = document.querySelector("#ml-seconds");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let mlSeconds_start = 0;
let seconds_start = 0;
let minutes_start = 0;
let forClearInterval; // * ДЛЯ ПОЛУЧЕНИЯ 'setInterval' и дальнейшего взаимодействия с ним
let isRunning = false; // * ДЛЯ ТОГО ЧТО БЫ ПРОВЕРИТЬ В КАКОМ СОСТОЯНИИ СЕКУНДОМЕР В РАБОЧЕМ ИЛИ НЕТ

function start_button() {
  mlSeconds_start++;
  ml_Seconds.innerHTML = `${mlSeconds_start}`;

  if (mlSeconds_start === 99) {
    seconds_start++;
    seconds.innerHTML = `${seconds_start}`;
    mlSeconds_start = 0;
  }
  if (seconds_start === 59) {
    minutes_start++;
    minutes.innerHTML = `${minutes_start}`;
    seconds_start = 0;
  }
}

function resetTimer() {
  clearInterval(forClearInterval);
  mlSeconds_start = 0;
  seconds_start = 0;
  minutes_start = 0;
  ml_Seconds.innerHTML = "00";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  isRunning = false;
}

start.onclick = () => {
  if (isRunning) {
    clearInterval(forClearInterval);
    forClearInterval = setInterval(start_button, 16);
  } else {
    isRunning = true;
    forClearInterval = setInterval(start_button, 16);
  }
  start.innerHTML = "Start"
};

stop.onclick = () => {
  clearInterval(forClearInterval);
  start.innerHTML = 'Resume';
};

reset.onclick = () => {
  resetTimer();
};

//* STOPWATCH 2.0 with setTimeout
// function start_button() {
//   mlSeconds_start++;
//   ml_Seconds.innerHTML = `${mlSeconds_start}`;
//   if (mlSeconds_start === 99) {
//     seconds_start++;
//     seconds.innerHTML = `${seconds_start}`;
//     mlSeconds_start = 0;
//   }
//   if (seconds_start === 59) {
//     minutes_start++;
//     minutes.innerHTML = `${minutes_start}`;
//     seconds_start = 0;
//   }
//   forClearInterval = setTimeout(start_button, 16)
// }

// function resetTimer() {
//   clearTimeout(forClearInterval);
//   mlSeconds_start = 0;
//   seconds_start = 0;
//   minutes_start = 0;
//   ml_Seconds.innerHTML = '00';
//   seconds.innerHTML = '00';
//   minutes.innerHTML = '00';
//   isRunning = false;
// }

// start.onclick = () => {
//   if(isRunning){
//     clearTimeout(forClearInterval);
//     setTimeout(start_button, 16);
//   }else{
//     isRunning = true;
//     setTimeout(start_button, 16);
//   }
// };

// stop.onclick = () => {
//   clearTimeout(forClearInterval);
// };

// reset.onclick = () => {
//   resetTimer()
// };
