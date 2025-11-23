export function Home() {
  const container = document.createElement('div');
  container.className = 'page-home';

  container.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <h1>Välkommen till Tonverkstan! 🎶</h1>
        <p class="subtitle">Din digitala musiksal för kreativt lärande.</p>
        <div class="hero-actions">
          <a href="/spel" class="btn-primary" data-link>Starta Spelet</a>
          <a href="/om" class="btn-secondary" data-link>Läs mer om oss</a>
        </div>
      </div>
    </section>
    
    <section class="features">
      <div class="feature-card">
        <h3>🎹 Interaktiva Spel</h3>
        <p>Lär dig musik genom att spela och utforska.</p>
      </div>
      <div class="feature-card">
        <h3>📚 Lärarresurser</h3>
        <p>Färdiga lektionsplaner och material för klassrummet.</p>
      </div>
      <div class="feature-card">
        <h3>✨ Anpassningsbart</h3>
        <p>Växla mellan ljust och mörkt läge för bästa upplevelse.</p>
      </div>
    </section>

    <section class="weekly-task">
      <h2>Veckans Uppgift</h2>
      <div class="card task-card">
        <div class="task-header">
          <h3>Skapa en rytm!</h3>
          <span class="tag">Årskurs 4-6</span>
        </div>
        <p>Använd rytm-maskinen och skapa en takt i 4/4. Försök att använda både fjärdedelar och åttondelar.</p>
        <button class="btn-primary">Gå till uppgiften</button>
      </div>
    </section>
  `;

  return container;
}
