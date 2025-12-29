export function Gitarr() {
    const section = document.createElement('section');
    section.className = 'page-detail';

    section.innerHTML = `
    <div class="content-container">
      <div style="margin-bottom: 20px;">
        <a href="/instrument" class="back-link" data-link>← Tillbaka till instrument</a>
      </div>
      
      <h1>Lär dig spela Gitarr 🎸</h1>
      <p>Här kommer dina gitarrlektioner.</p>

      <div class="video-container" style="margin: 30px 0; aspect-ratio: 16/9; max-width: 800px;">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/H5M0A_tM7Q8" 
          title="Gitarrlektion" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>

      <div class="info-text">
        <h3>Lektion 1: Dina första ackord</h3>
        <p>I den här videon lär vi oss E-moll och A-moll.</p>
      </div>
    </div>
  `;

    return section;
}