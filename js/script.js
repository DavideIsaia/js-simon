// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo una funzione che stampa 5 numeri random (io scelgo un range da 1 a 100);
for (let i =1; i <=5; i++) {
    const rndNumber = getRndInteger(1, 100);
    console.log(rndNumber);
}

// creo un timer che arrivato a zero fa scomparire i numeri e comparire i 5 prompt;
const countContainer = document.getElementById("timer");
let count = parseInt(countContainer.textContent);

// Ogni secondo devo decrementare il count e scrivere il nuovo numero nel countContainer
let userNumber;
const timer = setInterval(function(){
    count--;
    if (count === 0) {
        clearInterval(timer);
        for (let i =1; i <=5; i++) {
            userNumber = parseInt (prompt (`Inserisci il ${i} numero`));
            console.log(userNumber);
        }
    } else {
        countContainer.innerHTML = count;
    }
}, 1000);


// controllo quanti e quali numeri combaciano e li stampo in pagina.




// ------------------------------

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}