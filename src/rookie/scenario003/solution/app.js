/**
 * Constante pour le nombre de millisecondes dans une minute
 * @type {number}
 */
const MS_IN_MINUTE = 1000 * 60;

/**
 * Demande à l'utilisateur sa date de naissance
 * @returns {Date} La date de naissance de l'utilisateur
 */
function getUserBirthDate() {
  const birthDateInput = prompt('Quelle est votre date de naissance ? (format : AAAA-MM-JJ)');
  return new Date(birthDateInput);
}

/**
 * Calcule le nombre total de minutes depuis une certaine date
 * @param {Date} date - La date à partir de laquelle calculer le nombre total de minutes
 * @returns {number} Le nombre total de minutes depuis la date donnée
 */
function getTotalMinutesFromDate(date) {
  const currentDate = new Date();
  return (currentDate - date) / MS_IN_MINUTE;
}

/**
 * Calcule le nombre total de battements de cœur depuis un certain nombre de minutes
 * @param {number} minutes - Le nombre total de minutes
 * @returns {number} Le nombre total de battements de cœur
 */
function getTotalHeartbeats(minutes) {
  // Nombre de battement de cœur moyen par minute
  const heartRatePerMinute = 80;
  return minutes * heartRatePerMinute;
}

/**
 * Fonction principale pour lancer l'application
 */
function main() {
  const birthDate = getUserBirthDate();
  const totalMinutes = getTotalMinutesFromDate(birthDate);
  const totalHeartbeats = getTotalHeartbeats(totalMinutes);

  alert(`Votre cœur a battu environ ${Math.round(totalHeartbeats)} fois depuis votre naissance.`);
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application
  main();
});
