document.getElementById('contestForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('contestTitle').value.trim();
  const text = document.getElementById('contestText').value.trim();
  const date = document.getElementById('contestDate').value;
  const time = document.getElementById('contestTime').value;
  const msg = document.getElementById('contestMsg');

  if (!title || !text || !date || !time) {
    msg.style.color = 'red';
    msg.textContent = '❌ Please fill in all contest fields.';
    return;
  }

  msg.style.color = 'green';
  msg.textContent = '✅ Contest launched successfully!';
  document.getElementById('contestForm').reset();
});

function viewLeaderboard(type) {
  alert(`📊 Viewing ${type} leaderboard (integration coming soon)`);
}
