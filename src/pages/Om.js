export function Om() {
  const container = document.createElement('div');
  container.className = 'page-om';

  container.innerHTML = `
    <section class="content-section about-section">
      <h1>Om Tonverkstan 🎵</h1>
      
      <div class="about-content">
        <p class="lead">Tonverkstan är en interaktiv digital plattform skapad för att göra musikundervisning i grundskolan roligare, enklare och mer tillgänglig.</p>
        
        <h2>Vår Vision</h2>
        <p>Vi vill ge alla elever möjlighet att utforska musikens värld på sina egna villkor, med moderna verktyg som inspirerar till skapande.</p>

        <h2>För Elever</h2>
        <ul>
          <li>Spelbaserat lärande</li>
          <li>Kreativa verktyg för komposition</li>
          <li>Tydliga övningar och uppgifter</li>
        </ul>

        <h2>För Lärare</h2>
        <ul>
          <li>Färdiga lektionspaket</li>
          <li>Enkel översikt och administration</li>
          <li>Verktyg anpassade för klassrummet</li>
        </ul>

        <div class="contact-info">
          <h3>Kontakta Oss</h3>
          <p>Har du frågor eller förslag? Hör av dig till oss!</p>
          <a href="mailto:hej@tonverkstan.se" class="link">hej@tonverkstan.se</a>
        </div>
      </div>
    </section>
  `;

  return container;
}
