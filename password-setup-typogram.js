document.getElementById('passwordForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const pass = document.getElementById('newPassword').value;
  const confirm = document.getElementById('confirmPassword').value;
  const message = document.getElementById('message');

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!regex.test(pass)) {
    message.style.color = 'yellow';
    message.textContent = '❌ Password does not meet requirements.';
    return;
  }

  if (pass !== confirm) {
    message.style.color = 'orange';
    message.textContent = '❌ Passwords do not match.';
    return;
  }

  message.style.color = 'lightgreen';
  message.textContent = '✅ Password set successfully! Redirecting...';

  // Simulate redirect
  setTimeout(() => {
    window.location.href = 'login-student-typogram.html'; // or admin page if needed
  }, 2000);
});
