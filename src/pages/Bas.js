export function Bas() {
  const section = document.createElement('section');
  section.className = 'page-detail';

  section.innerHTML = `
    <div class="content-container">
      <div style="margin-bottom: 20px;">
        <a href="/instrument" class="back-link" data-link>← Tillbaka till instrument</a>
      </div>
      
      <h1>Lär dig spela Bas 🎸</h1>
      <p>Här kommer dina lektioner att ligga. Just nu är detta en platshållare.</p>

      <div class="video-container" style="margin: 30px 0; aspect-ratio: 16/9; max-width: 800px;">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/w4a2ge9_L3M" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <div class="info-text">
        <h3>Lektion 1: Grunderna</h3>
        <p>Här kan du skriva lite text om vad videon handlar om, till exempel vilka toner man lär sig.</p>
      </div>
    </div>
  `;

  return section;
}