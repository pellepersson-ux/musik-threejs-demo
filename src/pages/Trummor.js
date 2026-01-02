export function Trummor() {
  const section = document.createElement('section');
  section.className = 'page-detail';

  section.innerHTML = `
    <div class="content-container">
      <div style="margin-bottom: 20px;">
        <a href="/instrument" class="back-link" data-link>← Tillbaka till instrument</a>
      </div>
      
      <h1>Lär dig spela Trummor 🥁</h1>
      <p>Håll takten! Lär dig rytmer och beats.</p>

      <div class="video-container" style="margin: 30px 0; aspect-ratio: 16/9; max-width: 800px;">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/et9hU7QMDYU" 
          title="Trumlektion" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <div class="info-text">
        <h3>Lektion 1: Grundkompet</h3>
        <p>Vi lär oss det klassiska "bom-tjack"-kompet som används i tusentals låtar.</p>
      </div>
    </div>
  `;

  return section;
}