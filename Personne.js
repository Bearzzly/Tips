// Définition de la classe
class Personne {
    // Constructeur de la classe
    constructor(nom, age) {
      this.nom = nom;
      this.age = age;
    }
  
    // Méthode de la classe
    sePresenter() {
      console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
  }
  
  // Utilisation de la classe
  const personne1 = new Personne("Kthulu", 500000000);
  const personne2 = new Personne("Bob", 30);
  
  personne1.sePresenter(); // Affiche "Je m'appelle Alice et j'ai 25 ans."
  personne2.sePresenter(); // Affiche "Je m'appelle Bob et j'ai 30 ans."
  
