document.addEventListener('DOMContentLoaded', (evt) =>{
    const btn = document.querySelector('.btn');
    const div = document.querySelector('.div-vuoto');
    const lisOrd = document.querySelector('.lista-pres');
    const btn2 = document.querySelector('.btn2');

    btn.addEventListener('click', function() {
        const newP = document.createElement('p');
        const text = document.createTextNode('i am here');
        newP.appendChild(text);
        div.appendChild(newP);
        // Cambia lo sfondo della lista non ordinata quando viene cliccato il pulsante btn
        lisOrd.style.backgroundColor = 'red';
    });

    btn2.addEventListener('click', () => {
        let inserimento1 = parseInt(document.querySelector('#inserimento1').value);
        let inserimento2 = parseInt(document.querySelector('#inserimento2').value);

        if(!isNaN(inserimento1) && !isNaN(inserimento2)) {
            alert(inserimento1 + ' + ' + inserimento2 + ' = ' + somma(inserimento1, inserimento2));
            // Aggiunge un nuovo elemento <li> alla lista ordinata quando viene cliccato il pulsante btn2
            const newElOl = document.createElement('li');
            newElOl.textContent = 'i am here';
            lisOrd.appendChild(newElOl);
        } else {
            alert('Inserisci due numeri validi');
        }
    });

    function somma(a, b) {
        console.log(a + b);
        return a + b;
    }
});
