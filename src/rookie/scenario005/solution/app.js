/**
 * Fonction pour décaler un caractère
 * @param {string} char - Le caractère à décaler
 * @param {number} shift - Le nombre de positions à décaler
 * @returns {string} - Le caractère décalé
 */
function getShiftChar(char, shift, alphabet) {
  const index = alphabet.indexOf(char.toLowerCase());
  if (index === -1) return char; // Si le caractère n'est pas une lettre, on le retourne tel quel
  const s = shift > 0 ? shift % alphabet.length : (alphabet.length + shift) % alphabet.length;
  const newIndex = (index + s + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}

/**
 * Fonction pour coder ou décoder un message avec l'algo de caesar (Rot13)
 * @param {string} message - Le message à coder ou à décoder
 * @param {number} shift - Le décalage à appliquer pour le codage ou le décodage
 * @param {boolean} isEncoding - Indique si le message doit être codé (true) ou décodé (false)
 * @returns {string} - Le message codé ou décodé
 */
function cypherMessage(message, shift, isEncoding) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (!isEncoding) {
    shift = -shift; // Si on décode le message, on inverse le décalage
  }
  let codedMessage = '';
  for (let char of message) {
    codedMessage += getShiftChar(char, shift, alphabet);
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
  const shift = prompt('Entrez le décalage :');
  const codedMessage = cypherMessage(message, shift, isEncoding);
  alert(`Message ${isEncoding ? 'codé' : 'décodé'} : ${codedMessage}`);
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application
  main();
});
