/**
 * Représente un objet contenant différents scénarios de programmation pour différents niveaux d'expérience.
 * @typedef {Object} Scenarios
 * @property {Array<Object>} rookie - Scénarios pour les débutants.
 * @property {Array<Object>} aspirant - Scénarios pour les aspirants.
 * @property {Array<Object>} erudit - Scénarios pour les érudits.
 * @property {Array<Object>} elite - Scénarios pour les élites.
 * @property {Array<Object>} titan - Scénarios pour les titans.
 */

/**
 * Objet contenant des scénarios de programmation pour différents niveaux d'expérience.
 * @type {Scenarios}
 */
const scenarios = {
  rookie: [
    {
      title: 'Créer une application qui simule un générateur de noms pour des personnages de jeux vidéo.',
      concepts: 'Variables, fonctions',
      difficulty: 2,
      rules: [
        "L'utilisateur entre son prénom, son nom et son personnage préféré",
        "L'application génère un nom de personnage en divisant chaque entrée (prénom, nom, personnage préféré) en deux et en choisissant aléatoirement une des deux moitiés de chaque entrée pour créer un nom unique.",
      ],
      bonus: {
        difficulty: 2,
        rules: ['Ajouter un préfixe ou un suffixe aléatoire au nom du personnage'],
      },
    },
    {
      title: 'Créer un mini-jeu du "Juste prix" où l\'ordinateur doit deviner un nombre. (dichotomie).',
      concepts: 'Variables, fonctions, boucles, conditions',
      difficulty: 2,
      rules: [
        "L'utilisateur choisi un nombre aléatoire entre 1 et 500.",
        'L’ordinateur a 10 tentatives pour deviner le nombre.',
        "Après chaque tentative, l'utilisateur indique si le nombre proposé par l’ordinateur est trop grand, trop petit ou correct.",
      ],
      bonus: {
        difficulty: 2,
        rules: [
          'Au lieu de simplement appliquer la stratégie de base qui est la dichotomie, l’ordinateur pourrait choisir un point\n' +
            'aléatoire dans l’intervalle pour sa prochaine tentative. Cela rendrait le jeu moins prévisible et pourrait\n' +
            'potentiellement rendre le processus de devinette plus rapide ou plus lent, selon la chance.',
        ],
      },
    },
    {
      title:
        'Créer une application qui calcule le nombre de battements de cœur qu’une personne a eu depuis sa naissance.',
      concepts: 'Variables, fonctions, dates',
      difficulty: 2,
      rules: ['L’utilisateur entre sa date de naissance.', 'En se basant sur une moyenne de 80 battements par minute.'],
      bonus: {
        difficulty: 3,
        rules: [
          'Ajouter un champ pour que l’utilisateur puisse entrer son genre (Homme/Femme) et ajuster le nombre de battements en conséquence. (75 pour les femmes et 80 pour les hommes).',
          "Calculer l'age de l'utilisateur en fonction de sa date de naissance et ajuster le nombre de battements (-2 tous les 10 ans).",
          "Ajouter un champ pour que l'utilisateur puisse entrer son niveau d'activité physique (Faible/Moyen/Elevé) et ajuster le nombre de battements en conséquence (-10 pour les faibles, +5 pour les moyens et +10 pour les élevés).",
        ],
      },
    },
    {
      title: 'Créer une application qui simule une machine à sous.',
      concepts: 'Variables, fonctions, conditions, tableaux, objet',
      difficulty: 1,
      rules: [
        'L’utilisateur “tire” le levier, et l’application affiche trois symboles aléatoires parmi : "🍎", "🍊", "🍒", "🍓", "🍇"',
        'Si les trois symboles sont identiques, l’utilisateur gagne.',
      ],
      bonus: {
        difficulty: 3,
        rules: [
          'Au départ le joueur à 10 jetons, chaque partie coûte 1 jeton.',
          'Si les trois symboles sont identiques, le joueur gagne 10 jetons.',
          'Si les symboles sont identiques à une de ces combinaisons prédéfinie :',
          '"🍒", "🍎", "🍊", le joueur gagne 2 jetons.',
          '"🍎", "🍎", "🍒", le joueur gagne 5 jetons.',
          '"🍇", "🍒", "🍓", le joueur gagne 3 jetons.',
          '"🍎", "🍇", "🍎", le joueur gagne 5 jetons.',
          '"🍎", "🍊", "🍊", le joueur gagne 3 jetons.',
          'Si deux symboles sont identiques, le joueur gagne 1 jeton.',
          "Si le joueur n'a plus de jetons, il ne peut plus jouer.",
          'Afficher le nombre de jetons restants à chaque partie.',
        ],
      },
    },
    {
      title: 'Créer une application qui simule un décodeur de messages secrets.',
      concepts: 'Variables, fonctions, conditions, chaines de caractères',
      difficulty: 2,
      rules: [
        'L’utilisateur entre un message et un décalage (pour un chiffrement de César ou également appelé Rot13)',
        'L’application affiche le message décodé.',
        'L’utilisateur entre un message codé.',
        "L'application affiche le message décodé.",
        'Utilisez seulement des lettres minuscules, les autres caractères doivent être ignorés.',
      ],
      bonus: {
        difficulty: 3,
        rules: [
          'Etendre le chiffrement pour inclure non seulement les lettres minuscules, mais aussi les majuscules, les chiffres et les symboles spéciaux.',
          'Au lieu d’utiliser un simple décalage, permettre à l’utilisateur d’entrer une clé de chiffrement. Chaque lettre de la clé déterminerait le décalage pour un caractère du message.',
        ],
      },
    },
    {
      title: 'Créer une application qui convertit une phrase en “langage Leet” (1337)',
      concepts: 'Variables, fonctions, conditions, chaines de caractères, objets',
      difficulty: 2,
      rules: [
        'L’utilisateur entre une phrase en texte clair.',
        'L’application convertit la phrase en langage Leet en suivant des règles de conversion prédéfinies cf : https://en.wikipedia.org/wiki/Leet',
        'L’application affiche la phrase convertie à l’utilisateur.',
        'Utilisez seulement des lettres minuscules, les chiffres, les autres caractères doivent être ignorés.',
      ],
      bonus: {
        difficulty: 3,
        rules: ['l’utilisateur peut choisir s’il veut coder ou décoder un message en langage Leet'],
      },
    },
    {
      title: 'Créer une application qui calcule la moyenne d’une liste de notes.',
      concepts: 'Variables, fonctions, conditions, tableau',
      difficulty: 3,
      rules: [
        "L'utilisateur donne un nombre d'élèves compris entre 7 et 31. (_Bonus : Générer des noms d'élève_)",
        "L'utilisateur donne un nombre de notes par élève compris entre 5 et 12.",
        "L'application génère aléatoirement pour chaques élèves les notes comprises entre 0 et 20 (_Bonus : Générer des noms de matières_)",
        "L'application devra afficher un tableau avec les notes de chaques élèves.",
        "L'application calcul le moyenne de la classe par matière et devra l'afficher.",
        "L'application calcul le moyenne de la classe et devra l'afficher.",
        "L’application calcule la moyenne des notes de chaque élève et devra l'afficher.",
      ],
      bonus: {
        difficulty: 3,
        rules: [
          'Pour chaque élève l\'application donnera une appréciation de votre choix (par exemple : "Excellent", "Très bien", "Bien", "Peut mieux faire", "Insuffisant", "Très insuffisant"',
          'Une appréciation entre 0 et 5 compris, une entre 5 non compris et 10 non compris, une entre 10 non compris et 12, une entre 12 non compris et 15 non compris une entre 15 non compris et 18 non compris et une pour le reste des notes.',
          'Permettre à l’utilisateur de saisir les noms des matières.',
          'Pour rendre les résultats plus lisibles, afficher les notes et les moyennes dans un format tabulaire ou sous forme de bulletin scolaire.',
          'Trier les élèves en fonction de leur moyenne, du plus performants à ceux qui ont besoin d’amélioration.',
        ],
      },
    },
    {
      title: 'Créer une application qui simule un distributeur automatique.',
      concepts: 'Variables, fonctions, conditions, boucles, objets',
      difficulty: 3,
      rules: [
        'L’utilisateur choisit un produit et la quantité',
        'L’utilisateur ne pourra pas choisir une quantité supérieure au stock disponible.',
        'L’utilisateur insère de l’argent (billets de 100, 50, 20, 10, pièces de 5, 2, 1 et 0.50, 0.20, 0.10, 0.05, 0.01)',
        'L’application devra mentionner si le montant n’est pas suffisant.',
        'L’application donne le produit et rend la monnaie.',
      ],
      bonus: {
        difficulty: 3,
        rules: ['L’utilisateur peut choisir plusieurs produits'],
      },
    },
    {
      title: 'Créer un jeu de course de voitures. Sur à la ligne de départ, il y a 5 voitures minimum.',
      concepts: 'Variables, fonctions, conditions, tableau, objets',
      difficulty: 4,
      rules: [
        'L’application génère pour chaque voiture une vitesse minimale et maximale aléatoire comprise entre 80 et 220 km/h.',
        'La course se déroule sur un nombre aléatoire de tours compris entre 5 et 11.',
        'La distance d’un tour de circuit est également déterminée aléatoirement entre 5 et 15 km.',
        'Une itération sera égale à 3 minutes',
        'A chaque itération, chaque voiture peut accélérer ou décélérer d’un nombre aléatoire compris entre 2 et 15 km/h. La distance parcourue par la voiture est déterminée en fonction de sa vitesse à ce moment précis. Cependant, la vitesse de la voiture ne peut pas dépasser sa vitesse maximale ni descendre en dessous de sa vitesse minimale.',
        'Les itérations continuent jusqu’à ce que toutes les voitures aient terminé la course.',
        'À la fin de la course, l’application affiche l’ordre d’arrivée des voitures et la vitesse moyenne par tour pour chaque voiture.',
      ],
      bonus: {
        difficulty: 4,
        rules: [
          'L’utilisateur peut choisir le nombre de voitures participant à la course.',
          'L’utilisateur peut voir le classement des voitures après chaque tour.',
          'L’utilisateur peut voir le temps de chaque voiture après chaque tour.',
          'L’utilisateur peut voir le temps total de chaque voiture et la distance totale parcourue.',
        ],
      },
    },
    {
      title: 'Créer une application de type "Quizz"',
      concepts: 'Variables, fonctions, conditions, tableau, objets',
      difficulty: 4,
      rules: [
        'Chaque question du quiz est un objet avec des propriétés : "question, responses et correctAnswer".',
        'L’application affiche chaque question à l’utilisateur, recueille sa réponse et affiche son score total à la fin du quiz.',
        'L’utilisateur pourra revoir toutes les questions et ses réponses à la fin du quiz.',
      ],
      bonus: {
        difficulty: 5,
        rules: [
          'Ajouter un timer pour chaque question. (_BONUS + Utiliser les promesses_)',
          'Chaque question aura un nombre de points différent en fonction de sa difficulté.',
          'Ajouter une option pour que l’utilisateur puisse choisir la difficulté du quiz (facile, moyen, difficile), ce qui affecterait le nombre de questions et/ou leur difficulté.',
          'Chaque niveau de difficulté pourra avoir un nombre de questions différent (minimum 5).',
          'Mélanger les questions avec l\'algorithme de "Fisher-Yates".',
        ],
      },
    },
  ],
  aspirant: [],
  erudit: [],
  elite: [],
  titan: [],
};

