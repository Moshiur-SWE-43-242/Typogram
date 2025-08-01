const userType = document.getElementById('userType');
const dynamicIDBlock = document.getElementById('dynamicIDBlock');
const message = document.getElementById('message');

userType.addEventListener('change', () => {
  const selected = userType.value;
  dynamicIDBlock.innerHTML = '';

  const label = document.createElement('label');
  const input = document.createElement('input');
  input.id = 'dynamicID';
  input.required = true;

  if (selected === 'Student') {
    label.innerText = 'University Reg ID (Format: 123-45-678)';
    input.placeholder = 'e.g. 123-45-678';
    input.maxLength = 10;

    input.addEventListener('input', () => {
      let value = input.value.replace(/\D/g, '').slice(0, 8);
      if (value.length > 5)
        input.value = `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5)}`;
      else if (value.length > 3)
        input.value = `${value.slice(0, 3)}-${value.slice(3)}`;
      else
        input.value = value;
    });

  } else if (selected === 'Admin') {
    label.innerText = '9-Digit Employee ID';
    input.placeholder = 'e.g. 123456789';
    input.maxLength = 9;

    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '').slice(0, 9);
    });
  }

  dynamicIDBlock.appendChild(label);
  dynamicIDBlock.appendChild(input);
});

// ✅ Form submission
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const role = userType.value;
  const fname = document.getElementById('firstName').value.trim();
  const email = document.getElementById('email').value.trim();
  const dynamicID = document.getElementById('dynamicID')?.value.trim();

  // Email format
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(email)) {
    message.textContent = '❌ Invalid email format.';
    return;
  }

  // Role validations
  if (role === 'Student') {
    if (!/^\d{3}-\d{2}-\d{3}$/.test(dynamicID)) {
      message.textContent = '❌ Reg ID must be 123-45-678.';
      return;
    }
    if (!email.endsWith('@diu.edu.bd') && !email.endsWith('@gmail.com')) {
      message.textContent = '❌ Students must use @diu.edu.bd or @gmail.com.';
      return;
    }
  } else if (role === 'Admin') {
    if (!/^\d{9}$/.test(dynamicID)) {
      message.textContent = '❌ Employee ID must be 9 digits.';
      return;
    }
    if (!email.endsWith('@diu.edu.bd')) {
      message.textContent = '❌ Admins must use @diu.edu.bd email.';
      return;
    }
  } else {
    message.textContent = '❌ Please select a valid role.';
    return;
  }

  const username = `${fname}_${dynamicID}`.toLowerCase();
  const otp = Math.floor(100000 + Math.random() * 900000);

  message.style.color = '#a0ffaf';
  message.innerHTML = `✅ Username: <b>${username}</b><br>OTP sent to: <b>${email}</b><br>Redirecting...`;

  setTimeout(() => {
    window.location.href = 'email-verification-typogram.html';
  }, 2500);
});
