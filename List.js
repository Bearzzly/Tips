my_list = []
x = 0

//add element to the begin of the list
while (x < 10){
    my_list.push(x)
    x += 3
}

//add element to the end of the list
while (x > 0){
    my_list.unshift(x)
    x -= 3
}


const floatlist = [5.7243, 3.9876543, 8.123433, 1.9364, 9, 4];
const littlest = Math.min(...floatlist);
const indexlittlest = floatlist.indexOf(Math.min(...floatlist));
console.log(indexlittlest); // Affiche l'index de la valeur la plus petite (dans cet exemple, 3)
console.log(littlest); // Affiche 1


const tableauDeNombres = [5.2, 3.1, 8.7, 1.5, 9.4, 4.0];

let indexPlusBas = 0; // Initialisation avec le premier index

for (let i = 1; i < tableauDeNombres.length; i++) {
  if (tableauDeNombres[i] < tableauDeNombres[indexPlusBas]) {
    indexPlusBas = i;
  }
}

console.log("L'index de la valeur la plus basse est :", indexPlusBas);
