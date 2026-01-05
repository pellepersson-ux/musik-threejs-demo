export function Theory() {
  const section = document.createElement('section');

  // --- 1. CSS & STYLING ---
  // Här lägger vi in all design för korten och modalen (fönstret som öppnas)
  const styles = `
    <style>
      .hidden-theory { display: none !important; }

      /* Kort-Grid för ämnen */
      .theory-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }

      .theory-card {
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        border-bottom: 4px solid #3498db; /* Blå accent */
      }

      .theory-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      }

      .theory-icon {
        font-size: 3rem;
        margin-bottom: 15px;
        display: block;
      }

      /* --- MODAL (Lektionen) --- */
      .theory-modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85);
        z-index: 2000;
        display: flex; justify-content: center; align-items: center;
        padding: 20px;
      }

      .theory-content {
        background: #fff;
        width: 100%;
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto; /* Scrolla om innehållet är långt */
        border-radius: 8px;
        position: relative;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }

      /* Responsiv Video-container (16:9 format) */
      .video-wrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 ratio */
        height: 0;
        background: #000;
        margin-bottom: 20px;
        border-radius: 5px;
        overflow: hidden;
      }
      
      .video-wrapper iframe {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        border: 0;
      }

      /* Bilder (Noter) */
      .theory-image {
        max-width: 100%;
        height: auto;
        margin: 20px 0;
        border: 1px solid #eee;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      }

      .close-theory {
        position: absolute;
        top: 15px; right: 20px;
        font-size: 2rem;
        cursor: pointer;
        color: #333;
        transition: color 0.2s;
      }
      .close-theory:hover { color: #e74c3c; }

      h2 { color: #2c3e50; margin-bottom: 10px; }
      p { line-height: 1.6; color: #555; margin-bottom: 15px; }
      ul { text-align: left; margin-bottom: 15px; color: #555; }
      li { margin-bottom: 5px; }

    </style>
  `;

  // --- 2. HTML-STRUKTUR ---
  section.innerHTML = styles + `
    <div class="page-detail" style="text-align: center;">
      <h1>Teori & Samhälle 🎼</h1>
      <p style="max-width: 600px; margin: 0 auto 40px auto; color: #ccc