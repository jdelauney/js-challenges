/**
 * Liste des symboles possibles
 * @type {Array<string>}
 */
const symbols = ['🍎', '🍊', '🍒', '🍓', '🍇'];

/**
 * Fonction pour obtenir un symbole aléatoire
 * @returns {string} Un symbole aléatoire
 */
function getRandomSymbol() {
  const index = Math.floor(Math.random() * symbols.length);
  return symbols[index];
}

/**
 * Fonction pour tirer le levier de la machine à sous
 */
function pullLever() {
  const result = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
  alert(`Résultat : ${result.join(' ')}`);

  if (result[0] === result[1] && result[1] === result[2]) {
    alert('Félicitations ! Vous avez gagné !');
  } else {
    alert('Dommage, vous avez perdu. Essayez encore !');
  }
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Ajoute un écouteur d'événement sur le bouton
  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    // Lance l'application
    pullLever();
  });
});
