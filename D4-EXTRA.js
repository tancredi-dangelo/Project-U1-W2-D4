// Esercizi aggiuntivi (facoltativi) per D4
/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let array = []
const giveMeRandom = function(n) {
    for (let i = 0; i < n; i++) {
        let r = Math.ceil(Math.random()*10)
        array.push(r) 
    }
    return array
}
let newArray = []
let count = 0
let obj = {}
const checkArray = function(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] <= 5) {
            newArray.push("not >5")
        } else {
            newArray.push(">5")
            count += array[i]
        }
    obj.greaterThanFive = newArray
    obj.countSum = count
    }
    return obj
}

console.log(checkArray(giveMeRandom(10)))



/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
    {price: 5, name: "cookies", id: 14300, quantity: 1},
    {price: 3.50, name: "coke", id: 22900, quantity: 2},
    {price: 2.40, name: "milk", id: 98700, quantity: 1},
]

const shoppingCartTotal = function(shoppingCart) {
    let count = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        count += shoppingCart[i].price * shoppingCart[i].quantity
    }
    return "total: "+ count
}
console.log(shoppingCartTotal(shoppingCart))



/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function(obj) {
    shoppingCart.push(obj)
    let count = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        count += shoppingCart[i].quantity
    }
    return "number of items: " + count
}

console.log(addToShoppingCart({price: 6, name: "beef", id: 98700, quantity: 4}))




/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function(shoppingCart) {
    let highestPrice = ""
    for (let i = 0; i < shoppingCart.length; i++) { 
        if (i === 0) {
            highestPrice = shoppingCart[0].name
        } else if (shoppingCart[i].price > shoppingCart[i-1].price) {
            highestPrice = shoppingCart[i].name
        }
    }
    return highestPrice
}
console.log(maxShoppingCart(shoppingCart))



/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1]
}
console.log(latestShoppingCart(shoppingCart))



/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function(x) {
    let count = 0
    while (count<3) {
        let r = Math.floor(Math.random() * 10)
        console.log(r)
        if (r > x) {
            count += 1
        } else {
            count = 0
        }
    }
    return
}
loopUntil(2)



/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const average = function(arr) {
    count = 0
    for (let i = 0; i < arr.length; i++) {
        count += arr[i]
    }
    return count / arr.length
}
console.log(average([5, 4, 2, 7, 6, 9, 8, 3, 4, 1, 9]))



/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const longest = function(arr) {
    let longestWord = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i].split("")
        if (i === 0) {
            count = arr[i].length
            longestWord = arr[i]
        } else {
            if (arr[i].length > count) {
                count = arr[i].length
                longestWord = []
                longestWord.push(arr[i])
            } else if (arr[i].length === count) {
                longestWord.push(arr[i])
            }
        }
        
    }
    return longestWord
}
console.log(longest(["cane", "gatto", "albero", "sole", "luna", "fiore", "cielo", "mare", "libro", "sedia", "divano"]))



/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const antiSpam = function(emailContent) {
    emailContent = emailContent.toLowerCase()
    if (emailContent.includes("spam" || emailContent.includes("scam"))) {
        return false
    } else {
        return true
    }
}
console.log(antiSpam("rsdcfghvgjbhkjiytfdrchgvjhspamiuytfdrcyvgubihnoip"))
console.log(antiSpam("rsdcfghvgjbhkjiytfdrchgvjhspiuytfdrcyvgubihnoip"))



/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const daysGone = function (date) {
    let pastDate = new Date(date)
    let today = new Date()
    const diffMs = today - pastDate
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return diffDays
}
console.log(daysGone("1998-07-13"))



/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const matrixGenerator = function(x,y) {
    let matrix = []
    let entry
    for (let i = 0; i < y; i++) {
        let line = []
        for (let j = 0; j < x; j++) {
            entry = `${i}${j}`
            line.push(entry)

        }
        matrix.push(line)
    }
    return matrix
}

console.log(matrixGenerator(4,4))