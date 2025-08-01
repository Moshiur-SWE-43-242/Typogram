function switchTab(role) {
  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.help-content').forEach(div => div.classList.remove('active'));

  document.querySelector(`.tab[onclick*="${role}"]`).classList.add('active');
  document.getElementById(`${role}Help`).classList.add('active');
}

// Accordion functionality
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
  });
});

// Chatbot toggle
function toggleChatbot() {
  const box = document.getElementById('chatbotBox');
  box.style.display = (box.style.display === 'flex') ? 'none' : 'flex';
}

// Simulated AI reply
function handleKey(event) {
  if (event.key === 'Enter') {
    const input = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const userMsg = input.value.trim();
    if (!userMsg) return;

    const msg = document.createElement('p');
    msg.innerHTML = `<strong>You:</strong> ${userMsg}`;
    chatBody.appendChild(msg);

    const botReply = document.createElement('p');
    botReply.className = 'bot-msg';
    botReply.innerHTML = `<strong>Bot:</strong> I'm processing...`;

    chatBody.appendChild(botReply);
    input.value = "";

    setTimeout(() => {
      botReply.innerHTML = `<strong>Bot:</strong> Sorry! I'm just a simulated bot for now. Your question was: "${userMsg}" 😊`;
    }, 1500);
  }
}
