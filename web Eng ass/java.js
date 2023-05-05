const timeInput = document.getElementById("time-input");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const alarmSound = document.getElementById("alarm-sound");

let countdownInterval;

function startCountdown() {
  const timeArray = timeInput.value.split(":").map(Number);
  const totalSeconds = timeArray[0] * 3600 + timeArray[1] * 60 + timeArray[2];

  countdownInterval = setInterval(() => {
    const hoursLeft = Math.floor(totalSeconds / 3600);
    const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
    const secondsLeft = totalSeconds % 60;

    const timerString = `${hoursLeft.toString().padStart(2, "0")}:${minutesLeft.toString().padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
    timeInput.value = timerString;

    if (totalSeconds === 0) {
      clearInterval(countdownInterval);
      alarmSound.play();
      window.alert("Time is up!");
    } else {
      totalSeconds--;
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
  timeInput.value = "";
}

startButton.addEventListener("click", startCountdown);
stopButton.addEventListener("click", stopCountdown);
