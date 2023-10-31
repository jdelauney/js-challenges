// Constante pour le nombre de millisecondes dans une minute
const MS_IN_MINUTE = 1000 * 60;

// Demande à l'utilisateur sa date de naissance
function getUserBirthDate() {
  const birthDateInput = prompt("Quelle est votre date de naissance ? (format : AAAA-MM-JJ)");
  return new Date(birthDateInput);
}

// Demande à l'utilisateur son sexe
function getUserSex() {
  return prompt("Quel est votre sexe ? ([H]omme/[F]emme)").toUpperCase();
}

// Demande à l'utilisateur son niveau d'activité physique
function getUserActivityLevel() {
  return prompt("Quel est votre niveau d'activité physique ? ([F]aible/[M]oyen/[E]levé)").toUpperCase();
}

// Calcule la fréquence cardiaque moyenne en fonction du sexe, de l'âge et du niveau d'activité physique de l'utilisateur
function calculateAverageHeartRate(sex, birthDate, activityLevel) {
  let baseRate = sex === 'F' ? 75 : 80;

  const age = new Date().getFullYear() - birthDate.getFullYear();
  baseRate -= Math.floor(age / 10) * 2;

  if (activityLevel === 'F') {
    baseRate -= 10;
  } else if (activityLevel === 'M') {
    baseRate += 5;
  } else if (activityLevel === 'E') {
    baseRate += 10;
  }

  return baseRate;
}

// Calcule le nombre total de minutes depuis une certaine date
function getTotalMinutesFromDate(date) {
  const currentDate = new Date();
  return (currentDate - date) / MS_IN_MINUTE;
}

// Calcule le nombre total de battements de cœur depuis un certain nombre de minutes
function getTotalHeartbeats(minutes, heartRatePerMinute) {
  return minutes * heartRatePerMinute;
}

// Fonction principale pour lancer l'application
function main() {
  const birthDate = getUserBirthDate();
  const sex = getUserSex();
  const activityLevel = getUserActivityLevel();
  const heartRatePerMinute = calculateAverageHeartRate(sex, birthDate, activityLevel);
  const totalMinutes = getTotalMinutesFromDate(birthDate);
  const totalHeartbeats = getTotalHeartbeats(totalMinutes, heartRatePerMinute);

  alert("Votre cœur a battu environ " + Math.round(totalHeartbeats) + " fois depuis votre naissance.");
}

// Attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  // Lance l'application
  main();
})
