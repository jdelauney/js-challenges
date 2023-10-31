/**
 * Questions du quiz
 * @type {Array<{question: string, responses: Array<string>, correctAnswer: number}>}
 */
const questions = [
  {
    question: "Qu'est-ce qu'une variable en JavaScript ?",
    responses: ['Un type de données', 'Un opérateur', 'Une boucle', 'Un conteneur pour stocker des données'],
    correctAnswer: 3,
  },
  {
    question: 'Quel est le type de données de `true` en JavaScript ?',
    responses: ['String', 'Number', 'Boolean', 'Undefined'],
    correctAnswer: 2,
  },
  {
    question: 'Quelle méthode permet de transformer un tableau en chaîne de caractères ?',
    responses: ['split()', 'join()', 'concat()', 'reverse()'],
    correctAnswer: 1,
  },
  {
    question: 'Quel est le résultat de `typeof null` en JavaScript ?',
    responses: ['null', '"null"', '"object"', '"undefined"'],
    correctAnswer: 2,
  },
  {
    question: 'Comment déclarer une fonction en JavaScript ?',
    responses: [
      'function maFonction() {}',
      'maFonction function = {}',
      'function = maFonction() {}',
      'maFonction() = function {}',
    ],
    correctAnswer: 0,
  },
  {
    question: "Quelle méthode permet d'ajouter un élément à la fin d'un tableau ?",
    responses: ['pop()', 'shift()', 'push()', 'unshift()'],
    correctAnswer: 2,
  },
  {
    question: "Comment accéder à un élément d'un tableau en JavaScript ?",
    responses: ['nomDuTableau(index)', 'nomDuTableau.index', 'nomDuTableau{index}', 'nomDuTableau[index]'],
    correctAnswer: 3,
  },
  {
    question: "Qu'est-ce qu'une boucle `for` en JavaScript ?",
    responses: [
      'Une façon de répéter du code un certain nombre de fois',
      'Une façon de déclarer une variable',
      'Une façon de déclarer une fonction',
      'Une façon de créer un tableau',
    ],
    correctAnswer: 0,
  },
  {
    question: 'Comment utiliser une boucle `for` pour parcourir un tableau en JavaScript ?',
    responses: [
      'for (let i = 0; i < tableau.length; i++) {}',
      'for (let i = 0; i <= tableau.length; i++) {}',
      'for (let i = 0; i < tableau.length; i++) []',
      'for (let i = 0; i < tableau.length; i++) //',
    ],
    correctAnswer: 0,
  },
  {
    question: 'undefined` et `null` sont-ils égaux en valeur et en type ?',
    responses: ['Oui', 'Non'],
    correctAnswer: 1,
  },
];

/**
 * Fonction pour afficher une question à l'utilisateur et recueillir sa réponse
 * @param {{question: string, responses: Array.<string>, correctAnswer: number}} question - L'objet question à poser
 * @returns {number} L'index de la réponse de l'utilisateur
 */
function askQuestion(question) {
  const questionText = `${question.question}\n${question.responses
    .map((option, index) => `${index + 1}. ${option}`)
    .join('\n')}`;
  let answer;
  do {
    answer = parseInt(prompt(questionText));
  } while (isNaN(answer) || answer < 1 || answer > question.responses.length);
  return answer - 1; // Retourne l'index de la réponse
}

/**
 * Fonction principale pour lancer le quiz interactif
 */
function main() {
  let score = 0;
  for (const question of questions) {
    const userAnswer = askQuestion(question);
    if (userAnswer === question.correctAnswer) {
      score++;
      alert('Bonne réponse !');
    } else {
      alert(`Mauvaise réponse. La bonne réponse était : ${question.responses[question.correctAnswer]}`);
    }
  }
  alert(`Le quiz est terminé. Votre score est de : ${score}/${questions.length}`);
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application
  main();
});