/* Elements HTML */
const pages = document.querySelectorAll('.page');
const scenarioSections = document.querySelectorAll('.scenario-cards');
const btnRookie = document.querySelector('#btn-gotoRookie');
const btnBack = document.querySelector('#btn-back');
const btnBackContainer = document.querySelector('.back-container');

/**
 * Affiche le bouton de retour.
 */
const showBackButton = () => {
  btnBackContainer.classList.add('isVisible');
};

/**
 * Masque le bouton de retour.
 */
const hideBackButton = () => {
  btnBackContainer.classList.remove('isVisible');
};

/**
 * Alterne entre les pages visibles.
 * @param {number} pageIndex - L'index de la page à afficher.
 */
const togglePage = (pageIndex) => {
  for (const page of pages) {
    page.classList.remove('isVisible');
  }
  pages[pageIndex].classList.add('isVisible');
};

/**
 * Navigue vers la page d'accueil.
 */
const gotoToHome = () => {
  togglePage(0);
};

/**
 * Navigue vers la page des débutants.
 */
const gotoToRookie = () => {
  togglePage(1);
};

/**
 * Crée une "notation par étoiles" en fonction du niveau de difficulté donné.
 * @param {number} difficulty - Niveau de difficulté du scénario.
 * @returns {string} - Chaîne représentant la notation.
 */
