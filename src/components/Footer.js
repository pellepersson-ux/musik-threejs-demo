export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-info">
        <p>&copy; ${new Date().getFullYear()} Tonverkstan.</p>
        <p>En digital plattform för musikundervisning.</p>
      </div>
      <div class="qr-section">
        <p class="qr-label">Dela denna sida:</p>
        <img class="qr-code" src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(window.location.href)}" alt="QR Kod för denna sida" loading="lazy" />
      </div>
    </div>
  `;

  return footer;
}
