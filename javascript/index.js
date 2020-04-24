const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  // ... your code goes here
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement("li");
  li.innerText = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  let allSplits = document.getElementById("splits");
  allSplits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.className = "btn split";
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  // ... your code goes here
  chronometer.startClick(printTime);
  setStopBtn();
  setSplitBtn();
}

function stopTimer() {
  chronometer.stopClick();
  setStartBtn();
  setResetBtn();
}

// Start/Stop Button
// let toggle = true;
// btnLeft.addEventListener('click',() => {
//   if(ticking){
//     chronometer.startClick(printTime)
//     btnLeft.innerHTML = 'Stop'
//     btnLeft.className = 'btn stop'
//   }else {
//     chronometer.stopClick()
//     stopped = !stopped
//     btnLeft.innerHTML = 'start'
//     btnLeft.className = 'btn start'
//   }
//   stopped =!stopped
// });
// if(btnLeft.classList.contains('start)){
// chronometer.startClick() //we start at the time
// setStopBtn()
// }
//})

btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  chronometer.resetClick();
});