const createDifficultyStars = (difficulty) => {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= difficulty) {
      stars += '⭐';
    } else {
      stars += '☆';
    }
  }

  return stars;
};

/**
 * Crée des éléments de liste HTML à partir d'un tableau de règles.
 * @param {Array<string>} rules - Tableau de règles à afficher.
 * @returns {string} - Chaîne représentant les éléments de liste HTML.
 */
const createRulesItems = (rules) => {
  let rulesList = '';
  for (const rule of rules) {
    rulesList += `<li>${rule}</li>`;
  }
  return rulesList;
};

/**
 * Crée une carte de scénario HTML à partir des informations fournies.
 * @param {string} level - Niveau du scénario (rookie, aspirant, etc.).
 * @param {Object} infos - Informations sur le scénario.
 * @param {number} index - Index du scénario dans la liste.
 * @returns {string} - Chaîne représentant la carte de scénario HTML.
 */
const createScenarioCard = (level, infos, index) => {
  const scenarioIndex = String(index).padStart(3, '0');
  const baseDifficulty = createDifficultyStars(infos.difficulty);
  const bonusDifficulty = createDifficultyStars(infos.bonus.difficulty);
  return `<article class="scenario-card">
              <div class="scenario-card__front">
                <header class="scenario-card__header">
                  <h3 class="scenario-card__title">Scenario ${scenarioIndex}</h3>
                  <span>[${baseDifficulty}]</span>
                </header>
                <hr class="scenario-card__divider">
                <div class="scenario-card__content">
                  <p><b>Concepts :&nbsp;</b><em>${infos.concepts}</em></p>
                  <p class="scenario-card__todo">${infos.title}</p>
                </div>
              </div>
              <div class="scenario-card__back">                
                  <div class="tabset">
                    <input type="radio" name="tabset${scenarioIndex}" id="tab1s${scenarioIndex}" aria-controls="base${scenarioIndex}" checked>
                    <label for="tab1s${scenarioIndex}">Base</label>
                    <input type="radio" name="tabset${scenarioIndex}" id="tab2s${scenarioIndex}" aria-controls="bonus${scenarioIndex}">
                    <label for="tab2s${scenarioIndex}">Bonus</label>
                    <div class="tab-panels">
                      <section id="base${scenarioIndex}" class="tab-panel">
                        <header class="scenario-card__header">
                          <h3 class="scenario-card__title">Base</h3>
                          <span>[${baseDifficulty}]</span>
                        </header>
                        <hr class="scenario-card__divider">
                        <div class="scenario-card__content">
                          <h4>Règles</h4>                        
                          <ol class="scenario-card__rules">
                            ${createRulesItems(infos.rules)}
                          </ol>
                        </div>
                        <hr class="scenario-card__divider">
                        <footer class="scenario-card__footer">
                          <a class="btn-link" href="src/${level}/scenario${scenarioIndex}/index.html" target="_blank">Executer</a>
                          <a class="btn-link" href="src/${level}/scenario${scenarioIndex}/solution/index.html" target="_blank">Executer la solution</a>                          
                        </footer>
                      </section>
                      <section id="bonus${scenarioIndex}" class="tab-panel">
                        <header class="scenario-card__header">
                          <h3 class="scenario-card__title">Bonus</h3>
                          <span>[${bonusDifficulty}]</span>
                        </header>
                        <hr class="scenario-card__divider">
                        <div class="scenario-card__content">
                          <h4>Règles</h4>
                          <ol class="scenario-card__rules">
                            ${createRulesItems(infos.bonus.rules)}
                          </ol>
                        </div>
                        <hr class="scenario-card__divider">
                        <footer class="scenario-card__footer">                          
                          <a class="btn-link" href="src/${level}/scenario${scenarioIndex}/solution/bonus.html" target="_blank">Executer la solution Bonus</a>
                        </footer>
                      </section>
                    </div>
                </div>
              </div>
            </article>`;
};

/**
 * Crée des cartes de scénario pour le niveau donné.
 * @param {string} level - Niveau du scénario (rookie, aspirant, etc.).
 * @returns {string} - Chaîne représentant les cartes de scénario HTML.
 */
const createScenarioCards = (level) => {
  const scenariosList = scenarios[level];
  if (!scenariosList || (scenariosList && scenariosList.length === 0)) {
    return '<p>Aucun scénario disponible pour le moment</p>';
  }
  let cards = '';
  for (let i = 0; i < scenariosList.length; i++) {
    cards += createScenarioCard(level, scenariosList[i], i + 1);
  }
  return cards;
};

/**
 * Fonction exécutée lorsque le DOM est entièrement chargé.
 */
document.addEventListener('DOMContentLoaded', () => {
  for (const scenarioSection of scenarioSections) {
    /* BE CAREFUL DO NOT USE INNERHTML IN PRODUCTION, POSSIBLE XSS ATTACK */
    const id = scenarioSection.getAttribute('id');
    scenarioSection.innerHTML = createScenarioCards(id);
  }

  btnRookie.addEventListener('click', () => {
    showBackButton();
    gotoToRookie();
  });

  btnBack.addEventListener('click', () => {
    hideBackButton();
    gotoToHome();
  });
});
