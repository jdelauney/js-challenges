/**
 * Liste des symboles possibles
 * @type {Array<string>}
 */
const symbols = ['🍎', '🍊', '🍒', '🍓', '🍇'];

/**
 * Combinaisons gagnantes
 * @type {Array<{combination: Array<string>, reward: number}>}
 */
const winningCombinations = [
  { combination: ['🍒', '🍎', '🍊'], reward: 2 },
  { combination: ['🍎', '🍎', '🍒'], reward: 5 },
  { combination: ['🍇', '🍒', '🍓'], reward: 3 },
  { combination: ['🍎', '🍇', '🍎'], reward: 5 },
  { combination: ['🍎', '🍊', '🍊'], reward: 3 },
];

/**
 * Nombre de jetons du joueur
 * @type {number}
 */
let tokens = 10;

/**
 * Fonction pour obtenir un symbole aléatoire
 * @returns {string} Un symbole aléatoire
 */
function getRandomSymbol() {
  const index = Math.floor(Math.random() * symbols.length);
  return symbols[index];
}

/**
 * Fonction pour vérifier si le résultat correspond à une combinaison gagnante
 * @param {Array<string>} result - Le résultat à vérifier
 * @returns {boolean} Vrai si le résultat correspond à une combinaison gagnante, faux sinon
 */
function isWinningCombination(result) {
  return winningCombinations.some((wc) => wc.combination.every((value, index) => value === result[index]));
}

/**
 * Fonction pour obtenir la récompense d'une combinaison gagnante
 * @param {Array<string>} result - Le résultat à vérifier
 * @returns {number} La récompense de la combinaison gagnante
 */
function getReward(result) {
  const win = winningCombinations.find((wc) => wc.combination.every((value, index) => value === result[index]));
  return win.reward;
}

/**
 * Fonction pour tirer le levier de la machine à sous
 */
function pullLever() {
  if (tokens > 0) {
    tokens--;
    const result = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];
    alert(`Résultat : ${result.join(' ')}`);

    if (result[0] === result[1] && result[1] === result[2]) {
      tokens += 10;
      alert(`Félicitations ! Vous avez gagné ! Vous avez maintenant ${tokens} jetons.`);
    } else if (isWinningCombination(result)) {
      tokens += getReward(result);
      alert(`Félicitations ! Vous avez gagné ! Vous avez maintenant ${tokens} jetons.`);
    } else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
      tokens++;
      alert(`Félicitations ! Vous avez gagné ! Vous avez maintenant ${tokens} jetons.`);
    } else {
      alert(`Dommage, vous avez perdu. Vous avez maintenant ${tokens} jetons.`);
    }
  } else {
    alert("Désolé, vous n'avez plus de jetons. Vous ne pouvez plus jouer.");
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
