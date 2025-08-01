const textDisplay = document.getElementById('testText');
const inputBox = document.getElementById('inputBox');
const timerDisplay = document.getElementById('timer');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const resultMessage = document.getElementById('resultMessage');
const typeSound = document.getElementById('typeSound');

let startTime, interval, typed = 0;
let testText = `The quick brown fox jumps over the lazy dog. This is a sample typing text for the Typogram platform. Type accurately and as fast as you can to measure your real typing speed.`;

let currentIndex = 0;

function displayText() {
  textDisplay.innerHTML = '';
  for (let i = 0; i < testText.length; i++) {
    const span = document.createElement('span');
    span.innerText = testText[i];
    if (i === 0) span.classList.add('highlight');
    textDisplay.appendChild(span);
  }
}

function startTimer() {
  startTime = Date.now();
  interval = setInterval(() => {
    const time = Math.floor((Date.now() - startTime) / 1000);
    const mins = String(Math.floor(time / 60)).padStart(2, '0');
    const secs = String(time % 60).padStart(2, '0');
    timerDisplay.innerText = `Time: ${mins}:${secs}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function calculateResults() {
  stopTimer();
  const timeTaken = (Date.now() - startTime) / 60000; // in minutes
  const wordsTyped = typed / 5;
  const wpm = Math.round(wordsTyped / timeTaken);
  const totalChars = inputBox.value.length;
  const correctChars = testText.slice(0, totalChars).split('').filter((c, i) => c === inputBox.value[i]).length;
  const accuracy = Math.round((correctChars / totalChars) * 100);

  wpmDisplay.innerText = `WPM: ${wpm}`;
  accuracyDisplay.innerText = `Accuracy: ${accuracy}%`;
  resultMessage.innerText = `✅ Test Submitted! Time: ${timerDisplay.innerText.split(': ')[1]}`;
}

inputBox.addEventListener('input', () => {
  if (typed === 0) {
    startTimer();
  }

  const spans = textDisplay.querySelectorAll('span');
  const input = inputBox.value;

  typed++;

  typeSound.currentTime = 0;
  typeSound.play();

  spans.forEach((span, index) => {
    if (!input[index]) {
      span.classList.remove('correct', 'incorrect');
    } else if (input[index] === span.innerText) {
      span.classList.add('correct');
      span.classList.remove('incorrect');
    } else {
      span.classList.add('incorrect');
      span.classList.remove('correct');
    }
  });

  if (input.length === testText.length) {
    calculateResults();
    inputBox.disabled = true;
  }
});

document.getElementById('submitBtn').addEventListener('click', () => {
  calculateResults();
  inputBox.disabled = true;
});

displayText();
