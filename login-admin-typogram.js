document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const otp = document.getElementById('otp').value.trim();
  const systemId = document.getElementById('systemId').value.trim();
  const message = document.getElementById('loginMessage');

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

  if (systemId.length < 6) {
    message.style.color = 'red';
    message.textContent = '❌ Invalid or missing System ID.';
    return;
  }

  message.style.color = 'lightgreen';
  message.textContent = `✅ Login successful! Redirecting to Admin Dashboard...`;

  setTimeout(() => {
    window.location.href = 'admin-dashboard-typogram.html';
  }, 2000);
});
