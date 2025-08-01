document.getElementById('studentLoginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const otp = document.getElementById('otp').value.trim();
  const message = document.getElementById('loginMessage');

  // Validation
  if (username.length < 5) {
    message.style.color = 'yellow';
    message.textContent = '❌ Enter a valid username.';
    return;
  }

  if (!/^\d{6}$/.test(otp)) {
    message.style.color = 'orange';
    message.textContent = '❌ OTP must be exactly 6 digits.';
    return;
  }

  message.style.color = 'lightgreen';
  message.textContent = `✅ Login successful! Welcome ${username}. Redirecting...`;

  setTimeout(() => {
    window.location.href = 'student-dashboard-typogram.html';
  }, 2000);
});
