addEventListener("DOMContentLoaded", () => {
  const playlist = [
    {
      titolo: "Disorder",
      artista: "Joy Division",
    },
    {
      titolo: "Vivere",
      artista: "Vasco Rossi",
    },
    {
      titolo: "Play with fire",
      artista: "Rolling Stones",
    },
    {
      titolo: "Never Surrender",
      artista: "Combichrist",
    },
    {
      titolo: "A Little Piece of Heaven",
      artista: "Avenged Sevenfold",
    },
    {
      titolo: "Before I Forget",
      artista: "Slipknot",
    },
    {
      titolo: "Thriller",
      artista: "Michael Jackson",
    },
    {
      titolo: "Nothing Else Matters",
      artista: "Metallica",
    },
    {
      titolo: "Guerriero",
      artista: "Marco Mengoni",
    },
    {
      titolo: "Grissin Bon",
      artista: "Gerry Scotti",
    },
    {
      titolo: "Disco Dildo",
      artista: "Immanuel Casto",
    },
    {
      titolo: "Crawling",
      artista: "Linkin Park",
    },
    {
      titolo: "Otherside",
      artista: "RHCP",
    },
    {
      titolo: "Hymn for the weekend",
      artista: "Coldplay",
    },
    {
      titolo: "Plug in baby",
      artista: "Muse",
    },
    {
      titolo: "Today",
      artista: "Vegas Jones",
    },
    {
      titolo: "World Hold On",
      artista: "Bob Sinclair",
    },
    {
      titolo: "Clock",
      artista: "Coldplay",
    },
    {
      titolo: "Trapanarella",
      artista: "Franco Staco",
    },
    {
      titolo: "Boulevard Of Broken Dreams",
      artista: "Green Day",
    },
    {
      titolo: "Quelli che non hanno età",
      artista: "Eiffel 65",
    },
    {
      titolo: "Quann Ierm Criatur",
      artista: "Mino Fanelli",
    },
    {
      titolo: "Il triangolo no",
      artista: "Renato Zero",
    },
    {
      titolo: "Campione dei 90",
      artista: "Caparezza",
    },
  ];

  let played = [];

  let btn = document.querySelector(".btn");

  let indice;

  btn.addEventListener("click", () => {
    if (played.length == playlist.length) {
      let rem = played[played.length-1];
      played = [];
      played[0] = rem;
    } else {
      do {
        indice = Math.floor(Math.random() * playlist.length);
      } while (played.includes(indice));
      let par = document.querySelector('.par-txt')
      let div = document.createElement('div');
      let txt = document.createTextNode("Now playing: " + playlist[indice].titolo + " by " + playlist[indice].artista);
      div.appendChild(txt);
      par.appendChild(div);
      played.push(indice);
    }
  });
});
