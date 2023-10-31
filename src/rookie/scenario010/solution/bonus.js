/**
 * Définit les questions du quiz pour différentes difficultés.
 * @typedef {Object} Question
 * @property {string} question - La question posée dans le quiz.
 * @property {string[]} responses - Les options de réponse possibles à la question.
 * @property {number} correctAnswer - L'index de la réponse correcte dans le tableau des réponses.
 * @property {number} points - Le nombre de points attribués pour une réponse correcte à cette question.
 */

/**
 * L'ensemble de questions classées par difficulté.
 * @typedef {Object} QuestionsByDifficulty
 * @property {Question[]} facile - Questions faciles du quiz.
 * @property {Question[]} moyen - Questions de niveau moyen du quiz.
 * @property {Question[]} difficile - Questions difficiles du quiz.
 */

/**
 * Étape 1: Définir les questions du quiz
 * @type {QuestionsByDifficulty}
 */
const questions = {
  facile: [
    {
      question: "Qu'est-ce qu'une variable en JavaScript ?",
      responses: ['Un type de données', 'Un opérateur', 'Une boucle', 'Un conteneur pour stocker des données'],
      correctAnswer: 3,
      points: 1,
    },
    {
      question: 'Quel est le type de données de `true` en JavaScript ?',
      responses: ['String', 'Number', 'Boolean', 'Undefined'],
      correctAnswer: 2,
      points: 1,
    },
    {
      question: 'Quelle méthode permet de transformer un tableau en chaîne de caractères ?',
      responses: ['split()', 'join()', 'concat()', 'reverse()'],
      correctAnswer: 1,
      points: 1,
    },
    {
      question: 'Quel est le résultat de `typeof null` en JavaScript ?',
      responses: ['null', '"null"', '"object"', '"undefined"'],
      correctAnswer: 2,
      points: 1,
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
      points: 1,
    },
    {
      question: "Quelle méthode permet d'ajouter un élément à la fin d'un tableau ?",
      responses: ['pop()', 'shift()', 'push()', 'unshift()'],
      correctAnswer: 2,
      points: 1,
    },
    {
      question: "Comment accéder à un élément d'un tableau en JavaScript ?",
      responses: ['nomDuTableau(index)', 'nomDuTableau.index', 'nomDuTableau{index}', 'nomDuTableau[index]'],
      correctAnswer: 3,
      points: 1,
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
      points: 1,
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
      points: 1,
    },
    {
      question: 'undefined` et `null` sont-ils égaux en valeur et en type ?',
      responses: ['Oui', 'Non'],
      correctAnswer: 1,
      points: 1,
    },
  ],
  moyen: [
    {
      question: "Qu'est-ce que le DOM en JavaScript ?",
      responses: ['Document Object Model', 'Data Object Model', 'Document Oriented Model', 'Data Oriented Model'],
      correctAnswer: 0,
      points: 2,
    },
    {
      question: 'Comment sélectionner un élément du DOM en JavaScript ?',
      responses: [
        "document.queryElement('id')",
        "document.getElementById('id')",
        "document.getElement('id')",
        "document.querySelector('id')",
      ],
      correctAnswer: 1,
      points: 2,
    },
    {
      question: "Qu'est-ce que JSON en JavaScript ?",
      responses: [
        'JavaScript Object Notation',
        'JavaScript Oriented Notation',
        'JavaScript Object Network',
        'JavaScript Oriented Network',
      ],
      correctAnswer: 0,
      points: 2,
    },
    {
      question: 'Comment convertir un objet JavaScript en JSON ?',
      responses: ['JSON.stringify(objet)', 'JSON.parse(objet)', 'JSON.toJS(objet)', 'JSON.fromJS(objet)'],
      correctAnswer: 0,
      points: 2,
    },
    {
      question: 'Comment convertir une chaîne JSON en objet JavaScript ?',
      responses: ['JSON.stringify(chaine)', 'JSON.parse(chaine)', 'JSON.toJS(chaine)', 'JSON.fromJS(chaine)'],
      correctAnswer: 1,
      points: 2,
    },
    {
      question: "Qu'est-ce que la programmation asynchrone en JavaScript ?",
      responses: [
        'Exécution de code ligne par ligne',
        'Exécution de plusieurs tâches en même temps',
        'Exécution de code après un certain temps',
        "Exécution de code dans l'ordre dans lequel il a été appelé",
      ],
      correctAnswer: 1,
      points: 2,
    },
    {
      question: "Qu'est-ce qu'une promesse en JavaScript ?",
      responses: [
        "Un objet qui représente l'achèvement ou l'échec d'une opération asynchrone",
        'Un objet qui représente une opération synchrone',
        'Un objet qui représente une erreur dans le code',
        'Un objet qui représente une boucle dans le code',
      ],
      correctAnswer: 0,
      points: 2,
    },
    {
      question: "Qu'est-ce que AJAX en JavaScript ?",
      responses: [
        'Une technique pour créer des applications web rapides et dynamiques',
        'Une bibliothèque JavaScript',
        'Un framework JavaScript',
        'Un nouveau langage de programmation',
      ],
      correctAnswer: 0,
      points: 2,
    },
    {
      question: "Qu'est-ce que jQuery en JavaScript ?",
      responses: [
        'Un framework JavaScript',
        'Une bibliothèque JavaScript pour simplifier le codage',
        'Un langage de programmation',
        'Une technique de programmation asynchrone',
      ],
      correctAnswer: 1,
      points: 2,
    },
    {
      question: "Qu'est-ce que Node.js ?",
      responses: [
        "Un environnement d'exécution JavaScript côté serveur",
        "Un environnement d'exécution JavaScript côté client",
        'Une bibliothèque JavaScript',
        'Un framework JavaScript',
      ],
      correctAnswer: 0,
      points: 2,
    },
  ],
  difficile: [
    {
      question: "Qu'est-ce que la programmation orientée objet (POO) en JavaScript ?",
      responses: [
        'Un paradigme de programmation basé sur l\'idée de "objets"',
        'Un paradigme de programmation basé sur l\'idée de "fonctions"',
        'Un paradigme de programmation basé sur l\'idée de "variables"',
        'Un paradigme de programmation basé sur l\'idée de "boucles"',
      ],
      correctAnswer: 0,
      points: 3,
    },
    {
      question: 'Comment créer une classe en JavaScript ?',
      responses: ['class Nom {}', 'Nom.class {}', 'class = Nom {}', 'Nom = class {}'],
      correctAnswer: 0,
      points: 3,
    },
    {
      question: "Qu'est-ce que l'héritage en POO JavaScript ?",
      responses: [
        "Un mécanisme qui permet à une classe d'acquérir les propriétés et les méthodes d'une autre classe",
        'Un mécanisme qui permet à une classe de donner ses propriétés et méthodes à une autre classe',
        "Un mécanisme qui permet à une classe d'utiliser les propriétés et méthodes d'une autre classe sans les acquérir",
        'Un mécanisme qui permet à une classe de cacher ses propriétés et méthodes à une autre classe',
      ],
      correctAnswer: 0,
      points: 3,
    },
    {
      question:
        "Qu'est-ce que la portée de bloc (`block scope`) et la portée de fonction (`function scope`) en JavaScript ?",
      responses: [
        "`block scope` est la portée d'une variable déclarée avec `var`, `function scope` est la portée d'une variable déclarée avec `let` ou `const`",
        "`block scope` est la portée d'une variable déclarée avec `let` ou `const`, `function scope` est la portée d'une variable déclarée avec `var`",
        "`block scope` est la portée d'une variable déclarée dans une fonction, `function scope` est la portée d'une variable déclarée dans un bloc",
        "`block scope` est la portée d'une variable déclarée dans un bloc, `function scope` est la portée d'une variable déclarée dans une fonction",
      ],
      correctAnswer: 1,
      points: 3,
    },
    {
      question:
        "Qu'est-ce que le contexte (`this`) en JavaScript et comment cela fonctionne-t-il dans les fonctions et les méthodes de classe ?",
      responses: [
        "C'est une référence à l'objet global, il fonctionne de la même manière dans les fonctions et les méthodes de classe",
        "C'est une référence à l'objet global, il fonctionne différemment dans les fonctions et les méthodes de classe",
        "C'est une référence à l'objet qui a appelé la fonction ou la méthode, il fonctionne différemment dans les fonctions et les méthodes de classe",
        "C'est une référence à l'objet qui a appelé la fonction ou la méthode, il fonctionne de la même manière dans les fonctions et les méthodes de classe",
      ],
      correctAnswer: 2,
      points: 3,
    },
    {
      question: "Qu'est-ce que le `callback hell` et comment l'éviter avec les promesses ou `async/await`?",
      responses: [
        "C'est un problème qui se produit lorsqu'on utilise trop de fonctions asynchrones, on peut l'éviter en utilisant des promesses ou `async/await`",
        "C'est un problème qui se produit lorsqu'on utilise trop de promesses, on peut l'éviter en utilisant des fonctions asynchrones ou `async/await`",
        "C'est un problème qui se produit lorsqu'on utilise trop de fonctions synchrones, on peut l'éviter en utilisant des promesses ou `async/await`",
        "C'est un problème qui se produit lorsqu'on utilise trop de callbacks, on peut l'éviter en utilisant des promesses ou `async/await`",
      ],
    },
    {
      question: 'Comment gérer les erreurs avec `try/catch` dans les fonctions asynchrones?',
      responses: [
        "En utilisant le bloc `try/catch` à l'intérieur de la fonction asynchrone",
        "En utilisant le bloc `try/catch` à l'extérieur de la fonction asynchrone",
        'En utilisant le bloc `try/catch` avant la déclaration de la fonction asynchrone',
        "En utilisant le bloc `try/catch` après l'appel à la fonction asynchrone",
      ],
      correctAnswer: 0,
      points: 3,
    },
    {
      question: "Qu'est-ce que le `Event Loop` et comment cela fonctionne-t-il dans Node.js ?",
      responses: [
        "C'est un mécanisme qui permet à JavaScript de gérer plusieurs tâches en même temps, en Node.js il fonctionne de la même manière qu'en JavaScript côté client",
        "C'est un mécanisme qui permet à JavaScript de gérer plusieurs tâches en même temps, en Node.js il fonctionne différemment qu'en JavaScript côté client",
        "C'est un mécanisme qui permet à JavaScript de gérer une seule tâche à la fois, en Node.js il fonctionne de la même manière qu'en JavaScript côté client",
        "C'est un mécanisme qui permet à JavaScript de gérer une seule tâche à la fois, en Node.js il fonctionne différemment qu'en JavaScript côté client",
      ],
      correctAnswer: 0,
      points: 3,
    },
    {
      question: "Qu'est-ce que Express.js en Node.js ?",
      responses: [
        'Un framework pour construire des applications web côté serveur',
        'Une bibliothèque pour manipuler le DOM',
        'Un langage de programmation',
        "Un environnement d'exécution JavaScript",
      ],
      correctAnswer: 0,
      points: 3,
    },
    {
      question: "Qu'est-ce que MongoDB en Node.js ?",
      responses: [
        'Une base de données NoSQL',
        'Une base de données SQL',
        'Un framework pour construire des applications web côté serveur',
        'Un langage de programmation',
      ],
      correctAnswer: 0,
      points: 3,
    },
  ],
};

