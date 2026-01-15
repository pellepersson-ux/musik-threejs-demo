export function Instrument() {
  const container = document.createElement('div');
  container.className = 'instrument-page';

  // --- 1. DATA: Här lägger du in instrument och Youtube-ID ---
  const instruments = [
    {
      id: 'piano',
      name: 'Piano',
      desc: 'Kungen av instrument. 88 tangenter av möjligheter.',
      img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=600&q=80',
      videoId: '71-cFCI-v14' // Exempelvideo (Byt gärna)
    },
    {
      id: 'guitar',
      name: 'Gitarr',
      desc: 'Från lägereld till rockscen. Strängar som berör.',
      img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=600&q=80',
      videoId: 'CgVqX0a49HM'
    },
    {
      id: 'violin',
      name: 'Fiol',
      desc: 'Orkesterns röst. Vackert, vemodigt och virtuost.',
      img: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=600&q=80',
      videoId: 'I_mRp61xYlA'
    },
    {
      id: 'drums',
      name: 'Trummor',
      desc: 'Bandets hjärta. Det är du som sätter pulsen.',
      img: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=600&q=80',
      videoId: 'htblwKyO4t4'
    },
    {
      id: 'sax',
      name: 'Saxofon',
      desc: 'Jazzensjäl. Ett blåsinstrument med attityd.',
      img: 'https://images.unsplash.com/photo-1573871666457-7c7329118cf9?auto=format&fit=crop&w=600&q=80',
      videoId: '3s25y8VjD2c'
    },
    {
      id: 'bass',
      name: 'Elbas',
      desc: '