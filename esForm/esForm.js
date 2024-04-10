function calcolaEta(dataDiNascita) {
    const oggi = new Date();
    const dataNascita = new Date(dataDiNascita);
    let etaInMillisecondi = oggi.getTime() - dataNascita.getTime();
    let millisecondiInUnAnno = 1000 * 60 * 60 * 24 * 365.25;
    let eta = Math.floor(etaInMillisecondi / millisecondiInUnAnno);
    return eta;
}

document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector(".btn");

    button.addEventListener('click', (evt) => {

        evt.preventDefault();

        const fName = document.querySelector(".fName").value;
        const sName = document.querySelector(".sName").value;
        const dataDiNascita = document.querySelector(".DoB").value;
        const eta = calcolaEta(dataDiNascita);

        console.log("First Name:", fName);
        console.log("Second Name:", sName);
        console.log("Date of Birth:", dataDiNascita);
        console.log("Age:", eta);


    });
});
