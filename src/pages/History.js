export function History() {
  const container = document.createElement('div');
  container.className = 'history-page';

  // ==========================================
  // 1. DATA: KLASSISK MUSIK (Uppdaterade bilder)
  // ==========================================
  const classicalData = [
    {
      title: "Renässansen (1450–1600)",
      // Hämtas från public/images/Renassansen.jpg
      img: "/images/Renassansen.jpg",
      content: `
        <h3>Vad betyder Renässans?</h3>
        <p>Ordet renässans betyder "pånyttfödelse". Det man ville väcka till liv igen var idéer och ideal från de gamla grekerna och romarna (antiken). Perioden präglades av en nyfikenhet på människan, kulturen och världen.</p>

        <h3>1. Samtiden – Nytänkarnas tid</h3>
        <p>Under renässansen hände mycket som förändrade hur människor såg på världen. Det var en tid för upptäckter och vetenskap.</p>
        <ul>
          <li><strong>Kända personer:</strong> Upptäckaren Christofer Columbus, astronomen Nicolaus Copernicus och universalgeniet Leonardo da Vinci.</li>
          <li><strong>Boktryckarkonsten:</strong> Man kunde nu trycka böcker, vilket gjorde att noter och musik kunde spridas enklare.</li>
        </ul>

        <h3>2. Musiken – Hur lät den?</h3>
        <p>Musiken blev mer komplex än under medeltiden:</p>
        <ul>
          <li><strong>Polyfoni (Flerstämmighet):</strong> 4–5 olika stämmor som var lika viktiga och hade självständiga melodier.</li>
          <li><strong>Imitation:</strong> Stämmorna härmade (imiterade) varandra.</li>
          <li><strong>A cappella:</strong> Sång utan instrument.</li>
          <li><strong>Modala skalor:</strong> Man använde kyrkotonarter istället för dur och moll.</li>
        </ul>

        <h3>3. Instrumenten</h3>
        <ul>
          <li><strong>Luta:</strong> Ett stränginstrument som påminner om en gitarr.</li>
          <li><strong>Viola da gamba:</strong> Ett stråkinstrument med band på greppbrädan.</li>
          <li><strong>Krumhorn:</strong> Ett blåsinstrument med en speciell klang.</li>
        </ul>

        <h3>4. Musikstilar och Genrer</h3>
        <p><strong>Sakral musik (Kyrklig):</strong> Mässa och Motett.</p>
        <p><strong>Profan musik (Världslig):</strong> Madrigal (ofta med tonmåleri), Chanson och Lied.</p>

        <h3>5. Viktiga Tonsättare</h3>
        <ul>
          <li>Josquin des Prez</li>
          <li>Giovanni Pierluigi da Palestrina</li>
          <li>Thomas Tallis</li>
          <li>William Byrd</li>
        </ul>

        <h3>6. Lyssningstips</h3>
        <ul>
          <li>"Ave Maria ... Virgo serena" (Josquin des Prez)</li>
          <li>"Spem in alium" (Tallis)</li>
          <li>"Fair Phyllis I Saw" (Farmer)</li>
        </ul>
      `
    },
    {
      title: "Barocken (1600–1750)",
      img: "/images/Barocken.jpg",
      content: `
        <h3>Vad betyder Barock?</h3>
        <p>Ordet barock kommer troligen från portugisiskans "barocco", som betyder "ojämn pärla". I början användes ordet lite nedsättande för att beskriva något som var överdrivet, konstigt och svulstigt. Men idag är det namnet på en av musikhistoriens mest grandiosa epoker.</p>

        <h3>1. Samtiden – Prakt och Makt</h3>
        <p>Barocken var en tid av stora kontraster.</p>
        <ul>
          <li><strong>Kunglig glans:</strong> Detta var de enväldiga kungarnas tid (t.ex. Ludvig XIV). Man byggde enorma slott och kyrkor smyckade med guld och detaljer för att visa makt.</li>
          <li><strong>Vetenskap:</strong> Samtidigt gjorde vetenskapsmän som Isaac Newton stora framsteg (tyngdlagen). Man började organisera världen, vilket även märktes i musiken som blev mer strukturerad.</li>
        </ul>

        <h3>2. Musiken – Hur lät den?</h3>
        <p>Musiken förändrades drastiskt från renässansen. Här är de viktigaste begreppen:</p>
        <ul>
          <li><strong>Generalbas (Basso Continuo):</strong> Barockens viktigaste kännetecken! En basstämma som spelas genom hela låten (ofta cello + cembalo).</li>
          <li><strong>Dur och Moll:</strong> Man övergav de gamla kyrkotonarterna och började använda dur och moll, precis som i dagens popmusik.</li>
          <li><strong>Terassdynamik:</strong> Man växlade plötsligt mellan starkt (forte) och svagt (piano), som terrasser, istället för att öka volymen stegvis.</li>
          <li><strong>Affektläran:</strong> Tron att musik kunde påverka känslor direkt. En låt skulle uttrycka <em>en</em> känsla från början till slut.</li>
          <li><strong>Melodi och ackompanjemang:</strong> Tydlig sångmelodi med enkelt komp (monodi), vilket ledde till operans födelse.</li>
        </ul>

        <h3>3. Instrumenten</h3>
        <ul>
          <li><strong>Cembalo:</strong> Barockens "piano". Strängarna knäpps vilket ger ett spetsigt ljud. Man kan inte påverka volymen genom anslaget.</li>
          <li><strong>Orgel:</strong> Kyrkorgeln utvecklades till ett mäktigt instrument.</li>
          <li><strong>Stråkinstrument:</strong> Fiolen (violinen) tog över och blev orkesterns viktigaste instrument.</li>
        </ul>

        <h3>4. Nya Musikstilar</h3>
        <ul>
          <li><strong>Opera:</strong> Teater där man sjunger replikerna. Uppstod i Italien runt 1600.</li>
          <li><strong>Oratorium:</strong> Som opera (kör, solister, orkester) men med religiös text och utan skådespeleri.</li>
          <li><strong>Konsert (Concerto):</strong> En solist (eller liten grupp) spelar "mot" hela orkestern.</li>
          <li><strong>Fuga:</strong> En avancerad form av kanon där en melodi vandrar mellan stämmor enligt stränga regler.</li>
        </ul>

        <h3>5. De stora "Barock-giganterna"</h3>
        <ul>
          <li><strong>Claudio Monteverdi (1567–1643):</strong> Övergångsfigur. Skrev en av de första operorna, <em>L'Orfeo</em>.</li>
          <li><strong>Antonio Vivaldi (1678–1741):</strong> "Den röde prästen". Expert på violinkonserter (De fyra årstiderna).</li>
          <li><strong>Johann Sebastian Bach (1685–1750):</strong> Kanske historiens viktigaste tonsättare. Mästare på kontrapunkt och fuga. När han dog tog barocken slut.</li>
          <li><strong>Georg Friedrich Händel (1685–1759):</strong> Tysk som blev superkändis i London. Skrev pampig musik och oratorier.</li>
        </ul>

        <h3>6. Lyssningstips</h3>
        <ul>
          <li>"Våren" ur De fyra årstiderna (Vivaldi)</li>
          <li>"Toccata och fuga i d-moll" (Bach)</li>
          <li>"Halleluja-kören" ur Messias (Händel)</li>
          <li>"Air" (Bach)</li>
          <li>"L'Orfeo" (Monteverdi)</li>
        </ul>
      `
    },
    {
      title: "Wienklassicismen (1750–1820)",
      img: "/images/Klassicismen.jpg",
      content: `
        <h3>Vad betyder Klassicism?</h3>
        <p>Ordet härstammar från latinets <em>classicus</em> som syftade på medborgare av högsta rang. När vi pratar om "klassisk" stil menar vi ideal som hämtades från de gamla grekerna och romarna: balans, enkelhet, elegans, proportion och kontroll. Inom musiken kallas perioden ofta för <strong>Wienklassicismen</strong> eftersom de tre största tonsättarna (Haydn, Mozart och Beethoven) var verksamma i Wien.</p>

        <h3>1. Samtiden – Förnuft och Upplysning</h3>
        <p>Klassicismen sammanföll med Upplysningstiden.</p>
        <ul>
          <li><strong>Vetenskap och förnuft:</strong> Man började ifrågasätta kyrkans gamla regler och istället tro på människans eget förnuft och naturvetenskapen.</li>
          <li><strong>Minskad kyrkomusik:</strong> Eftersom kyrkans makt minskade skrevs det inte alls lika mycket musik för kyrkan som tidigare. De flesta kända verk från den här tiden är inte religiösa.</li>
        </ul>

        <h3>2. Musiken – Hur lät den?</h3>
        <p>Musiken blev "lättare" och luftigare jämfört med barockens tunga musik.</p>
        <ul>
          <li><strong>Homofoni:</strong> Motsatsen till barockens polyfoni. Man ville ha en tydlig melodi som kompades av enkla ackord.</li>
          <li><strong>Kortare melodier:</strong> Melodierna delades upp i kortare fraser för att kännas balanserade och symmetriska.</li>
          <li><strong>Mer känslor och variation:</strong> Humöret kunde svänga snabbt inom samma stycke – från glatt till sorgset (till skillnad från barockens "en känsla per låt").</li>
          <li><strong>Dynamik:</strong> Man började använda <em>crescendo</em> (gradvis starkare) och <em>diminuendo</em> (gradvis svagare) för att skapa spänning.</li>
        </ul>

        <h3>3. Instrumenten</h3>
        <ul>
          <li><strong>Pianot tar över:</strong> Under 1700-talet uppfanns pianot (fortepianot). Det ersatte cembalon eftersom man på pianot kunde spela både starkt och svagt.</li>
          <li><strong>Större orkestrar:</strong> Orkestern växte och fick fler instrument än under barocken.</li>
        </ul>

        <h3>4. Viktiga Musikstilar och Genrer</h3>
        <ul>
          <li><strong>Symfoni:</strong> En stor "sonat för orkester", oftast med fyra satser.</li>
          <li><strong>Stråkkvartett:</strong> Kammarmusik för fyra stråkar (två fioler, en viola och en cello). Haydn kallas "stråkkvartettens okrönte konung".</li>
          <li><strong>Opera (Opera Buffa):</strong> Komisk opera som handlade om vanliga människor och var rolig (utvecklades av Mozart).</li>
          <li><strong>Solokonsert:</strong> Ett verk där ett soloinstrument spelar med orkestern.</li>
        </ul>

        <h3>5. De tre "Giganterna" (Första Wienskolan)</h3>
        <p>Tre tonsättare dominerade totalt:</p>
        <ul>
          <li><strong>Joseph Haydn (1732–1809):</strong> Den äldste. Enormt viktig för symfonin och stråkkvartetten. Lärare åt de andra två.</li>
          <li><strong>Wolfgang Amadeus Mozart (1756–1791):</strong> Underbarnet som skrev perfekt musik i alla genrer. Epokens främsta representant.</li>
          <li><strong>Ludwig van Beethoven (1770–1827):</strong> Började som klassicist men hans senare musik blev så dramatisk att han startade nästa epok (Romantiken).</li>
        </ul>

        <h3>6. Lyssningstips</h3>
        <ul>
          <li>"Eine Kleine Nachtmusik" (Mozart)</li>
          <li>"Månskenssonaten" (Beethoven)</li>
          <li>"Nattens Drottning" ur Trollflöjten (Mozart)</li>
          <li>Klarinettkonsert i A-dur (Mozart)</li>
          <li>Stråkkvartett nr 61 i D-moll (Haydn)</li>
        </ul>
      `
    },
    {
      title: "Romantiken (1820–1900)",
      img: "/images/Romantiken.jpg",
      content: `
        <h3>Vad betyder Romantiken?</h3>
        <p>När vi pratar om Romantiken i musikhistorien handlar det inte nödvändigtvis om kärlek (även om det ofta förekommer). Det är ett estetiskt begrepp som hämtades från konsten och litteraturen. Om klassicismen handlade om ordning och reda, så handlade romantiken om känslor och frihet.</p>

        <h3>1. Samtiden – Den fria konstnären</h3>
        <p>Under romantiken förändrades kompositörens roll i samhället.</p>
        <ul>
          <li><strong>Från anställd till fri:</strong> Tidigare var kompositören ofta anställd av kung eller kyrka. Nu blev tonsättaren en "fri konstnär" som fick klara sig själv. Beethoven var symbolen för denna förändring.</li>
          <li><strong>Känslorna styr:</strong> Idealet var den lidande konstnären som lät inre känslor bestämma musikens form snarare än gamla regler.</li>
        </ul>

        <h3>2. Musiken – Hur lät den?</h3>
        <p>Musiken skiljer sig från klassicismen på flera sätt:</p>
        <ul>
          <li><strong>Friare form:</strong> Man ville ha mindre formella strukturer för att kunna uttrycka starkare känslor.</li>
          <li><strong>Programmusik och Berättande:</strong> Musiken skulle ofta berätta en saga eller beskriva en bild (t.ex. <em>I Bergakungens sal</em>).</li>
          <li><strong>Virtuositet:</strong> Det dök upp "superstjärnor" (virtuoser) som var extremt duktiga på sina instrument, särskilt piano (t.ex. Chopin och Liszt).</li>
          <li><strong>Större orkestrar:</strong> Orkestrarna växte och blev enorma mot slutet av perioden (Senromantiken) för att skapa mäktiga klanger.</li>
        </ul>

        <h3>3. Instrumenten</h3>
        <ul>
          <li><strong>Piano:</strong> Romantikens viktigaste instrument. Genom pianot kunde man uttrycka allt från svagaste viskning till stormande känslor.</li>
          <li><strong>Orkestern:</strong> Utvecklades ständigt med nya instrument och fler av varje sort för mer kraft.</li>
        </ul>

        <h3>4. Musikstilar och Genrer</h3>
        <ul>
          <li><strong>Lied (Sånger):</strong> En dikt tonsatt för sång och piano. Franz Schubert var mästaren här.</li>
          <li><strong>Opera och Musikdrama:</strong> Wagner skapade "musikdramer" där sång, musik, teater och scenografi smälte samman (<em>Gesamtkunstwerk</em>). Ofta nordisk mytologi.</li>
          <li><strong>Balett:</strong> Musiken till dans blev mer avancerad, t.ex. Tjajkovskijs <em>Svansjön</em>.</li>
          <li><strong>Symfonisk dikt:</strong> Ett orkesterverk i en sats som beskriver något utommusikaliskt, t.ex. en dikt.</li>
        </ul>

        <h3>5. Viktiga Tonsättare</h3>
        <ul>
          <li><strong>Franz Schubert (1797–1828):</strong> Melodiernas mästare. Dog ung men skrev över 600 sånger.</li>
          <li><strong>Frédéric Chopin (1810–1849):</strong> "Pianots poet". Skrev nästan enbart för piano.</li>
          <li><strong>Robert Schumann (1810–1856):</strong> Typisk romantiker, drömmande och personlig musik.</li>
          <li><strong>Clara Schumann (1819–1896):</strong> En av sin tids absolut bästa pianister och kompositör, trots tidens syn på kvinnliga skapare.</li>
          <li><strong>Pjotr Tjajkovskij (1840–1893):</strong> Rysk kompositör känd för vackra melodier och baletter.</li>
          <li><strong>Edvard Grieg (1843–1907):</strong> Norges stora tonsättare som använde nordiska folktoner.</li>
          <li><strong>Gustav Mahler (1860–1911):</strong> Känd för gigantiska symfonier som markerar slutet på romantiken.</li>
        </ul>

        <h3>6. Lyssningstips</h3>
        <ul>
          <li>"Ave Maria" (Schubert)</li>
          <li>"I Bergakungens sal" ur Peer Gynt (Grieg)</li>
          <li>"Regndroppspreludiet" (Chopin)</li>
          <li>Musik ur baletten "Svansjön" (Tjajkovskij)</li>
          <li>"Träumerei" (R. Schumann)</li>
          <li>Pianokonsert nr 2 i C-moll (Rachmaninov)</li>
        </ul>
      `
    },
    {
      title: "Modernismen (1900–Nutid)",
      img: "/images/Modernismen.jpg",
      content: `
        <h3>Vad är Modernism?</h3>
        <p>Modernismen inom musiken inleddes strax efter år 1900. Det var en tid då kompositörerna kände att de gamla reglerna för hur musik skulle låta var "förbrukade". Man ville experimentera och hitta helt nya sätt att uttrycka sig på. Perioden brukar ibland delas upp i modernism (början av 1900-talet) och postmodernism (från ca 1960-talet), men man använder ofta samlingsnamnet "1900-talsmusik".</p>

        <h3>1. Samtiden – Experimentens epok</h3>
        <p>Modernismen handlade om att bryta mot traditioner.</p>
        <ul>
          <li><strong>Nya regler:</strong> Många tyckte att den gamla musiken (som byggde på dur och moll) hade tänjts till bristningsgränsen under romantiken. Man behövde "nya sätt att ge kompositioner form och fason".</li>
          <li><strong>Framtidstro och uppror:</strong> Det var en tid av experiment där man sa adjö till det gamla och skapade massor av nya stilar och trender.</li>
        </ul>

        <h3>2. Musiken – Hur lät den?</h3>
        <p>Musiken under 1900-talet kan låta väldigt olika, men här är några vanliga drag:</p>
        <ul>
          <li><strong>Dissonanser och Atonalitet:</strong> Tidigare ansågs vissa toner skära sig (låta falskt) och man var tvungen att "lösa upp" dem till vackra ackord. Under modernismen "befriade" man dissonansen. Musiken behövde inte längre gå i dur eller moll (tonalitet), utan kunde vara atonal (utan tonart).</li>
          <li><strong>Rytm i fokus:</strong> Rytmerna blev viktigare och mer komplicerade. Man kunde använda "oregelbundna" takter och accenter som gjorde musiken ryckig och oförutsägbar, som i Stravinskijs <em>Våroffer</em>.</li>
          <li><strong>Nya klangfärger:</strong> Man började använda instrumenten på nya sätt för att skapa konstiga ljud, och senare kom även elektroniska instrument och inspelade ljud (tonband).</li>
        </ul>

        <h3>3. Instrumenten</h3>
        <ul>
          <li><strong>Orkestern:</strong> Fanns kvar, men användes annorlunda. Slagverk fick en mycket större roll (ibland spelade bara slagverkare!).</li>
          <li><strong>Elektronik:</strong> Under andra halvan av seklet kom synthesizers och datorer.</li>
          <li><strong>Preparerat piano:</strong> Uppfinnaren John Cage kom på att man kunde lägga skruvar, gummi och annat inuti flygeln för att få det att låta som en hel slagverksorkester.</li>
        </ul>

        <h3>4. Musikstilar och Genrer</h3>
        <p>Eftersom alla experimenterade åt olika håll uppstod många olika stilar:</p>
        <ul>
          <li><strong>Impressionism:</strong> (Tidigt 1900-tal). Precis som i konsten ville man måla stämningar och ögonblick snarare än berätta en tydlig historia. Musiken var ofta drömsk och svävande (t.ex. Debussy).</li>
          <li><strong>Expressionism:</strong> Musik som uttryckte stark ångest och våldsamma känslor, ofta genom atonal musik (t.ex. Schönberg).</li>
          <li><strong>Neoklassicism:</strong> En stil där man tittade tillbaka på 1700-talet (som Mozart och Bach) men kryddade musiken med moderna, "felaktiga" toner (t.ex. Stravinskij).</li>
          <li><strong>Minimalism:</strong> Musik som bygger på att man upprepar korta melodisnuttar om och om igen under lång tid, vilket skapar en hypnos-liknande känsla (t.ex. Philip Glass).</li>
          <li><strong>Aleatorisk musik (Slumpmusik):</strong> Musik där slumpen avgör vad som händer. John Cage kunde använda tärningar eller stjärnkartor för att bestämma vilka toner som skulle spelas.</li>
        </ul>

        <h3>5. Viktiga Tonsättare</h3>
        <ul>
          <li><strong>Claude Debussy (1862–1918):</strong> Fransman som skapade impressionismen.</li>
          <li><strong>Igor Stravinskij (1882–1971):</strong> En kameleont som bytte stil flera gånger. Hans balett <em>Våroffer</em> orsakade skandal och slagsmål på premiären för att den var så modern.</li>
          <li><strong>Arnold Schönberg (1874–1951):</strong> Uppfann "tolvtonsmetoden", ett matematiskt sätt att komponera så att alla 12 toner används lika mycket (inget dur eller moll).</li>
          <li><strong>John Cage (1912–1992):</strong> Amerikansk filosof och kompositör som ifrågasatte vad musik egentligen är. Mest känd för att ha skrivit ett stycke som är helt tyst.</li>
          <li><strong>Philip Glass (1937–):</strong> Känd minimalist som även skrivit mycket filmmusik.</li>
        </ul>

        <h3>6. Lyssningstips</h3>
        <ul>
          <li>"Våroffer" (Stravinskij) – Balettmusik med våldsamma rytmer.</li>
          <li>"Boléro" (Ravel) – Ett enda långt crescendo.</li>
          <li>"4’33”" (Cage) – 4 min 33 sek tystnad.</li>
          <li>"Gymnopédies" (Satie) – Lugn pianomusik.</li>
          <li>"Koyaanisqatsi" (Glass) – Minimalistisk musik.</li>
        </ul>
      `
    }
  ];

  // ==========================================
  // 2. DATA: ROCK 'N' ROLL
  // ==========================================
  const rockChapters = [
    {
      title: "1. Inledning: Rock’n’roll som historiskt fenomen",
      img: "https://images.unsplash.com/photo-1572061489710-18868673a559?auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Rock’n’roll uppstod under 1950-talet i USA som en musikalisk hybridform, men utvecklades snabbt till ett omfattande kulturellt, socialt och politiskt fenomen. Musikstilen representerade inte bara ett nytt sound, utan också ett brott mot tidigare normer kring ras, klass, ungdomskultur och sexualitet.</p>
        <p>Filmen <em>History of Rock & Roll – The 1950s</em> placerar denna utveckling i sitt historiska sammanhang och analyserar hur rock’n’roll växte fram ur afroamerikanska musiktraditioner och spreds till en bred, i huvudsak vit, ungdomspublik.</p>
        <p>1950-talet präglades av efterkrigstidens ekonomiska expansion, kalla kriget, ökad konsumtion och framväxten av tonåringen som en egen social kategori. Rock’n’roll blev ett uttryck för denna nya generation och deras behov av identitet, självständighet och emotionellt utlopp.¹</p>
      `
    },
    {
      title: "2. Musikaliska rötter: Afroamerikanska traditioner",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      content: `
        <h3>2.1 Rhythm & Blues och blues</h3>
        <p>Rock’n’rollens direkta föregångare var rhythm & blues (R&B), en genre som i sin tur utvecklades ur blues, gospel och jazz. R&B kännetecknades av:</p>
        <ul>
          <li>Tydlig backbeat (betoning på slag 2 och 4)</li>
          <li>Elektrifierade instrument</li>
          <li>Repetitiva harmoniska strukturer</li>
          <li>Stark rytmisk energi</li>
        </ul>
        <p>Artister som Muddy Waters, Howlin’ Wolf och Big Joe Turner lade grunden för den musikaliska estetik som senare skulle populariseras som rock’n’roll.²</p>
        
        <h3>2.2 Gospelns inflytande</h3>
        <p>Gospelmusiken bidrog främst med:</p>
        <ul>
          <li>Vokala uttryck (rop, melismer)</li>
          <li>Call-and-response-strukturer</li>
          <li>Emotionell intensitet</li>
        </ul>
        <p>Denna bakgrund är särskilt tydlig hos artister som Little Richard, vars sångstil kombinerade kyrklig extas med sekulär sexualitet — något som uppfattades som både fascinerande och hotfullt av samtida moralväktare.³</p>
      `
    },
    {
      title: "3. Ras, segregation och musikindustrin",
      content: `
        <h3>3.1 Jim Crow-systemet</h3>
        <p>Under 1950-talet var USA fortfarande djupt segregerat. Svarta artister fick sällan tillträde till vita radiostationer, skivbolag eller konsertscener. Rock’n’rollens spridning blev därför en indirekt utmaning mot Jim Crow-systemet.⁴</p>
        
        <h3>3.2 “Cover versions” och kulturell appropriering</h3>
        <p>Ett centralt tema i filmen är hur vita artister ofta spelade in covers av svarta artisters låtar — exempelvis Pat Boone, vars versioner ansågs “säkrare” för vit publik. Detta ledde till:</p>
        <ul>
          <li>Kommersiell framgång för vita artister</li>
          <li>Ekonomisk marginalisering av svarta upphovspersoner</li>
          <li>En omdebatterad form av kulturell appropriering⁵</li>
        </ul>
      `
    },
    {
      title: "4. Alan Freed och begreppet “rock’n’roll”",
      content: `
        <p>Radiopersonligheten Alan Freed spelade en avgörande roll i att popularisera termen “rock’n’roll”. Han använde uttrycket för att marknadsföra R&B-musik till en vit publik, samtidigt som han arrangerade konserter där svarta och vita ungdomar deltog tillsammans — något radikalt för sin tid.⁶</p>
        <p>Freed bidrog till:</p>
        <ul>
          <li>Genredefinitionen</li>
          <li>Kommersiell spridning</li>
          <li>Normalisering av interracial ungdomskultur</li>
        </ul>
      `
    },
    {
      title: "5. Elvis Presley: Symbol och katalysator",
      img: "https://images.unsplash.com/photo-1621360841011-d76eb697196d?auto=format&fit=crop&w=800&q=80",
      content: `
        <h3>5.1 Musikaliskt uttryck</h3>
        <p>Elvis Presley kombinerade:</p>
        <ul>
          <li>Svart R&B-sångstil</li>
          <li>Countrymusikens harmonik</li>
          <li>Gospelns emotionella intensitet</li>
        </ul>
        <p>Hans röst, frasering och kroppsspråk skapade en ny artisttyp som var både sexuell och rebellisk.⁷</p>
        
        <h3>5.2 Kulturell betydelse</h3>
        <p>Elvis blev en symbol för:</p>
        <ul>
          <li>Generationskonflikt</li>
          <li>Vit appropriering av svart kultur</li>
          <li>Rock’n’rollens kommersiella genombrott</li>
        </ul>
        <p>Filmen betonar både hans betydelse och de strukturella ojämlikheter som möjliggjorde hans framgång.</p>
      `
    },
    {
      title: "6. Andra nyckelartister",
      img: "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?auto=format&fit=crop&w=800&q=80",
      content: `
        <h3>6.1 Chuck Berry</h3>
        <p>Chuck Berry utvecklade:</p>
        <ul>
          <li>Den elektriska gitarrens roll som soloinstrument</li>
          <li>Narrativa texter om ungdomsliv</li>
          <li>Ett sceniskt uttryck som blev mall för senare rockartister⁸</li>
        </ul>
        
        <h3>6.2 Little Richard</h3>
        <p>Little Richard utmanade könsnormer, sexualmoral och religiösa gränser. Hans musik var snabb, aggressiv och extatisk — ett tydligt brott mot 1950-talets konservativa ideal.⁹</p>
        
        <h3>6.3 Buddy Holly</h3>
        <p>Buddy Holly representerade en mer “intellektuell” rock’n’roll-tradition: låtskrivande artist, experimentella inspelningstekniker och inflytande på framtida bandformat.¹⁰</p>
      `
    },
    {
      title: "7. Ungdomskultur och moralpanik",
      content: `
        <p>Rock’n’roll kopplades tidigt till kriminalitet, sexuell omoral och våld. Media, kyrkor och politiker beskrev musiken som ett hot mot samhällets stabilitet. Filmen analyserar hur denna moralpanik paradoxalt nog ökade musikens attraktionskraft bland ungdomar.¹¹</p>
      `
    },
    {
      title: "8. Kön, sexualitet och scenuttryck",
      content: `
        <p>Rock’n’roll innebar ett nytt sätt att använda kroppen på scen: höftrörelser, intensiv blickkontakt och fysiskt uttryck av begär. Detta var särskilt kontroversiellt i televisionens barndom, där artister ofta censurerades eller filmades endast från midjan och uppåt.¹²</p>
      `
    },
    {
      title: "9. Musikindustrins institutionalisering",
      content: `
        <p>Mot slutet av 1950-talet började rock’n’roll standardiseras, kommersialiseras och integreras i mainstream-kulturen. Skivbolag, managers och TV-program formade genren till en mer kontrollerad produkt, vilket lade grunden för 1960-talets popindustri.¹³</p>
      `
    },
    {
      title: "10. Sammanfattande analys och slutsats",
      content: `
        <p>Filmen visar att rock’n’roll under 1950-talet inte enbart var en musikstil, utan ett historiskt brott. Den förändrade relationen mellan svart och vit kultur, ungdomars sociala roll, musikens ekonomiska strukturer och normer kring kropp, sexualitet och identitet.</p>
        <p>Rock’n’rollens arv lever vidare som ett exempel på hur populärkultur kan fungera som en kraft för både konflikt och förändring.</p>
      `
    }
  ];

  const rockFootnotes = [
    "Gillett, C. The Sound of the City. Pantheon Books, 1970.",
    "Wald, E. How the Beatles Destroyed Rock ’n’ Roll. Oxford University Press, 2009.",
    "MacDonald, I. Revolution in the Head. Pimlico, 1994.",
    "Lipsitz, G. Footsteps in the Dark. University of Minnesota Press, 2007.",
    "Ward, B. Just My Soul Responding. University of California Press, 1998.",
    "Miller, J. Flowers in the Dustbin. Simon & Schuster, 1999.",
    "Marcus, G. Mystery Train. Plume, 1997.",
    "Szatmary, D. Rockin’ in Time. Pearson, 2013.",
    "White, C. The Life and Times of Little Richard. Harmony Books, 2003.",
    "Norman, P. Buddy Holly. Pan Books, 1996.",
    "Springhall, J. Youth, Popular Culture and Moral Panics. Palgrave, 1998.",
    "Frith, S. Performing Rites. Harvard University Press, 1996.",
    "Peterson, R. Creating Country Music. University of Chicago Press, 1997."
  ];

  // ==========================================
  // 3. CSS
  // ==========================================
  const style = document.createElement('style');
  style.innerHTML = `
    .history-page {
      padding: 40px 20px;
      max-width: 900px;
      margin: 0 auto;
      color: #e0e0e0;
      font-family: 'Segoe UI', Roboto, sans-serif;
    }
    
    /* TAB MENU */
    .tab-menu {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 40px;
      border-bottom: 1px solid #444;
      padding-bottom: 20px;
      flex-wrap: wrap; 
    }
    .tab-btn {
      background: transparent;
      border: 2px solid #4facfe;
      color: #fff;
      padding: 10px 25px;
      border-radius: 30px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s;
    }
    .tab-btn:hover {
      background: rgba(79, 172, 254, 0.2);
    }
    .tab-btn.active {
      background: #4facfe;
      color: #000;
      font-weight: bold;
    }

    /* SECTION CONTAINERS */
    .content-section {
      display: none;
      animation: fadeIn 0.5s;
    }
    .content-section.active {
      display: block;
    }

    /* ACCORDION STYLES */
    .accordion-item {
      background: #1a1a1a;
      border: 1px solid #333;
      margin-bottom: 15px;
      border-radius: 8px;
      overflow: hidden;
    }
    .accordion-header {
      padding: 18px 25px;
      background: #222;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background 0.2s;
    }
    .accordion-header:hover {
      background: #2a2a2a;
    }
    .accordion-title {
      font-weight: bold;
      color: #fca311;
      font-size: 1.2rem;
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-out;
      background: rgba(0,0,0,0.2);
    }
    .accordion-content.open {
      max-height: 2500px;
      transition: max-height 0.6s ease-in;
    }
    .accordion-inner {
      padding: 30px;
      line-height: 1.8;
      font-size: 1.05rem;
      color: #ddd;
    }
    
    /* Text formatting inside accordion */
    .accordion-inner h3 {
      color: #4facfe;
      margin-top: 25px;
      margin-bottom: 15px;
      font-size: 1.3rem;
      border-bottom: 1px solid #444;
      padding-bottom: 5px;
    }
    .accordion-inner p {
      margin-bottom: 15px;
    }
    .accordion-inner ul {
      margin-bottom: 20px;
      padding-left: 20px;
    }
    .accordion-inner li {
      margin-bottom: 8px;
    }
    .accordion-inner strong {
      color: white;
    }

    /* Images */
    .section-img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      margin-bottom: 25px;
      border-radius: 6px;
      border: 1px solid #444;
    }

    /* Footnotes */
    .footnotes {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #444;
      font-size: 0.85rem;
      color: #888;
    }
    .footnotes ol {
      padding-left: 20px;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  container.appendChild(style);

  // ==========================================
  // 4. RENDERING & LOGIC
  // ==========================================

  // Title
  const header = document.createElement('div');
  header.style.textAlign = 'center';
  header.innerHTML = `<h1>Musikhistoria 📜🎸</h1>`;
  container.appendChild(header);

  // Tabs
  const tabContainer = document.createElement('div');
  tabContainer.className = 'tab-menu';

  const btnClassical = document.createElement('button');
  btnClassical.className = 'tab-btn active';
  btnClassical.innerText = 'Klassisk Musik';

  const btnRock = document.createElement('button');
  btnRock.className = 'tab-btn';
  btnRock.innerText = "Rock 'n' Roll (50-tal)";

  tabContainer.appendChild(btnClassical);
  tabContainer.appendChild(btnRock);
  container.appendChild(tabContainer);

  // --- Helper Function to Create Accordions ---
  function createAccordionItem(title, content, imgUrl) {
    const item = document.createElement('div');
    item.className = 'accordion-item';

    // Check if valid imgUrl exists (not undefined or empty)
    const imgHtml = imgUrl ? `<img src="${imgUrl}" class="section-img" alt="${title}">` : '';

    item.innerHTML = `
      <div class="accordion-header">
        <span class="accordion-title">${title}</span>
        <span>▼</span>
      </div>
      <div class="accordion-content">
        <div class="accordion-inner">
          ${imgHtml}
          ${content}
        </div>
      </div>
    `;
    return item;
  }

  // --- SEKTION 1: KLASSISK MUSIK ---
  const classicalSection = document.createElement('div');
  classicalSection.className = 'content-section active';

  classicalData.forEach(period => {
    const item = createAccordionItem(period.title, period.content, period.img);

    // Click logic
    const headerEl = item.querySelector('.accordion-header');
    const contentEl = item.querySelector('.accordion-content');
    headerEl.addEventListener('click', () => {
      const isOpen = contentEl.classList.contains('open');
      // Stäng andra i samma sektion
      classicalSection.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      if (!isOpen) contentEl.classList.add('open');
    });

    classicalSection.appendChild(item);
  });
  container.appendChild(classicalSection);

  // --- SEKTION 2: ROCK 'N' ROLL ---
  const rockSection = document.createElement('div');
  rockSection.className = 'content-section';

  const rockIntro = document.createElement('div');
  rockIntro.style.textAlign = "center";
  rockIntro.style.marginBottom = "30px";
  rockIntro.innerHTML = `
    <h2 style="color:#fca311;">History of Rock & Roll – The 1950s</h2>
    <p style="font-style:italic; color:#aaa;">En akademisk sammanfattning.</p>
  `;
  rockSection.appendChild(rockIntro);

  rockChapters.forEach(chap => {
    const item = createAccordionItem(chap.title, chap.content, chap.img);

    // Click logic
    const headerEl = item.querySelector('.accordion-header');
    const contentEl = item.querySelector('.accordion-content');
    headerEl.addEventListener('click', () => {
      const isOpen = contentEl.classList.contains('open');
      rockSection.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      if (!isOpen) contentEl.classList.add('open');
    });

    rockSection.appendChild(item);
  });

  // Fotnoter för Rock
  const footDiv = document.createElement('div');
  footDiv.className = 'footnotes';
  footDiv.innerHTML = `
    <h4>Källförteckning & Referenser</h4>
    <ol>
      ${rockFootnotes.map(note => `<li>${note}</li>`).join('')}
    </ol>
  `;
  rockSection.appendChild(footDiv);

  container.appendChild(rockSection);

  // --- TAB NAVIGATION LOGIC ---
  btnClassical.addEventListener('click', () => {
    btnClassical.classList.add('active');
    btnRock.classList.remove('active');
    classicalSection.classList.add('active');
    rockSection.classList.remove('active');
  });

  btnRock.addEventListener('click', () => {
    btnRock.classList.add('active');
    btnClassical.classList.remove('active');
    rockSection.classList.add('active');
    classicalSection.classList.remove('active');
  });

  return container;
}