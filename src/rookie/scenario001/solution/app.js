/**
 * Demande à l'utilisateur son prénom, son nom et son personnage préféré
 * @returns {Object} Un objet contenant le prénom, le nom et le personnage préféré de l'utilisateur
 */
function getUserInput() {
  let firstName = prompt('Quel est votre prénom ?');
  let lastName = prompt('Quel est votre nom ?');
  let favoriteCharacter = prompt('Qui est votre personnage préféré ?');

  return { firstName, lastName, favoriteCharacter };
}

/**
 * Divise une chaîne en deux et retourne une moitié aléatoire
 * @param {string} str - La chaîne à diviser
 * @returns {string} Une moitié aléatoire de la chaîne
 */
function getRandomHalf(str) {
  let halfLength = Math.floor(str.length / 2);
  return Math.random() < 0.5 ? str.substring(0, halfLength) : str.substring(halfLength);
}

/**
 * Génère un nom de personnage à partir des entrées de l'utilisateur
 * @param {string} firstName - Le prénom de l'utilisateur
 * @param {string} lastName - Le nom de l'utilisateur
 * @param {string} favoriteCharacter - Le personnage préféré de l'utilisateur
 * @returns {string} Un nom de personnage généré à partir des entrées de l'utilisateur
 */
function generateCharacterName(firstName, lastName, favoriteCharacter) {
  let halfFirstName = getRandomHalf(firstName);
  let halfLastName = getRandomHalf(lastName);
  let halfFavoriteCharacter = getRandomHalf(favoriteCharacter);

  return halfFirstName + halfLastName + halfFavoriteCharacter;
}

/**
 * Fonction principale pour lancer l'application
 */
function main() {
  let userInput = getUserInput();
  let characterName = generateCharacterName(userInput.firstName, userInput.lastName, userInput.favoriteCharacter);

  alert(characterName);
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Ajoute un écouteur d'événement sur le bouton
  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    // Lance l'application
    main();
  });
});
