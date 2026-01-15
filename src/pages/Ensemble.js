export function Ensemble() {

  const section = document.createElement('section');

  section.className = 'ensemble-page';



  // --- HÄR LÄGGER DU IN DINA LÅTAR ---

  const songs = [

    {

      id: "we-will-rock-you",

      title: "We Will Rock You",

      artist: "Queen",

      thumbnail: "https://img.youtube.com/vi/-tJYN-eG1zk/hqdefault.jpg",

      parts: {

        drums: "k-TR64OQdOA",

        bass: "E-WHW-QNswE",

        guitar: "fJ9rUzIMcZQ",

        keyboard: ""

      }

    },

    {

      id: "seven-nation-army",

      title: "Seven Nation Army",

      artist: "The White Stripes",

      thumbnail: "https://img.youtube.com/vi/0J2QdDbelmY/hqdefault.jpg",

      parts: {

        drums: "G64u8vV2t6Q",

        bass: "H2P5j8G7fXU",

        guitar: "V-mQyRuHIuA",

        keyboard: ""

      }

    }

  ];



  let currentSong = null;

  let currentInstrument = 'drums';



  // --- SKAPA HTML-STRUKTUREN ---

  section.innerHTML = `

<div class="ensemble-container">

<h1>Ensemblespel 🎸🥁🎹</h1>

<p class="subtitle">Välj en låt och öva på din stämma!</p>



<div id="song-grid" class="song-grid">

${songs.map(song => `

<div class="song-card" data-id="${song.id}">

<img src="${song.thumbnail}" alt="${song.title}">

<div class="song-info">

<h3>${song.title}</h3>

<p>${song.artist}</p>

</div>

</div>

`).join('')}

</div>



<div id="practice-room" class="practice-room" style="display: none;">

<button id="back-btn" class="back-btn">⬅ Tillbaka till låtlistan</button>


<h2 id="current-song-title">Låttitel</h2>


<div class="video-container">

<iframe id="video-player"

width="100%" height="100%"

src=""

frameborder="0"

allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

allowfullscreen>

</iframe>

</div>



<div class="controls">

<p>Välj instrument:</p>

<div id="instrument-buttons" class="instrument-buttons">

</div>

</div>

</div>

</div>

`;



  // --- LOGIK ---

  const songGrid = section.querySelector('#song-grid');

  const practiceRoom = section.querySelector('#practice-room');

  const videoPlayer = section.querySelector('#video-player');

  const backBtn = section.querySelector('#back-btn');

  const instrumentButtons = section.querySelector('#instrument-buttons');

  const currentSongTitle = section.querySelector('#current-song-title');



  // Klick på en låt i listan

  section.querySelectorAll('.song-card').forEach(card => {

    card.addEventListener('click', () => {

      const songId = card.dataset.id;

      loadSong(songId);

    });

  });



  // Klick på "Tillbaka"

  backBtn.addEventListener('click', () => {

    practiceRoom.style.display = 'none';

    songGrid.style.display = 'grid';

    videoPlayer.src = ""; // Stoppar videon

    currentSong = null;

  });



  function loadSong(id) {

    currentSong = songs.find(s => s.id === id);

    if (!currentSong) return;



    // Byt vy

    songGrid.style.display = 'none';

    practiceRoom.style.display = 'block';

    currentSongTitle.textContent = `${currentSong.title} - ${currentSong.artist}`;



    renderButtons();



    // Starta standardinstrumentet

    const firstAvailable = Object.keys(currentSong.parts).find(key => currentSong.parts[key] !== "") || 'drums';

    playVideo(firstAvailable);

  }



  function renderButtons() {

    instrumentButtons.innerHTML = '';



    const labels = {

      drums: "🥁 Trummor",

      bass: "🎸 Bas",

      guitar: "🎸 Gitarr",

      keyboard: "🎹 Keyboard/Piano",

      vocals: "🎤 Sång"

    };



    for (const [instrument, videoId] of Object.entries(currentSong.parts)) {

      if (videoId) {

        const btn = document.createElement('button');

        btn.textContent = labels[instrument] || instrument;

        btn.className = 'inst-btn';

        if (instrument === currentInstrument) btn.classList.add('active');



        btn.addEventListener('click', () => {

          playVideo(instrument);

          document.querySelectorAll('.inst-btn').forEach(b => b.classList.remove('active'));

          btn.classList.add('active');

        });



        instrumentButtons.appendChild(btn);

      }

    }

  }



  function playVideo(instrument) {

    currentInstrument = instrument;

    const videoId = currentSong.parts[instrument];

    videoPlayer.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;

  }



  return section;

}