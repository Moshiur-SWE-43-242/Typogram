document.getElementById('verificationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const otp = document.getElementById('otp').value.trim();
  const message = document.getElementById('message');

  // Basic validation
  if (username.length < 5 || !otp.match(/^\d{6}$/)) {
    message.style.color = 'yellow';
    message.textContent = "❌ Please enter a valid username and 6-digit code.";
    return;
  }

  // Simulate success
  message.style.color = 'lightgreen';
  message.innerHTML = `✅ Verified! Welcome <strong>${username}</strong>. Redirecting...`;

  // Redirect simulation
  setTimeout(() => {
    window.location.href = 'password-setup-typogram.html';
  }, 2000);
});
