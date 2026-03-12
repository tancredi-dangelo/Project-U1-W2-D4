/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(l1,l2) {
    return l1*l2;
}
console.log(area(4,8))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function(p1,p2) {
    if (p1 === p2) {
        return (p1+p2)*3
    } else {
        return p1+p2
    }
}
console.log(crazySum(2,2))
console.log(crazySum(2,3))



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function(p) {
    return p - 19
}
console.log(crazyDiff(4))



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 
 20 e 100 (incluso) oppure se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(60))
console.log(boundary(19))
console.log(boundary(400))



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function(s) {
    let e = "EPICODE"
    if (s.slice(0,7).toLowerCase() === e.toLowerCase()) {
        return s
    } else {
        return "EPICODE" + s
    }
}
console.log(epify("EpIcOdEasdfghjkl"))
console.log(epify("asdfghjkl"))



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
 if (n % 7 === 0 || n % 3 === 0) {
    return true
 } else {
    return false
 }
}
console.log(check3and7(49))
console.log(check3and7(18))
console.log(check3and7(31))



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function(s) {
    return s.split("").reverse().join("")
}
console.log(reverseString("epicode"))



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function(s) {
    let arr = s.split(/[ ,]+/)
    for (let i=0; i<arr.length; i++) {
        word = arr[i].split("")
        word[0] = word[0].toUpperCase()
        arr[i] = word.join("");
    }
    let finalString = arr.join(" ")
    return finalString
}
console.log(upperFirst("ciao, tancredi come ,,stai"))



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function(s) {
    arr = s.split("")
    arr.pop()
    arr.shift()
    let joined = arr.join("")
    return joined
}
console.log(cutString("CutString"))



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const array = []
const giveMeRandom = function(n) {
    for (let i = 0; i < n; i++) {
        let r = Math.ceil(Math.random()*10)
        array.push(r) 
    }
    return array
}
console.log(giveMeRandom(20))