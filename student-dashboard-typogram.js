document.addEventListener('DOMContentLoaded', () => {
  // You can load actual student name from backend/localStorage here
  document.getElementById('studentName').textContent = 'Moshiur'; // Example
});

function startPractice(level) {
  alert(`🚀 Starting ${level} Practice Test...`);
  // Redirect to practice test page
  window.location.href = `typing-test-typogram.html?level=${level}`;
}

function attemptContest() {
  const hasAttempted = localStorage.getItem('contestAttempted') === 'true';
  const messageEl = document.getElementById('contestMsg');

  if (hasAttempted) {
    messageEl.textContent = '❌ You have already attempted this contest.';
  } else {
    localStorage.setItem('contestAttempted', 'true');
    messageEl.style.color = 'green';
    messageEl.textContent = '✅ Contest started. Good luck!';
    setTimeout(() => {
      window.location.href = 'typing-contest-typogram.html';
    }, 1500);
  }
}
