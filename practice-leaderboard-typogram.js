document.addEventListener('DOMContentLoaded', () => {
  const leaderboardBody = document.getElementById('leaderboardBody');
  const emptyMessage = document.getElementById('emptyMessage');

  // Simulated data (replace with real fetch from DB)
  const practiceResults = [
    { date: '2025-06-05', wpm: 52, accuracy: 94, time: '1:00' },
    { date: '2025-06-04', wpm: 45, accuracy: 88, time: '1:20' },
    { date: '2025-06-03', wpm: 60, accuracy: 96, time: '0:50' },
  ];

  if (practiceResults.length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
    practiceResults.forEach(result => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${result.date}</td>
        <td>${result.wpm}</td>
        <td>${result.accuracy}%</td>
        <td>${result.time}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  }
});

// Table sorting by column index
function sortTable(columnIndex) {
  const table = document.getElementById("leaderboardTable");
  let rows, switching, i, x, y, shouldSwitch;
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[columnIndex];
      y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

      const xContent = isNaN(x.innerHTML) ? x.innerHTML : parseFloat(x.innerHTML);
      const yContent = isNaN(y.innerHTML) ? y.innerHTML : parseFloat(y.innerHTML);

      if (xContent < yContent) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
