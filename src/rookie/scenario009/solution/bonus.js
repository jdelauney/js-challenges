/**
 * Constantes pour les vitesses et les distances
 * @type {number}
 */
const MIN_SPEED = 80;
const MAX_SPEED = 220;
const MIN_LAPS = 5;
const MAX_LAPS = 11;
const MIN_DISTANCE = 5;
const MAX_DISTANCE = 15;

/**
 * Fonction pour obtenir un nombre aléatoire entre min et max
 * @param {number} min - La valeur minimale
 * @param {number} max - La valeur maximale
 * @returns {number} Un nombre aléatoire entre min et max
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Fonction pour limiter une valeur à un intervalle [min, max]
 * @param {number} value - La valeur à limiter
 * @param {number} min - La valeur minimale
 * @param {number} max - La valeur maximale
 * @returns {number} La valeur limitée à l'intervalle [min, max]
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}

/**
 * Objet Car
 * @typedef {Object} Car
 * @property {number} minSpeed - La vitesse minimale de la voiture
 * @property {number} maxSpeed - La vitesse maximale de la voiture
 * @property {number} currentSpeed - La vitesse actuelle de la voiture
 * @property {number} distanceTraveled - La distance totale parcourue par la voiture
 */

/**
 * Fonction pour générer une voiture
 * @returns {Car} Un objet Car avec des propriétés de vitesse et de distance
 */
function generateCar() {
  return {
    minSpeed: getRandomNumber(MIN_SPEED, MAX_SPEED),
    maxSpeed: getRandomNumber(MIN_SPEED, MAX_SPEED),
    currentSpeed: 0,
    distanceTraveled: 0,
  };
}

/**
 * Fonction pour générer toutes les voitures
 * @param {number} numCars - Le nombre de voiture
 * @returns {Array<Car>} Un tableau d'objets voiture
 */
function generateCars(numCars) {
  const cars = [];
  for (let i = 0; i < numCars; i++) {
    cars.push(generateCar());
  }
  return cars;
}

/**
 * Fonction pour mettre à jour la vitesse d'une voiture
 * @param {Car} car - L'objet "Voiture" à mettre à jour
 */
function updateSpeed(car) {
  const speedChange = getRandomNumber(-15, 15);
  car.currentSpeed += speedChange;

  // Utiliser la fonction clamp pour s'assurer que la vitesse reste dans les limites min et max
  car.currentSpeed = clamp(car.currentSpeed, car.minSpeed, car.maxSpeed);
}

/**
 * Fonction pour mettre à jour la distance parcourue par une voiture
 * @param {Car} car - L'objet "Voiture" à mettre à jour
 */
function updateDistance(car) {
  // Convertir la vitesse en km/min, puis multiplier par le nombre de minutes dans une itération (3 minutes)
  const distance = (car.currentSpeed / 60) * 3;

  car.distanceTraveled += distance;
}

/**
 * Fonction pour vérifier si une voiture a terminé la course
 * @param {Car} car - L'objet "Voiture" à vérifier
 * @param {number} lapDistance - La distance d'un tour de piste
 * @param {number} numLaps - Le nombre de tours de piste à effectuer
 * @returns {boolean} Vrai si la voiture a terminé la course, faux sinon
 */
function hasFinished(car, lapDistance, numLaps) {
  return car.distanceTraveled >= lapDistance * numLaps;
}

/**
 * Fonction pour afficher le résultat de la course
 * @param {Array<Car>} cars - Le tableau d'objets "Voiture" à afficher
 * @param {number} lapDistance - La distance d'un tour de piste
 * @param {number} numLaps - Le nombre de tours de piste à effectuer
 */
function displayRaceResult(cars, lapDistance, numLaps) {
  // Trier les voitures par distance parcourue et afficher les résultats
  cars.sort((a, b) => b.distanceTraveled - a.distanceTraveled);

  const resultText = [];
  for (let i = 0; i < cars.length; i++) {
    resultText.push(
      `Voiture ${i + 1} a parcouru ${cars[i].distanceTraveled.toFixed(2)} km à une vitesse moyenne de ${(
        cars[i].distanceTraveled /
        (numLaps * lapDistance)
      ).toFixed(2)} km/h`
    );
  }

  alert(resultText.join('\n'));
}

/**
 * Fonction principale pour lancer le jeu de course de voitures
 */
function main() {
  const numCars = parseInt(prompt('Combien de voitures participent à la course ?'));
  const cars = generateCars(numCars);
  const numLaps = getRandomNumber(MIN_LAPS, MAX_LAPS);
  const lapDistance = getRandomNumber(MIN_DISTANCE, MAX_DISTANCE);
  let ok = true;
  while (ok) {
    for (let i = 0; i < numCars; i++) {
      if (!hasFinished(cars[i], lapDistance, numLaps)) {
        updateSpeed(cars[i]);
        updateDistance(cars[i]);
      }
    }

    // Vérifier si toutes les voitures ont terminé la course
    if (cars.every((car) => hasFinished(car, lapDistance, numLaps))) {
      ok = false;
    }

    // Afficher le classement des voitures après chaque tour
    if (ok) {
      displayRaceResult(cars, lapDistance, numLaps);
    }
  }

  displayRaceResult(cars, lapDistance, numLaps);
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application
  main();
});
