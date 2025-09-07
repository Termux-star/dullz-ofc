function viewCert(file) {
  document.getElementById('certFrame').src = file;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('certFrame').src = "";
}