/**
 * Mélange un tableau en utilisant l'algorithme de Fisher-Yates.
 * @param {Array} array - Le tableau à mélanger.
 * @returns {Array} - Le tableau mélangé.
 */
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/**
 * Affiche une question et recueille la réponse de l'utilisateur avec un minuteur de 2 minutes.
 * @param {Question} question - La question à poser à l'utilisateur.
 * @returns {Promise<number|null>} - Une promesse résolue avec l'index de la réponse de l'utilisateur (0-based) ou null en cas de dépassement du temps.
 */
function askQuestion(question) {
  const questionText = `${question.question}\n${question.responses
    .map((response, index) => `${index + 1}. ${response}`)
    .join('\n')}`;
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(null); // Résoudre la promesse avec null après 2 minutes
      },
      2 * 60 * 1000 // 2 minutes en millisecondes
    );
    let ok = true;
    do {
      let answer = parseInt(prompt(questionText));
      if (!isNaN(answer) && answer >= 1 && answer <= question.responses.length) {
        resolve(answer - 1); // Résoudre la promesse avec l'index de la réponse
      } else {
        alert('Veuillez entrer un numéro de réponse valide.');
      }
      if (answer <= 0) {
        ok = false;
      }
    } while (ok);
  });
}

/**
 * Exécute le quiz pour une certaine difficulté.
 * @param {string} difficulty - La difficulté du quiz (facile, moyen, difficile).
 * @returns {Promise<number>} - Une promesse résolue retournant le score une fois le quiz terminé.
 */
async function runQuiz(difficulty) {
  let score = 0;
  let quizQuestions = shuffle(questions[difficulty]);

  for await (const question of quizQuestions) {
    let response = await askQuestion(question);

    if (response === null) {
      alert(`Temps écoulé. La bonne réponse était: ${question.responses[question.correctAnswer]}`);
    } else if (response === question.correctAnswer) {
      alert('Bonne réponse!');
      score += question.points;
    } else {
      alert(`Mauvaise réponse. La bonne réponse était: ${question.responses[question.correctAnswer]}`);
    }
  }

  return Promise.resolve(score);
}

// Fonction principale pour lancer le quiz
function main() {
  const difficulty = prompt('Choisissez une difficulté: facile, moyen, difficile');
  runQuiz(difficulty).then((score) => alert(`Le quiz est terminé! Votre score total est: ${score}`));
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application
  main();
});
