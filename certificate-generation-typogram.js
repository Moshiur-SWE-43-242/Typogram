document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('downloadBtn');
  const toggleCheckbox = document.getElementById('toggleCertificate');
  const customMessageInput = document.getElementById('customMessage');
  const sealUpload = document.getElementById('sealUpload');
  const signatureUpload = document.getElementById('signatureUpload');
  const status = document.getElementById('downloadStatus');

  let certificateAllowed = true;

  toggleCheckbox?.addEventListener('change', () => {
    certificateAllowed = toggleCheckbox.checked;
  });

  customMessageInput?.addEventListener('input', () => {
    const msg = customMessageInput.value.trim();
    if (msg) {
      document.getElementById('examType').textContent = msg;
    } else {
      document.getElementById('examType').textContent = 'Typing Practice';
    }
  });

  sealUpload?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      document.getElementById('sealImg').src = URL.createObjectURL(file);
    }
  });

  signatureUpload?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      document.getElementById('signatureImg').src = URL.createObjectURL(file);
    }
  });

  downloadBtn.addEventListener('click', () => {
    if (!certificateAllowed) {
      status.style.color = 'red';
      status.textContent = '❌ Certificate download is disabled by admin.';
      return;
    }

    status.style.color = 'green';
    status.textContent = '✅ Download started (simulate PDF generation)';
    
    // Simulate download
    setTimeout(() => {
      alert('🎉 Certificate downloaded!');
    }, 1000);
  });
});
