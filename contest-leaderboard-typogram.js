document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('contestBody');
  const emptyMsg = document.getElementById('emptyMsg');

  // Replace this simulated data with real backend data
  const contestResults = [
    { name: 'Rafiul Islam', wpm: 62, accuracy: 97, time: '1:00' },
    { name: 'Tania Akter', wpm: 55, accuracy: 91, time: '1:10' },
    { name: 'Moshiur Rahaman', wpm: 72, accuracy: 95, time: '0:50' },
  ];

  if (contestResults.length === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
    contestResults.forEach(r => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${r.name}</td>
        <td>${r.wpm}</td>
        <td>${r.accuracy}%</td>
        <td>${r.time}</td>
      `;
      tbody.appendChild(row);
    });
  }
});

// Sort table by column index
function sortContestTable(columnIndex) {
  const table = document.getElementById("contestTable");
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
