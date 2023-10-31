/**
 * Liste des symboles possibles
 * @type {string}
 */
const symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()[]{}|+-*/=,.?<>;:';

/**
 * Fonction pour obtenir un décalage à partir d'une clé
 * @param {string} key - La clé utilisée pour le décalage
 * @param {number} index - L'index du caractère dans le message
 * @returns {number} - Le décalage à appliquer
 */
function getShift(key, index) {
  return symbols.indexOf(key[index % key.length]);
}

/**
 * Fonction pour coder ou décoder un message avec une clé
 * @param {string} message - Le message à coder ou à décoder
 * @param {string} key - La clé utilisée pour le codage ou le décodage
 * @param {boolean} isEncoding - Indique si le message doit être codé (true) ou décodé (false)
 * @returns {string} - Le message codé ou décodé
 */
function cypherMessageWithKey(message, key, isEncoding) {
  let codedMessage = '';
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    let shift = getShift(key, i);
    if (!isEncoding) {
      shift = -shift; // Si on décode le message, on inverse le décalage
    }
    const index = symbols.indexOf(char);
    if (index !== -1) {
      const newIndex = (index + shift + symbols.length) % symbols.length;
      codedMessage += symbols[newIndex];
    } else {
      codedMessage += char; // Si le caractère n'est pas dans les symboles, on le laisse tel quel
    }
  }
  return codedMessage;
}

/**
 * Fonction principale pour lancer l'application
 */
function main() {
  const action = prompt('Voulez-vous coder ou décoder un message ? ([C]oder/[D]ecoder)');
  const isEncoding = action.toUpperCase() === 'C';
  const message = prompt('Entrez votre message :');
  const key = prompt('Entrez la clé :');
  const codedMessage = cypherMessageWithKey(message, key, isEncoding);
  alert(`Message ${isEncoding ? 'codé' : 'décodé'} : ${codedMessage}`);
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application
  main();
});
