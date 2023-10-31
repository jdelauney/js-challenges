/**
 * Demande à l'utilisateur de choisir un nombre aléatoire entre 1 et 500
 * @returns {number} Le nombre choisi par l'utilisateur
 */
function getUserNumber() {
  const userNumber = prompt('Veuillez choisir un nombre entre 1 et 500.');
  return parseInt(userNumber);

  /*
    différence entre parseInt et Number, les deux peuvent être utilisés pour convertir une chaîne en nombre,
    mais ils se comportent différemment dans certains cas.
    parseInt convertit la chaîne en un entier, tandis que Number peut convertir la chaîne en un nombre à virgule
    flottante si elle contient un point décimal. De plus, parseInt ignore les caractères non numériques à la fin de
    la chaîne, tandis que Number renvoie NaN si la chaîne contient des caractères non numériques.
    Dans ce cas, comme nous nous attendons à ce que l’utilisateur entre un nombre entier, parseInt est un choix
    approprié. Cependant, si vous préférez utiliser Number, cela fonctionnerait également dans ce contexte.
   */
}

/**
 * L'ordinateur fait une tentative pour deviner le nombre
 * @param {number} min - La borne inférieure pour la devinette
 * @param {number} max - La borne supérieure pour la devinette
 * @returns {number} La devinette de l'ordinateur
 */
function makeGuess(min, max) {
  return Math.floor((min + max) / 2);
  // bonus : return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Demande à l'utilisateur si la supposition de l'ordinateur est correcte
 * @param {number} guess - La supposition de l'ordinateur
 * @returns {string} Les commentaires de l'utilisateur sur la supposition
 */
function getUserFeedback(guess) {
  const feedback = prompt(`L'ordinateur propose ${guess}. Est-ce trop grand (G), trop petit (P), ou correct (C) ?`);
  return feedback.toUpperCase();
}

/**
 * Fonction principale pour lancer le jeu
 */
function main() {
  const userNumber = getUserNumber();
  const attempts = 10;
  let min = 1;
  let max = 500;

  for (let i = 0; i < attempts; i++) {
    let guess = makeGuess(min, max);
    let feedback = getUserFeedback(guess);

    if (feedback === 'C') {
      alert(`Correct ! Le nombre était ${userNumber}`);
      break;
    } else if (feedback === 'P') {
      alert(`Trop petit ! La proposition était ${guess}`);
      min = guess + 1;
    } else if (feedback === 'G') {
      alert(`Trop grand ! La proposition était ${guess}`);
      max = guess - 1;
    }

    if (i === attempts - 1) {
      alert(`L'ordinateur abandonne ! Le nombre était ${userNumber}`);
    }
  }
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Ajoute un écouteur d'événement sur le bouton
  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    // Lance l'application
    main();
  });
});
