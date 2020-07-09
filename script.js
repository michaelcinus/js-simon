// GENERO 5 numeri casuali univoci
var numeriRandom = [];
var random;
var j = 0;

while (j < 5) {
    random = generaNumeroRandom(0, 100);
    if (inArray(numeriRandom, random) !=true) {
        numeriRandom.push(random);
        j++;
    }
}
console.log(numeriRandom);

//CHIEDO all'utente di inserire i 5 numeri 
var numeriUtente = [];
for (var i = 0; i < 5; i++) {
    numeriUtente [i] = parseInt(prompt("Inserisci i numeri"))
}
console.log(numeriUtente);


//VERIFICO se i numeri inseriti sono corretti, e stabilisco il risultato
var numeriIndovinati = [];
var punteggio = 0;
for (var j = 0; j < 5; j++) {
    var numero = numeriUtente [j];
    if (inArray(numeriRandom, numero)) {
        numeriIndovinati.push(numero);
        punteggio++;
    }
}
console.log(punteggio, numeriIndovinati);











//FUNCTION genera numeri casuali
function generaNumeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

//FUNCTION verifica numero già esistente
function inArray (array, elemento) {
    var i = 0;
    var trovato = false;
    while (i < array.length && trovato == false) {
        if (array[i] == elemento){
            trovato = true;
        } 
        i++;
    }
    return trovato;
}