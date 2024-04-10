let somma = 0;
let sommadis = 0;
let sommapar = 0;
let fattoriale = 1;
for(let i = 0; i <= 10; i++)
{
    somma += i;
    ((i % 2) == 1) ? sommadis += i : sommapar += i;
    (i === 10) ? 
    document.write("<p>la somma dei numeri da 0 a 10 è: ", somma,
    "<br/> la somma dei numeri dispari da 0 a 10 è: ",sommadis,
    "<br/> la somma dei numeri pari da 0 a 10 è: ", sommapar,
    "<br/>il fattoriale di 10 è: ", fattoriale) : null;

    i!==0 ? fattoriale *= i : null;
}
let a = 6;
let b = 10;
a<b ? 
    document.write ("<p>",a," è minore di ",b,"</p>") : 
    a>b ? 
        document.write("<p>",a," è maggiore di ",b,"</p>") : 
        document.write("<p>",a," è uguale ",b,"</p>");

let c = prompt("inserisci un numero a tua scelta");

if (c<0)
{
    document.write("il numero è negativo");
}
if (c>0)
{
    document.write("il numero è positivo");
}
if(c===0)
{
    document.write("il numero è 0")
}

let num1 = 76;
let D = "";

for(let i  = 0; i <= num1; i++)
{
    if((num1 % i)===0)
    {
        D += `${i}, `;
    }
}
D = D.slice(0, -2);
document.write("<p>i D",num1, " sono: {",D, "}</p>");

    