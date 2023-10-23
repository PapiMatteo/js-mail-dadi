// Raccolta Dati
const acceptedMail = ["pippo@gmail.com", "paperino@gmail.com", "pluto@gmail.com", "topolino@gmail.com"];
const userMail     = prompt("Ciao utente! inserisci la tua mail");
console.log(userMail)

let correct        =  false

// Iterazione e controllo dati

for (i = 0 ; i < acceptedMail.length -1 ; i++) {

    // Dato corrente
    const curMail = acceptedMail[i]

    if (curMail === userMail){
        correct = true
    }

}

if (correct) {
    console.log("Benvenuto!")
} else {
    console.log("Mi dispiace ma la mail inserita non corrisponde alle mail accettate dal sito")
}