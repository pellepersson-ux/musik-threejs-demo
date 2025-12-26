export function Theory() {
    const section = document.createElement('section');
    section.className = 'page-theory';
    section.innerHTML = `
    <h1>Teori & Samhälle 🎼</h1>
    <p>Musikens byggstenar och hur den påverkar oss.</p>
    <div style="background: #efe; padding: 20px; border-radius: 8px; margin-top: 20px;">
      <h3>Kommande innehåll:</h3>
      <ul>
        <li>Notkunskap & Rytm</li>
        <li>Lagar & Regler (Upphovsrätt)</li>
        <li>Musik i media</li>
      </ul>
    </div>
  `;
    return section;
}