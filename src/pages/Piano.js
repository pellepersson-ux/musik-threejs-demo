export function Piano() {
  const section = document.createElement('section');
  section.className = 'page-detail';

  section.innerHTML = `
    <div class="content-container">
      <div style="margin-bottom: 20px;">
        <a href="/instrument" class="back-link" data-link>← Tillbaka till instrument</a>
      </div>
      
      <h1>Lär dig spela Piano 🎹</h1>
      <p>Tangenter, skalor och melodier.</p>

      <div class="video-container" style="margin: 30px 0; aspect-ratio: 16/9; max-width: 800px;">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/71h8mzjqEGM" 
          title="Pianolektion" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <div class="info-text">
        <h3>Lektion 1: Hitta C-tangenten</h3>
        <p>Här lär du dig hur klaviaturen fungerar och var tonerna ligger.</p>
      </div>
    </div>
  `;

  return section;
}