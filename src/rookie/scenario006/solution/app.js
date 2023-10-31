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
 * Fonction pour convertir une lettre en langage Leet
 * @param {string} char - Le caractère à convertir
 * @returns {string} - Le caractère converti en langage Leet
 */
function toLeet(char) {
  return leetRules[char.toLowerCase()] || char;
}

/**
 * Fonction pour convertir une phrase en langage Leet
 * @param {string} phrase - La phrase à convertir
 * @returns {string} - La phrase convertie en langage Leet
 */
function convertToLeet(phrase) {
  let leetPhrase = '';
  for (let char of phrase) {
    leetPhrase += toLeet(char);
  }
  return leetPhrase;
}

/**
 * Fonction principale pour lancer l'application
 */
function main() {
  const phrase = prompt('Entrez votre phrase :');
  const leetPhrase = convertToLeet(phrase);
  alert(`Phrase en langage Leet : ${leetPhrase}`);
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application
  main();
});
