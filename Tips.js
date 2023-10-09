//vscode auto-indent Shift + Alt + F
//const = variable immuable 

//Boucles
const T = ['a', 'b', 'c'];

for (const element of T) {
//    console.log(element); // = abc
}

// Split
const sentence = "Omae wa mō shinde iru"
const splitted = sentence.split(' ');
//console.log(splitted) // = [ 'Omae', 'wa', 'mō', 'shinde', 'iru' ]

// Size string
//console.log(sentence.length) // = 21

// List Manipulation


// Regex
const regex = /sp$/;
const chaineTest = '1sp';
const resultat = regex.test(chaineTest);

console.log(resultat); // true si les deux derniers caractères sont "sp", sinon false

// Substring
substr = sentence.substring(0,4) 
slicy = sentence.slice(0,-2)
//console.log(substr) // = Omae
//console.log(slicy) // = Omae wa mō shinde i

testy = "1sp"
res = parseInt(testy.slice(0, -2)) + 2
//console.log(res) // = 3

//Boucle
// for(x in list) x = index 
// for(x of list) x = value