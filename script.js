// Modal elements
const modal = document.getElementById('modal');
const certFrame = document.getElementById('certFrame');

/**
 * Tampilkan sertifikat di modal
 * @param {string} pdfFile - nama file PDF sertifikat
 */
function viewCert(pdfFile) {
  certFrame.src = pdfFile;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Disable scroll background
}

/**
 * Tutup modal sertifikat
 */
function closeModal() {
  modal.classList.remove('show');
  certFrame.src = '';
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Enable scroll background
}

// Tutup modal jika klik di luar konten modal
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Tutup modal dengan tombol Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});

// Preloader: sembunyikan setelah halaman load dan delay 2 detik
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 2000);
});

// Intro animation: setelah 5 detik, animasi keluar dan tampilkan konten utama
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  const mainContent = document.getElementById('main-content');

  setTimeout(() => {
    intro.classList.add('intro-exit');

    intro.addEventListener('animationend', () => {
      intro.style.display = 'none';
      mainContent.classList.add('show');
      mainContent.setAttribute('aria-hidden', 'false');
    }, { once: true });
  }, 5000);
});
