// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo una funzione che stampa 5 numeri random (io scelgo un range da 1 a 100);
const randomNumbers = document.getElementById("random-numbers");
const countContainer = document.getElementById("timer");


const arrayRndNumbers = [];
const arrayUserNumbers = [];

for (let i =1; i <=5; i++) {
    const rndNumber = getRndInteger(1, 100);
    arrayRndNumbers.push(rndNumber);
    randomNumbers.innerHTML += (` - ${rndNumber} - `);
}
console.log(arrayRndNumbers);


// creo un timer che arrivato a zero fa scomparire i numeri e comparire i 5 prompt;
let count = parseInt(countContainer.textContent);

const timer = setInterval(function(){
    count--;
    // quando il timer arriva a zero
    if (count === 0) {
        // ferma il timer
        clearInterval(timer);
        document.querySelector("h1").innerHTML = "Tempo Esaurito!";
        // cancella i numeri a schermo
        document.querySelector("h2").innerHTML = "";

        // imposto un piccolo delay per il prompt, per dare il tempo ai numeri di venire cancellati
        setTimeout(() => {
            // chiedo 5 volte di inserire un numero finchè non viene inserito compreso nel range preimpostato
            promptNumbers()
            console.log("numeri inseriti", arrayUserNumbers);
            // confronto i numeri e vedo quali combaciano
            checkNumbers();
        }, 100);        
    } else {
        countContainer.innerHTML = count;
    }
}, 1000);

// ------------------------------

// FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione per numeri inseriti dall'utente
function promptNumbers() {
    for (let i =1; i <=5; i++) {
        let userNumber;
        do {
            userNumber = parseInt (prompt (`Inserisci il ${i}° numero compreso tra 1 e 100:`));
            console.log(`il ${i} numero è:`, userNumber);
            arrayUserNumbers.push(userNumber);
        } while (userNumber < 1 || userNumber > 100);
    }
}

/*
array numeri random
array numeri utente
per ogni numero di arrayUserNumbers controllo se è presente in arrayRndNumbers
    se è presente, lo aggiungo in visualizzazione sulla pagina
    se non è presente, non faccio nulla
*/

function checkNumbers() {
    const endResult = document.createElement("h2");
    endResult.className = "result";
    let result = 'Hai indovinato i seguenti numeri: ';

    for(let i=0; i<arrayUserNumbers.length; i++) {
        if (arrayRndNumbers.includes(arrayUserNumbers[i]) === true) {
            // lo stampo in pagina
            result += arrayUserNumbers[i] + ', ';
        }
    }

    endResult.textContent = result;
    document.querySelector("main").append(endResult);
}