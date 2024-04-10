addEventListener('DOMContentLoaded', (evt) =>{
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    const div = document.querySelector('.div-vuoto')
    const newP = document.createElement('p');
    const text = document.createTextNode('i am here')
    newP.appendChild(text);
    div.appendChild(newP);

    let par = document.getElementById("par")
    lisOrd.style.backgroundColor = 'red';

})
    let lisOrd = document.querySelector('.lista-pres')
    let newEl = document.createElement('li');
    let newLis = document.createElement('ol');
    let newElOl = document.createElement('li');


    newElOl.textContent = 'i am here';
    newLis.appendChild(newElOl);
    newEl.appendChild(newLis);
    lisOrd.appendChild(newEl);


})
