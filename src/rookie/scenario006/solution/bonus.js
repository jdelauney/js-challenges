/**
 * Règles de conversion en langage Leet
 * @type {Object<string, string>}
 */
const leetRules = {
  a: '4',
  b: '8',
  c: '<',
  d: '|)',
  e: '3',
  f: '|=',
  g: '6',
  h: '#',
  i: '1',
  j: '_|',
  k: '|<',
  l: '|_',
  m: '/\\/\\',
  n: '|\\|',
  o: '0',
  p: '|D',
  q: '(,)',
  r: '|2',
  s: '5',
  t: '7',
  u: '|_|',
  v: '\\/',
  w: '\\/\\/',
  x: '%',
  y: '`/',
  z: '2',
  0: 'D',
  1: '|',
  2: 'Z',
  3: 'E',
  4: 'h',
  5: '$',
  6: '_|_',
  7: '|_|_',
  8: '|_||_\\|',
  9: '|_|_|',
};

/**
 * Règles inverses pour le décodage
 * @type {Object<string, string>}
 */
const reverseLeetRules = {};
for (let key in leetRules) {
  reverseLeetRules[leetRules[key]] = key;
}

/**
 * Fonction pour convertir une lettre en langage Leet
 * @param {string} message - Le message à convertir
 * @returns {string} - Le caractère converti en langage Leet
 */
function toLeet(message) {
  let leetMessage = '';
  for (let char of message) {
    leetMessage += leetRules[char.toLowerCase()] || char;
  }
  return leetMessage;
}

/**
 * Fonction pour convertir une lettre du langage Leet en texte clair
 * @param {string} leetMessage - Le message en langage Leet à convertir
 * @returns {string} - Le message converti en texte clair
 */
function fromLeet(leetMessage) {
  let message = leetMessage;
  // Trier les clés par longueur, en commençant par les plus longues, sinon il risque d'y avoir des collisions
  // avec 'v': '\\/' et 'w': '\\/\\/' qui on en commun la sequence '\\/' par exemple
  const keys = Object.keys(reverseLeetRules).sort((a, b) => b.length - a.length);
  for (let key of keys) {
    while (message.includes(key)) {
      message = message.replace(key, reverseLeetRules[key]);
    }
  }
  return message;
}

/**
 * Fonction pour convertir une phrase en langage Leet ou du langage Leet en texte clair
 * @param {string} phrase - La phrase à convertir
 * @param {boolean} isToLeet - Indique si la phrase doit être convertie en langage Leet (true) ou du langage Leet en texte clair (false)
 * @returns {string} - La phrase convertie
 */
function convertPhrase(phrase, isToLeet) {
  return isToLeet ? toLeet(phrase) : fromLeet(phrase);
}

/**
 * Fonction principale pour lancer l'application
 */
function main() {
  const action = prompt('Voulez-vous coder ou décoder un message ? ([C]oder/[D]ecoder)');
  const isToLeet = action.toUpperCase() === 'C';
  const phrase = prompt('Entrez votre phrase :');
  const convertedPhrase = convertPhrase(phrase, isToLeet);
  alert(`Phrase ${isToLeet ? 'codée' : 'décodée'} : ${convertedPhrase}`);
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application
  main();
});
