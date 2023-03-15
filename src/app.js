console.log('KwyK - générateur d\'exercices');
const title = 'KwyK - générateur d\'exercices';
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
let response = null;
let square = document.getElementById('square');
let negatif = document.getElementById('negatif');

//01 Afficher l'exercice numéro 1 au clic sur le bouton square
square.addEventListener('click', function name() {
    //CONSOLE EXERCICE 1
    const exercice1 = generateSquareDescriminant();
    console.log(exercice1.enonce);
    console.log(exercice1.help);
    console.log(exercice1.response);
    //Afficher l'exercice + aide
    let exoContent = document.querySelector('.exo-content')
    exoContent.classList.remove('hidden')
    exoContent.querySelector('h2').textContent = exercice1.enonce
    exoContent.querySelector('h3').textContent = `Indice : ${exercice1.help}`

    response = exercice1.response;

})
//02

//03

//04 Afficher l'exercice numéro 4 au clic sur le bouton square
negatif.addEventListener('click', function event() {
    //CONSOLE EXERCICE 1
    const exercice4 = generateNegatifDescriminant();
    console.log(exercice4.enonce);
    console.log(exercice4.help);
    console.log(exercice4.response);
    //Afficher l'exercice + aide
    let exoContent = document.querySelector('.exo-content')
    exoContent.classList.remove('hidden')
    exoContent.querySelector('h2').textContent = exercice4.enonce
    exoContent.querySelector('h3').textContent = `Indice : ${exercice4.help}`

    response = exercice4.response;
 
})
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
     if (!isNaN(value)) {
        //Si la valeur correcte
        if (value == response) {
            console.log('Bravo 👍, c\'est une bonne réponse !');
            exoContent.querySelector('p').textContent = `Bravo 👍, ${value} est une bonne réponse !`

        } else {
            console.log('Et non 😟, essaie encore !');
            exoContent.querySelector('p').textContent = `Et non 😟, essaie encore !`
        }
     } 
     //Sinon message d'erreur
     else {
        console.log('Merci de saisir une valeur correcte !');
        exoContent.querySelector('p').textContent = `Merci de saisir une valeur correcte !`
     }
   }
   //Sinon affichage d'un message d'erreur
   else{
    console.log('oupsy, petit problème !');
   }
})
//**************************/
// FONCTIONS
//**************************/

// 1 . Discriminant carré
function generateSquareDescriminant() {

    const a = 1; // x²
    // Générer des valeurs aléatoires entre -10 et 10
    const b = Math.floor(Math.random() * 21) - 10;
    const c = Math.floor(Math.random() * 21) - 10;
    // Construire l'énoncé de l'exercice
    const enonce = `Trouvez le discriminant de ${a}x² + ${b}x + ${c}`;
    // Construire l'aide de l'exercice
    const help = 'Discriminant carré';
    // Calculer le discriminant
    const discriminant = b ** 2 - 4 * a * c;
    //Vérifier si le discriminant est un carré
    if (isSquare(discriminant)) {
        // Retourner l'énoncé et le résultat attendu
        return { enonce, help, response: discriminant };
    }
    //Sinon relancer la fonction
    return generateSquareDescriminant();
   
}
// 2 . Discriminant non carré mais petit

//...

// 3 . Discriminant non carré et grand

// ...

// 4 . Discriminant négatif
function generateNegatifDescriminant() {

    const a = 1; // x²
    // Générer des valeurs aléatoires entre -10 et 10
    const b = Math.floor(Math.random() * 21) - 10;
    const c = Math.floor(Math.random() * 21) - 10;
    // Construire l'énoncé de l'exercice
    const enonce = `Trouvez le discriminant de ${a}x² + ${b}x + ${c}`;
    // Construire l'aide de l'exercice
    const help = 'Discriminant négatif';
    // Calculer le discriminant
    const discriminant = b ** 2 - 4 * a * c;
    //Vérifier si le discriminant est négatif
    if (isNegatif(discriminant)) {
        // Retourner l'énoncé l'aide et le résultat attendu
        return { enonce, help, response: discriminant };
    }
    //Sinon relancer la fonction
    return generateNegatifDescriminant();
   
}

//**************************/
// HELPERS
//**************************/
//Vérifier si un nombre est un carré
function isSquare(n) {
    var racine = Math.sqrt(n);
    return racine === Math.floor(racine);
}
//Vérifier si un nombre est négatif
function isNegatif(n) {
    return n < 0;
}
