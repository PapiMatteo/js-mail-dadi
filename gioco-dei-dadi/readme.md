## ESERCIZIO

### Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:

Che ci sia un array da qualche parte?

Se dobbiamo confrontare qualcosa che "cosa" ci serve?

### SOLUZIONE

#### Dati

1. Creo un numero random per il computer salvandolo su una variabile
2. Creo un numero random per l'utente salvandolo su una variabile

#### Logica

SE il numero dell'utente e' maggiore di quello del computer

        Scrivo "Ha vinto l'utente!"

ALTRIMENTI SE il numero del computer e' maggiore di quello dell'utente

        Scrivo "Ha vinto il computer"

ALTRIMENTI 

        Scrivo "Pareggio"