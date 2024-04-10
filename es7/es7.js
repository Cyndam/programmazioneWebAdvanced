var persona = {
    nome: 'Giuseppe',
    cognome: 'Rossi',
    indirizzo: {
    via: {
    strada: 'Via Indipendenza',
    numero: '15'
    },
    citta: 'Bologna',
    nazione: 'Italia'
    }
    }

var n1 = 'nome';
alert(persona[n1]);

// Creazione elementi singoli
const Olist = document.createElement("ol");
const voce1 = document.createElement("li");
const voce2 = document.createElement("li");
const testo1 = document.createTextNode("un pò di testo")
const testo2 = document.createTextNode("altro testo")
// Creazione lista completa
voce1.appendChild(testo1);
voce2.appendChild(testo2);
Olist.appendChild(voce1);
Olist.appendChild(voce2);
// Inserimenti lista in una data posizione
const div = document.getElementById("lista");
const body = document.getElementsByTagName("body").item(0);
body.insertBefore(Olist,div);