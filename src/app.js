console.log('Générateur de calcule de discriminant');
const title = 'Générateur de calcule de discriminant';
document.querySelector('title').textContent = title

//**************************/
//AFFICHAGE DU CONTENU
//**************************/
let exoContent = document.querySelector('.exo-content')
let appContent = document.querySelector('.app-content')
appContent.querySelector('h1').textContent = title

//**************************/
//AFFICHAGE DES EXERCICES
//**************************/
let generateExoBtn = document.querySelectorAll('.generateExoBtn')

let response = null
let exercice = null

generateExoBtn.forEach(element => {
    element.addEventListener('click', function event(e) {
        let value = e.target.id
        //01 Afficher l'exercice numéro 1 au clic sur le bouton square
        if (value == 'square') {
            exercice = generateSquareDescriminant();
        }
        //04 Afficher l'exercice numéro 4 au clic sur le bouton square
        else if(value == 'negatif'){
             exercice = generateNegatifDescriminant();
        }
         //Afficher l'exercice + aide
        let exoContent = document.querySelector('.exo-content')
        exoContent.classList.remove('hidden')
        //Supprimer le texte de résultat 
        exoContent.querySelector('p').textContent = ""
        //Supprimer la valeur de l'input
        exoContent.querySelector('input').value = ""
        //Afficher l'enoncé
        exoContent.querySelector('h2').textContent = exercice.enonce
        //Afficher l'aide
        exoContent.querySelector('h3').textContent = `Indice : ${exercice.help}`
        //Stocker la réponse
        response = exercice.response.response;
        console.log(response);

    })
});


//**************************/
//GESTION DE LA REPONSE
//**************************/
let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function event(e) {
    //Eviter la validation du formulaire
    e.preventDefault();
    //Récupérer la valeur du input
   let value = document.getElementById("response").value;
   //Vérification et validation
   //Si une réponse a été générée
   if (response) {
    //Si une valeur numérique a été saisie
     if ( value=="" ) {
        console.log('Merci de saisir une valeur !');
        exoContent.querySelector('p').textContent = `Merci de saisir une valeur !`
     } 
     else if(isNaN(value)){
        console.log('Merci de saisir un nombre !');
        exoContent.querySelector('p').textContent = `Merci de saisir un nombre !`
     }
     //Sinon message d'erreur
     else {
        //Si la valeur correcte
        if (value == response) {
            console.log('Bravo 👍, c\'est une bonne réponse !');
            exoContent.querySelector('p').textContent = `Bravo 👍, ${value} est une bonne réponse !`

        } else {
            console.log('Et non 😟, essaie encore !');
            exoContent.querySelector('p').textContent = `Et non 😟, essaie encore !`
        }
     }
   }
   //Sinon affichage d'un message d'erreur
   else{
    exoContent.querySelector('p').textContent = 'oupsy, petit problème !'
    console.log('oupsy, petit problème !');
   }
})

//**************************/
// FONCTIONS
//**************************/

// 1 . Discriminant carré
function generateSquareDescriminant() {

    const discriminant = discriminantGenerator('square')
    // Construire l'énoncé de l'exercice
    const enonce = enonceGenerator(discriminant.b, discriminant.c)
    // Construire l'aide de l'exercice
    const help = 'Discriminant carré';
    // Retourner l'énoncé l'aide et le résultat attendu
    return { enonce, help, response: discriminant }
}
// 2 . Discriminant non carré mais petit

//...

// 3 . Discriminant non carré et grand

// ...

// 4 . Discriminant négatif
function generateNegatifDescriminant() {

    const discriminant = discriminantGenerator('negatif')
    // Construire l'énoncé de l'exercice
    const enonce = enonceGenerator(discriminant.b, discriminant.c)
    // Construire l'aide de l'exercice
    const help = 'Discriminant négatif';
    // Retourner l'énoncé l'aide et le résultat attendu
    return { enonce, help, response: discriminant }
    

}

//**************************/
// HELPERS
//**************************/

//Vérifier si un nombre est un carré
function isSquare(n) {
    var racine = Math.sqrt(n)
    return racine === Math.floor(racine)
}

//Vérifier si un nombre est négatif
function isNegatif(n) {
    return n < 0
}

//Générer des nombres aléatoires et le discriminant lié 
//Cette fonction prend en parametre un string qui permet le renvoi d'une valeurs selon son critière négatif/square 
function discriminantGenerator(param) {
    const a = 1; // x²
    // Générer des valeurs aléatoires entre -10 et 10
    const b = Math.floor(Math.random() * 21) - 10
    const c = Math.floor(Math.random() * 21) - 10
    const discriminant = calculate(a,b,c)

    if (param == 'negatif') {
        return isNegatif(discriminant) ?  {a,b,c, response:discriminant} : discriminantGenerator('negatif') 
    }
    if (param == 'square') {
        return isSquare(discriminant) ?  {a,b,c, response:discriminant} : discriminantGenerator('square')   
    }
}
    
//Calculer un discriminant
function calculate(a,b,c) {
    //formule de calcul d'un discriminant (Y²-4ac)
    return response = b ** 2 - 4 * a * c
}

//Générer un énoncé
function enonceGenerator(b, c) {
    let a = "";
    let equation = '';
  
    if (b === 0) {
      if (c === 0) {
        equation = `${a}x²`;
      } else if (c > 0) {
        equation = `${a}x²+${c}`;
      } else {
        equation = `${a}x²${c}`;
      }
    } else if (b === 1 || b === -1) {
      if (c === 0) {
        equation = `x²+x`;
      } else if (c > 0) {
        equation = `x²+x+${c}`;
      } else {
        equation = `x²+x${c}`;
      }
    } else if (c === 0) {
      if (b > 0) {
        equation = `${a}x²+${b}x`;
      } else {
        equation = `${a}x²${b}x`;
      }
    } else {
      if (b > 0) {
        equation = `${a}x²+${b}x`;
      } else {
        equation = `${a}x²${b}x`;
      }
      if (c > 0) {
        equation += `+${c}`;
      } else {
        equation += `${c}`;
      }
    }
  
    return `Calculez le discriminant de ${equation}`;
  }
  