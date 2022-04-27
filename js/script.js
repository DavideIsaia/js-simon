// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo una funzione che stampa 5 numeri random (io scelgo un range da 1 a 100);
const randomNumbers = document.getElementById("random-numbers");
let rndNumber;

for (let i =1; i <=5; i++) {
    rndNumber = getRndInteger(1, 100);
    console.log(i, rndNumber);
    randomNumbers.innerHTML += (` - ${rndNumber} - `);
}


// creo un timer che arrivato a zero fa scomparire i numeri e comparire i 5 prompt;
const countContainer = document.getElementById("timer");
let count = parseInt(countContainer.textContent);
let userNumber = 0;
const arrayUserNumbers = [];

const timer = setInterval(function(){
    count--;
    // quando il timer arriva a zero
    if (count === 0) {
        // ferma il timer
        clearInterval(timer);
        // cancella i numeri a schermo
        document.querySelector("h2").innerHTML = "";

        // imposto un piccolo delay per il prompt, per dare il tempo ai numeri di venire cancellati
        setTimeout(() => {
            // chiedo 5 volte di inserire un numero finchè non viene inserito compreso nel range preimpostato
            for (let i =1; i <=5; i++) {
                do {
                    userNumber = parseInt (prompt (`Inserisci il ${i}° numero compreso tra 1 e 100:`));
                    console.log(`il ${i} numero è:`, userNumber);
                    arrayUserNumbers.push(userNumber);
                    console.log("numeri inseriti", arrayUserNumbers);
                } while (userNumber < 1 || userNumber > 100);
            }             
        }, 20);        
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