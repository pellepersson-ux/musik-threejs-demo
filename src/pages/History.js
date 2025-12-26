export function History() {
    const section = document.createElement('section');
    section.className = 'page-history';
    section.innerHTML = `
    <h1>Musikhistoria & Genrer 📜</h1>
    <p>Här ska vi resa genom tiden – från barocken till modern pop!</p>
    <div style="background: #eef; padding: 20px; border-radius: 8px; margin-top: 20px;">
      <h3>Kommande innehåll:</h3>
      <ul>
        <li>Tidslinje över epoker</li>
        <li>Genrekunskap (Rock, Jazz, Hiphop...)</li>
        <li>Kända kompositörer</li>
      </ul>
    </div>
  `;
    return section;
}