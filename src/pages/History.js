export function History() {
  const section = document.createElement('section');

  // --- 1. CSS & STYLING ---
  const styles = `
    <style>
      .hidden-force { display: none !important; }

      /* --- LAYOUT --- */
      .history-container {
        max-width: 1000px;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 50px;
      }

      .grid-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 25px;
        margin-top: 30px;
        text-align: left;
      }

      /* --- KORT DESIGN --- */
      .history-card {
        background: #fff;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-left: 5px solid #e67e22; /* Orange för historia */
      }

      .history-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0,0,0,0.15);
      }

      .card-label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #555;
        font-weight: bold;
        margin-bottom: 5px;
        display: block;
      }

      .card-title {
        font-family: 'Outfit', sans-serif;
        font-size: 1.5rem;
        margin: 5px 0 10px 0;
        color: #2c3e50;
      }

      .read-more-btn {
        display: inline-block;
        margin-top: 15px;
        font-weight: bold;
        color: #e67e22;
      }

      /* Specialfärg för spelet/boken */
      .card-game {
        border-left-color: #9b59b6; /* Lila */
        background: #fdfafec0;
      }
      .card-game .read-more-btn { color: #9b59b6; }


      /* --- ARTIKEL-MODAL --- */
      .article-modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85);
        z-index: 2000;
        display: flex; justify-content: center; align-items: center;
        padding: 20px;
      }

      .article-content {
        background: #fff;
        width: 100%;
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 8px;
        position: relative;
        padding: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        font-family: 'Georgia', serif; 
      }

      .article-content h2 { font-family: 'Outfit', sans-serif; color: #e67e22; margin-bottom: 5px; }
      .article-content h3 { font-family: 'Outfit', sans-serif; margin-top: 30px; color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 5px;}
      .article-content p { line-height: 1.8; color: #222; font-size: 1.1rem; margin-bottom: 15px; }
      .article-content ul { margin-bottom: 20px; padding-left: 20px; line-height: 1.6; color: #222;}
      .article-content li { margin-bottom: 8px; }
      .article-period { font-size: 1.2rem; color: #444; font-style: italic; margin-bottom: 20px; display:block; }

      .close-btn {
        position: absolute; top: 15px; right: 25px;
        font-size: 3rem; cursor: pointer; color: #333;
        font-family: sans-serif;
        line-height: 0.8;
      }
      .close-btn:hover { color: #e74c3c; }

    </style>
  `;

  // --- 2. DATA: EPOKER & ARTIKLAR ---
  const epochs = [
    {
      id: "renassans",
      title: "Renässansen",
      period: "ca 1450-1600",
      summary: "Pånyttfödelse, upptäcktsresor och polyfoni.",
      content: `
        <p><b>- Pånyttfödelsen -</b></p>
        
        <h3>Vad var renässansen?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Under den här tiden vaknade ett nytt intresse för antikens Grekland och Rom. Man ville utforska världen, människan och kulturen på nytt. Det var en tid av upptäckter och nya idéer.</p>

        <h3>Samtiden - Vad hände i världen?</h3>
        <p>Medan medeltiden ofta fokuserade på Gud och kyrkan, handlade renässansen mer om <b>humanism</b> - en vilja att lära sig om människan och omvärlden.</p>
        <ul>
          <li><b>Upptäcktsresor:</b> Christofer Columbus "upptäckte" Amerika.</li>
          <li><b>Vetenskap:</b> Nicolaus Copernicus räknade ut att jorden snurrar runt solen (och inte tvärtom).</li>
          <li><b>Konst & Uppfinningar:</b> Leonardo da Vinci (känd som ett "universalgeni") målade, uppfann och studerade kroppen.</li>
        </ul>

        <h3>Musiken - Hur lät den?</h3>
        <p>Under renässansen blev musiken mer "tät" och fyllig än under medeltiden. Här är de viktigaste kännetecknen:</p>
        <ul>
          <li><b>Polyfoni (Flerstämmighet):</b> Istället för en ensam melodi hade man nu ofta 4-5 olika stämmor som sjöngs samtidigt. Varje stämma hade sin egen melodi (detta kallas självständiga stämmor).</li>
          <li><b>Imitation:</b> En teknik där stämmorna härmar varandra. En stämma börjar, och strax efter kommer nästa in med samma melodi.</li>
          <li><b>A Cappella:</b> Detta var körsångens "gyllene era". A cappella betyder "som i kapellet" och innebär sång helt utan instrument.</li>
          <li><b>Modala skalor:</b> Man använde inte dur och moll som vi gör idag, utan så kallade kyrkotonarter (modala skalor).</li>
        </ul>

        <h3>Instrument</h3>
        <p>Även om körsång var viktigast, användes instrument flitigt. Några vanliga var:</p>
        <ul>
          <li><b>Luta:</b> Ett stränginstrument, föregångare till gitarren.</li>
          <li><b>Viola da gamba:</b> Ett stråkinstrument som man höll mellan knäna.</li>
          <li><b>Krumhorn:</b> Ett blåsinstrument med en böjd form.</li>
          <li><b>Orgel:</b> Tillåtet i kyrkan.</li>
        </ul>

        <h3>Viktiga Genrer (Stilar)</h3>
        <p>Man delade ofta upp musiken i två kategorier: Sakral (kyrklig) och Profan (folklig/världslig).</p>
        <p><b>1. Sakral musik (Kyrklig)</b><br>
        <i>Mässa:</i> Musik skriven till gudstjänstens texter (t.ex. Kyrie, Gloria).<br>
        <i>Motett:</i> En mindre körsång med religiös text, ofta på latin.</p>
        
        <p><b>2. Profan musik (Folklig/Världslig)</b><br>
        Här fanns olika sånger beroende på land. Den viktigaste var <i>Madrigalen</i>, en italiensk sångform där man ofta använde <b>tonmåleri</b>.</p>
        
        <div style="background:#f9f9f9; padding:15px; border-left: 4px solid #e67e22; margin: 20px 0; color:#333;">
            <b>Vad är tonmåleri?</b><br>
            Det är när musiken målar upp texten. Om texten handlar om att "springa upp och ner", så går melodin också upp och ner!
        </div>

        <h3>Kända Kompositörer</h3>
        <ul>
            <li><b>Josquin des Prez (1440-1521):</b> En superstjärna under sin tid. Han var så känd att Leonardo da Vinci målade av honom.</li>
            <li><b>Giovanni Pierluigi da Palestrina (1525-1594):</b> Mästare på kyrkomusik och mässor.</li>
            <li><b>Thomas Tallis (1505-1585):</b> Skrev bland annat ett stycke för hela 40 stämmor (Spem in alium).</li>
        </ul>

        <h3>Begreppslista</h3>
        <ul>
            <li><b>Polyfoni:</b> Flerstämmighet där alla stämmor är lika viktiga.</li>
            <li><b>A cappella:</b> Sång utan instrument.</li>
            <li><b>Sakral musik:</b> Musik för kyrkan/religiöst bruk.</li>
            <li><b>Profan musik:</b> Världslig musik (fest, kärlekssånger).</li>
            <li><b>Imitation:</b> När en stämma härmar en annan.</li>
        </ul>
      `
    },
    {
      id: "barock",
      title: "Barocken",
      period: "ca 1600-1750",
      summary: "Pampig stil, motorisk rytm, opera och giganter som Bach och Vivaldi.",
      content: `
        <p><b>- Den pampiga och utsmyckade stilen -</b></p>

        <h3>Vad var Barocken?</h3>
        <p>Ordet barock beskriver en stil som var utsmyckad (ornamental) och teatralisk. Vissa menade att den var pompös och överdriven, och ordet hade från början en ganska negativ klang. Idag räknas dock denna tid som en av de viktigaste i musikhistorien.</p>

        <h3>Samtiden - Vad hände i världen?</h3>
        <p>Kyrkan och kungliga hov var fortfarande de viktigaste platserna för musik, men fler människor fick tillgång till den.</p>
        <ul>
            <li><b>Musiken som "färskvara":</b> Det var viktigt att skriva nytt snabbt! Ibland spelades ett stycke bara en gång innan det kasserades.</li>
            <li><b>Vetenskap & System:</b> Precis som Isaac Newton försökte förklara världen med fysiska lagar, ville kompositörerna skapa ordning och system i musiken.</li>
        </ul>

        <h3>Musiken - Hur lät den?</h3>
        <p>Barockmusiken är ofta energisk och drivande. De viktigaste kännetecknen är:</p>
        <ul>
            <li><b>Motorisk rytm:</b> En stadig puls som driver framåt likt en motor eller symaskin. Tempot ändras sällan under låtens gång.</li>
            <li><b>Generalbas (Basso Continuo):</b> Barockens "kompgrupp". En basstämma som spelar genom hela låten (ofta cello eller fagott) tillsammans med ett instrument som spelar ackord (t.ex. cembalo eller orgel).</li>
            <li><b>Terrassdynamik:</b> Man växlade plötsligt mellan starkt och svagt (som trappsteg), istället för att gradvis öka volymen.</li>
            <li><b>Polyfoni:</b> Flera melodier som flätas samman samtidigt (precis som under renässansen).</li>
        </ul>

        <h3>Barockorkestern - En nyhet</h3>
        <p>Under denna tid föddes orkestern, men den såg inte ut som dagens jätteorkestrar.</p>
        <ul>
            <li><b>Liten storlek:</b> En barockorkester bestod ofta av bara 15-25 musiker (idag kan de vara över 80).</li>
            <li><b>Ingen dirigent:</b> Det fanns ingen dirigent som stod framför och viftade med en pinne. Istället leddes orkestern av den som spelade cembalo eller av förste violinisten.</li>
            <li><b>Stråkar i fokus:</b> Orkesterns kärna var stråkinstrumenten (violin, viola, cello) och generalbasen.</li>
            <li><b>Övriga instrument:</b> Blåsinstrument som oboe och fagott spelade ofta samma melodi som stråkarna för att ge mer färg. Trumpeter och pukor användes mest vid festliga tillfällen.</li>
        </ul>

        <h3>Instrument</h3>
        <ul>
            <li><b>Cembalo:</b> Ett tangentinstrument där strängarna knäpps (inte slås an som på ett piano). Det ger ett spetsigt, metalliskt ljud.</li>
            <li><b>Violin (Fiol):</b> Blev mycket populärt tack vare instrumentbyggare som Stradivarius.</li>
            <li><b>Orgel:</b> Kyrkans "drottninginstrument".</li>
        </ul>

        <h3>Viktiga Genrer (Stilar)</h3>
        <p><b>1. Opera (Profan musik)</b><br>
        En "teater med musik" som föddes i Italien runt år 1600.</p>
        <ul>
            <li><b>Kastratsångare:</b> Manliga sångare som kastrerades som barn för att behålla sina ljusa röster. De var tidens största superstjärnor.</li>
            <li><b>Recitativ & Aria:</b> Operan delades upp i <i>recitativ</i> (pratsång som för handlingen framåt) och <i>aria</i> (vacker sång där känslorna fick ta plats).</li>
        </ul>

        <p><b>2. Kyrklig musik</b></p>
        <ul>
            <li><b>Oratorium:</b> Kyrkans motsvarighet till opera (en berättelse) men utan kostymer och skådespel.</li>
            <li><b>Fuga:</b> Ett avancerat stycke där en melodi "jagas" av andra stämmor (typiskt för J.S. Bach).</li>
        </ul>

        <h3>Kända Kompositörer</h3>
        <ul>
            <li><b>Johann Sebastian Bach (1685-1750):</b> Barockens gigant. Mästerlig på orgel och kontrapunkt (flätade melodier). Känd för Toccata & Fuga i d-moll.</li>
            <li><b>Georg Friedrich Händel (1685-1759):</b> Känd för mäktiga körverk och oratorier, t.ex. Messias (med sången "Halleluja").</li>
            <li><b>Antonio Vivaldi (1678-1741):</b> "Den röde prästen" från Italien som skrev De fyra årstiderna.</li>
        </ul>

        <h3>Begreppslista</h3>
        <ul>
            <li><b>Motorisk rytm:</b> En stadig, maskinell puls.</li>
            <li><b>Generalbas:</b> Basstämma + ackord (ryggraden i barockmusik).</li>
            <li><b>Terrassdynamik:</b> Plötsliga växlingar mellan starkt/svagt.</li>
            <li><b>Polyfoni:</b> Flerstämmighet.</li>
            <li><b>Cembalo:</b> Barockens vanligaste tangentinstrument.</li>
        </ul>
      `
    },
    {
      id: "klassicism",
      title: "Klassicismen",
      period: "ca 1750-1825",
      summary: "Förnuft, balans, homofoni och giganterna Haydn, Mozart & Beethoven.",
      content: `
        <p><b>- Förnuftets och balansens tid -</b></p>

        <h3>Vad var Klassicismen?</h3>
        <p>Klassicismen kallas ofta för "förnuftets era". Efter barockens snirkliga och tunga stil ville man nu ha ordning, reda och tydlighet. Musiken skulle vara logisk och balanserad. Man talade om att melodin var musikens "själ" - den skulle vara enkel, vacker och lätt att nynna på.</p>

        <h3>Samtiden - Vad hände i världen?</h3>
        <p>Detta var en tid då människor började fundera mycket på hur samhället skulle organiseras och på individens fri- och rättigheter (det vi kallar upplysningstiden). Kompositörerna var inte bara hantverkare längre utan började ses som konstnärer som ville skapa en perfekt helhet.</p>

        <h3>Musiken - Hur lät den?</h3>
        <p>Musiken under klassicismen skiljer sig tydligt från barocken. Här är de viktigaste kännetecknen:</p>
        <ul>
            <li><b>Balans och Enkelhet:</b> Melodierna blev enklare och mindre "oroliga" än under barocken. Idealet var en tydlig melodi med ett enkelt ackompanjemang (detta kallas <i>homofoni</i>).</li>
            <li><b>Nyanser (Dynamik):</b> Under barocken växlade man plötsligt mellan starkt och svagt (terrassdynamik). Under klassicismen började man istället smyga med volymen:
                <ul>
                    <li><i>Crescendo:</i> Musiken växer och blir starkare.</li>
                    <li><i>Diminuendo:</i> Musiken avtar och blir svagare.</li>
                </ul>
            </li>
            <li><b>Känslor med kontroll:</b> Man ville uttrycka känslor, men alltid på ett behärskat och "smakfullt" sätt.</li>
        </ul>

        <h3>Viktiga Genrer (Stilar)</h3>
        <ul>
            <li><b>Symfoni:</b> Ett stort verk för orkester (Haydn och Beethoven skrev många sådana).</li>
            <li><b>Opera:</b> Operan utvecklades och musiken blev nu minst lika viktig som texten. Mozart skrev operor som <i>Don Juan</i> och <i>Trollflöjten</i> som spelas flitigt än idag.</li>
            <li><b>Oratorium:</b> En berättande form liknande opera men utan teater. Haydn skrev ett berömt oratorium som heter <i>Skapelsen</i>.</li>
        </ul>

        <h3>Kända Kompositörer</h3>
        <p>De tre stora giganterna bodde alla i Wien under delar av sina liv, därför kallas epoken ibland för <b>Wienklassicismen</b>.</p>
        
        <p><b>Joseph Haydn (1732-1809):</b><br>
        Kallas ofta "symfonins fader". Han hade en tuff uppväxt och kastades ut från körskolan, men jobbade sig upp och blev anställd hos den rika furstefamiljen Esterházy.<br>
        <i>Kända verk:</i> Oratoriet Skapelsen, Trumpetkonserten, Symfoni nr 48.</p>

        <p><b>Wolfgang Amadeus Mozart (1756-1791):</b><br>
        Världens mest kända underbarn. Redan som 4-åring spelade han fiol och cembalo, och vid 5 års ålder började han komponera. Han reste runt i hela Europa och visade upp sig. Han dog fattig och ung, men hann skriva otroliga mängder musik.<br>
        <i>Kända verk:</i> Eine kleine Nachtmusik, operorna Trollflöjten och Figaros bröllop.</p>

        <p><b>Ludwig van Beethoven (1770-1827):</b><br>
        Beethovens pappa ville att sonen skulle bli en "ny Mozart" och tvingade honom att öva hårt. Beethoven är känd för sitt heta temperament och för sitt tragiska öde: han blev döv mitt i karriären. Trots att han blev stendöv fortsatte han att komponera mästerverk in i det sista.<br>
        <i>Kända verk:</i> Ödessymfonin (nr 5), Missa Solemnis, Egmont.</p>

        <h3>Begreppslista (Bra för prov/läxa)</h3>
        <ul>
            <li><b>Crescendo:</b> Musiken blir gradvis starkare.</li>
            <li><b>Diminuendo:</b> Musiken blir gradvis svagare.</li>
            <li><b>Pianissimo:</b> Mycket svagt.</li>
            <li><b>Fortissimo:</b> Mycket starkt.</li>
            <li><b>Homofoni:</b> En tydlig melodi med komp (klassicismens ideal).</li>
            <li><b>Wienklassicismen:</b> Annat namn på epoken eftersom de tre stora kompositörerna verkade i staden Wien.</li>
        </ul>
      `
    },
    {
      id: "romantik",
      title: "Romantiken",
      period: "ca 1815-1910",
      summary: "Känslor, fantasi, fria konstnärer, nationalromantik och jätteorkestrar.",
      content: `
        <p><b>- Känslornas och fantasins tid -</b></p>

        <h3>Vad var Romantiken?</h3>
        <p>Under romantiken handlade allt om känslor, fantasi och drömmar. Om klassicismen (Wienklassicismen) var "hjärnan" (logik och ordning), så var romantiken "hjärtat". Kompositörerna ville inte längre följa strikta regler. De ville beskriva det overkliga, sagor, naturen och människans innersta tankar.</p>

        <h3>Samtiden - Vad hände i världen?</h3>
        <ul>
            <li><b>Den fria konstnären:</b> Tidigare var musiker anställda av en kyrka eller en kung (som tjänare). Nu blev de "fria konstnärer" som sålde sin musik och höll konserter för att tjäna pengar. De blev tidens kändisar!</li>
            <li><b>Industrialismen:</b> Städerna växte och fabriker byggdes. Många drömde sig bort från de smutsiga städerna ut till den vackra naturen, vilket märks i musiken.</li>
            <li><b>Nationalism:</b> Många länder ville hitta sin egen identitet. Man började använda folkmusik från det egna landet i den klassiska musiken (detta kallas Nationalromantik).</li>
        </ul>

        <h3>Musiken - Hur lät den?</h3>
        <p>Musiken blev "större" och mer dramatisk än någonsin tidigare.</p>
        <ul>
            <li><b>Fria former:</b> Man bröt mot de gamla reglerna. Ett stycke kunde vara jättekort (bara någon minut) eller jättelångt (över en timme).</li>
            <li><b>Melodier:</b> Melodierna blev längre, mer slingrande och känslosamma.</li>
            <li><b>Harmonik:</b> Man använde fler och konstigare ackord (kromatisk harmonik) för att skapa spänning och mystik.</li>
            <li><b>Programmusik:</b> Detta blev väldigt populärt. Det är instrumental musik som ska berätta en saga eller beskriva en tavla/naturscen utan att använda ord. Lyssnaren får "fantisera" ihop handlingen.</li>
        </ul>

        <h3>Instrument</h3>
        <ul>
            <li><b>Pianot:</b> Detta var pianots guldålder! Instrumentet utvecklades och blev starkare. Virtuoser (superskickliga musiker) som Frédéric Chopin och Franz Liszt skrev svår musik som skulle imponera på publiken.</li>
            <li><b>Jätteorkestern:</b> Orkestern växte enormt. Man lade till fler instrument (t.ex. tuba, piccoloflöjt, mer slagverk) för att kunna spela både svagare och mycket, mycket starkare än förr.</li>
        </ul>

        <h3>Viktiga Genrer (Stilar)</h3>
        <p><b>1. Lied (Sång)</b><br>
        En intim form för bara piano och en sångare. Texten var ofta en dikt om olycklig kärlek eller naturen. Schubert var mästaren här.</p>

        <p><b>2. Nationalromantik</b><br>
        Kompositörer ville hylla sitt hemland. I Norge skrev Edvard Grieg musik som lät som norska fjäll och troll (I bergakungens sal). I Finland skrev Jean Sibelius musik om finska sagor (Finlandia).</p>

        <p><b>3. Opera</b><br>
        Operan blev större och mer dramatisk. <br>
        <i>Richard Wagner:</i> Ville skapa ett "allkonstverk" där musik, teater och konst smälte samman. Hans operor varade ofta i 4-5 timmar och handlade om gudar och hjältar.</p>

        <h3>Kända Kompositörer</h3>
        <ul>
            <li><b>Franz Schubert (1797-1828):</b> Känd för sina vackra sånger (Lieder). Han dog ung men lämnade efter sig massor av musik.</li>
            <li><b>Frédéric Chopin (1810-1849):</b> "Pianots poet". Han skrev nästan enbart musik för piano. Hans musik är ofta drömsk och tekniskt svår.</li>
            <li><b>Pjotr Tjajkovskij (1840-1893):</b> Rysk kompositör som skrev fantastiska melodier. Känd för baletterna Svansjön och Nötknäpparen.</li>
            <li><b>Richard Wagner (1813-1883):</b> Tysk operakompositör som förändrade musikhistorien med sin mäktiga (och ibland tunga) musik. Känd för Valkyrieritten (känd från många filmer).</li>
        </ul>

        <h3>Begreppslista (Bra för prov/läxa)</h3>
        <ul>
            <li><b>Programmusik:</b> Musik som berättar en handling eller beskriver något utan text.</li>
            <li><b>Nationalromantik:</b> Musik som hyllar det egna landet/kulturen (ofta med inslag av folkmusik).</li>
            <li><b>Virtuos:</b> En tekniskt mycket skicklig musiker (en "stjärna").</li>
            <li><b>Lied:</b> Sång för piano och röst (tysk text).</li>
            <li><b>Fri konstnär:</b> En musiker som inte är anställd utan frilansar (typiskt för 1800-talet).</li>
        </ul>
      `
    }
  ];

  // --- 3. HTML-STRUKTUR ---
  section.innerHTML = styles + `
    <div class="page-detail history-container">
      <h1>Musikhistoria 📜</h1>
      <p style="color: #444; max-width:600px; margin: 0 auto 40px auto; font-size: 1.1rem;">
        Välkommen till arkivet. Här kan du läsa fördjupande texter om olika epoker eller utforska interaktiva berättelser.
      </p>

      <h2 style="text-align:left; border-bottom:1px solid #ddd; padding-bottom:10px; color:#333;">Utforska</h2>
      <div class="grid-section">
        
        <div class="history-card card-game" id="open-storybook-btn">
          <span class="card-label">Interaktiv Berättelse</span>
          <h3 class="card-title">Rockens Historia</h3>
          <p style="color:#444;">En lättläst bilderbok om hur rockmusiken föddes.</p>
          <span class="read-more-btn">Öppna boken ➡</span>
        </div>

      </div>

      <h2 style="text-align:left; border-bottom:1px solid #ddd; padding-bottom:10px; margin-top:50px; color:#333;">Epoker & Artiklar</h2>
      <div id="epoch-grid" class="grid-section"></div>

    </div>

    <div id="article-modal" class="article-modal-overlay hidden-force">
      <div class="article-content">
        <span class="close-btn" id="close-article">&times;</span>
        <h2 id="article-title">Titel</h2>
        <span id="article-period" class="article-period">Årtal</span>
        <div id="article-body">Text...</div>
      </div>
    </div>
  `;

  // --- 4. LOGIK ---

  const epochGrid = section.querySelector('#epoch-grid');
  const articleModal = section.querySelector('#article-modal');
  const closeArticleBtn = section.querySelector('#close-article');

  const artTitle = section.querySelector('#article-title');
  const artPeriod = section.querySelector('#article-period');
  const artBody = section.querySelector('#article-body');

  epochs.forEach(epoch => {
    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
      <span class="card-label">Epok</span>
      <h3 class="card-title">${epoch.title}</h3>
      <p style="font-weight:bold; color:#e67e22; margin-bottom:10px;">${epoch.period}</p>
      <p style="color:#444;">${epoch.summary}</p>
      <span class="read-more-btn">Läs artikel ➡</span>
    `;

    card.addEventListener('click', () => {
      artTitle.innerText = epoch.title;
      artPeriod.innerText = epoch.period;
      artBody.innerHTML = epoch.content;
      articleModal.classList.remove('hidden-force');
    });

    epochGrid.appendChild(card);
  });

  closeArticleBtn.addEventListener('click', () => {
    articleModal.classList.add('hidden-force');
  });

  articleModal.addEventListener('click', (e) => {
    if (e.target === articleModal) articleModal.classList.add('hidden-force');
  });

  const bookBtn = section.querySelector('#open-storybook-btn');
  bookBtn.addEventListener('click', () => {
    alert("Här kan vi koppla in bilderboken igen!");
  });

  return section;
}