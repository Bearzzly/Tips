//déclaration var toto ici
const arms = {
    nbarms: 2
}

const person = {
    isHuman: false,

    

    printIntroduction:  () => {
       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  person.isHuman = true
  person = {...arms, prop1:42} 
   
  const me = Object.create(person);
  //person = Object.create(person);
  
  let n = 'name'

  me.name = 'Ryad';
  me[n] = "elza";
//   console.log(me['isanimal']) 
  me.printIntroduction();
  

var toto = 3 //declaration plus initialisation

