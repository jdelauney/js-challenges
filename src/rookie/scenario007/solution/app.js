/**
 * Constantes globales pour les minimums et maximums
 * @type {number}
 */
const MIN_STUDENTS = 7;
const MAX_STUDENTS = 31;
const MIN_GRADES = 5;
const MAX_GRADES = 12;
const MIN_GRADE = 0;
const MAX_GRADE = 20;

/**
 * Fonction pour obtenir un nombre entré par l'utilisateur entre min et max
 * @param {number} min - Le nombre minimum
 * @param {number} max - Le nombre maximum
 * @param {string} promptMessage - Le message à afficher à l'utilisateur
 * @returns {number} - Le nombre entré par l'utilisateur
 */
function getNumber(min, max, promptMessage) {
  let number;
  do {
    number = parseInt(prompt(promptMessage));
  } while (isNaN(number) || number < min || number > max);
  return number;
}

/**
 * Fonction pour générer un nombre aléatoire entre min et max
 * @param {number} min - Le nombre minimum
 * @param {number} max - Le nombre maximum
 * @returns {number} - Un nombre aléatoire entre min et max
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Fonction pour générer les notes d'un élève
 * @param {number} numGrades - Le nombre de notes à générer
 * @returns {Array<number>} - Un tableau contenant les notes de l'élève
 */
function generateStudentGrades(numGrades) {
  const grades = [];
  for (let i = 0; i < numGrades; i++) {
    grades.push(getRandomNumber(MIN_GRADE, MAX_GRADE));
  }
  return grades;
}

/**
 * Fonction pour générer les notes de tous les élèves
 * @param {number} numStudents - Le nombre d'élèves
 * @param {number} numGrades - Le nombre de notes par élève
 * @returns {Array<Array<number>>} - Un tableau contenant les notes de tous les élèves
 */
function generateAllStudentsGrades(numStudents, numGrades) {
  const allGrades = [];
  for (let i = 0; i < numStudents; i++) {
    const studentGrades = generateStudentGrades(numGrades);
    allGrades.push(studentGrades);
  }
  return allGrades;
}

/**
 * Fonction pour calculer la moyenne d'un tableau de nombres
 * @param {Array<number>} numbers - Un tableau de nombres
 * @returns {number} - La moyenne des nombres dans le tableau
 */
function calculateAverage(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

/**
 * Fonction pour calculer la moyenne de la classe par matière
 * @param {Array<Array<number>>} allGrades - Un tableau contenant les notes de tous les élèves
 * @param {number} numGrades - Le nombre de notes par élève
 * @returns {Array<number>} - Un tableau contenant la moyenne de la classe par matière
 */
function calculateClassAverageBySubject(allGrades, numGrades) {
  const averages = [];

  for (let i = 0; i < numGrades; i++) {
    const gradesForSubject = allGrades.map((studentGrades) => studentGrades[i]);
    const averageForSubject = calculateAverage(gradesForSubject);
    averages.push(averageForSubject);
  }

  return averages;
}

/**
 * Fonction principale pour lancer l'application
 */
function main() {
  const numStudents = getNumber(
    MIN_STUDENTS,
    MAX_STUDENTS,
    `Entrez le nombre d'élèves (entre ${MIN_STUDENTS} et ${MAX_STUDENTS}) :`
  );

  const numGrades = getNumber(
    MIN_GRADES,
    MAX_GRADES,
    `Entrez le nombre de notes par élève (entre ${MIN_GRADES} et ${MAX_GRADES}) :`
  );

  const allGrades = generateAllStudentsGrades(numStudents, numGrades);

  // Afficher les notes de tous les élèves en une seule fois
  const allStudentGradesText = allGrades.map(
    (studentGrades, i) => `Notes de l'élève ${i + 1} : ${studentGrades.join(', ')}`
  );
  alert(allStudentGradesText.join('\n'));

  const averages = allGrades.map(calculateAverage);

  // Calculer la moyenne de la classe par matière
  const classAveragesBySubject = calculateClassAverageBySubject(allGrades, numGrades);

  // Afficher les moyennes de la classe par matière
  const allClassAveragesBySubjectText = classAveragesBySubject.map(
    (average, i) => `Moyenne de la classe pour la matière ${i + 1} : ${average.toFixed(2)}`
  );
  alert(allClassAveragesBySubjectText.join('\n'));

  // Afficher les moyennes des élèves
  const allStudentAveragesText = averages.map((average, i) => `Moyenne de l'élève ${i + 1} : ${average.toFixed(2)}`);
  alert(allStudentAveragesText.join('\n'));

  // Afficher la moyenne de la classe
  const classAverage = calculateAverage(averages);
  alert(`Moyenne de la classe : ${classAverage.toFixed(2)}`);
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application

  main();
});
