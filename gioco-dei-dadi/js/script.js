// Raccolta Dati

let userNumber     = Math.floor(Math.random() * 6) + 1;
let computerNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber, computerNumber)

// Logica

if (userNumber > computerNumber) {
    console.log("Ha vinto l'utente")
} else if (computerNumber > userNumber) {
    console.log("Ha vinto il computer")
} else {
    console.log("Questo e' un pareggio")
}