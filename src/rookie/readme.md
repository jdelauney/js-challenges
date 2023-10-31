# Challenges Javascript mode "Rookie"

---

## Scénario 1 [⭐⭐☆☆☆]

**Concepts abordés :** Variables, fonctions

**Créer une application qui simule un générateur de noms pour des personnages de jeux vidéo.**

- L’utilisateur entre son prénom, son nom et son personnage préféré
- L’application génère un nom de personnage en divisant chaque entrée (prénom, nom, personnage préféré) en deux et en
  choisissant aléatoirement une des deux moitiés de chaque entrée pour créer un nom unique.

### Bonus : [⭐⭐☆☆☆]

- Ajouter un préfixe ou un suffixe aléatoire au nom du personnage

---

## Scénario 2 [⭐☆☆☆☆]

**Concepts abordés :** Variables, fonctions, boucles, conditions

**Créer un mini-jeu du "Juste prix" où l'ordinateur doit deviner un nombre. (dichotomie).**

- L'utilisateur choisi un nombre aléatoire entre 1 et 500.
- L’ordinateur a 10 tentatives pour deviner le nombre.
- Après chaque tentative, l'utilisateur indique si le nombre proposé par l’ordinateur est trop grand, trop petit ou correct

### Bonus [⭐⭐☆☆☆]

Au lieu de simplement appliquer la stratégie de base qui est la dichotomie, l’ordinateur pourrait choisir un point
aléatoire dans l’intervalle pour sa prochaine tentative. Cela rendrait le jeu moins prévisible et pourrait
potentiellement rendre le processus de devinette plus rapide ou plus lent, selon la chance.

---

## Scénario 3 [⭐⭐☆☆☆]

**Concepts abordés :** Variables, fonctions, dates

**Créer une application qui calcule le nombre de battements de cœur qu’une personne a eu depuis sa naissance.**

- L’utilisateur entre sa date de naissance.
- En se basant sur une moyenne de 80 battements par minute.

### Bonus [⭐⭐⭐☆☆]

- Ajouter un champ pour que l’utilisateur puisse entrer son genre (Homme/Femme) et ajuster le nombre de battements en
  conséquence (75 pour les femmes et 80 pour les hommes).
- Calculer l'age de l'utilisateur en fonction de sa date de naissance et ajuster le nombre de battements (-2 tous les 10 ans).
- Ajouter un champ pour que l'utilisateur puisse entrer son niveau d'activité physique (Faible/Moyen/Elevé) et ajuster
  le nombre de battements en conséquence (-10 pour les faibles, +5 pour les moyens et +10 pour les élevés).

---

## Scénario 4 [⭐☆☆☆☆]

**Concepts abordés :** Variables, fonctions, conditions, tableaux, objet

**Créer une application qui simule une machine à sous.**

- L’utilisateur “tire” le levier, et l’application affiche trois symboles aléatoires parmi : "🍎", "🍊", "🍒", "🍓", "🍇"
- Si les trois symboles sont identiques, l’utilisateur gagne.

### Bonus [⭐⭐⭐☆☆]

- Au départ le joueur à 10 jetons, chaque partie coûte 1 jeton.
- Si les trois symboles sont identiques, le joueur gagne 10 jetons.
- Si les symboles sont identiques à une de ces combinaisons prédéfinie :
  - "🍒", "🍎", "🍊", le joueur gagne 2 jetons.
  - "🍎", "🍎", "🍒", le joueur gagne 5 jetons.
  - "🍇", "🍒", "🍓", le joueur gagne 3 jetons.
  - "🍎", "🍇", "🍎", le joueur gagne 5 jetons.
  - "🍎", "🍊", "🍊", le joueur gagne 3 jetons.
- Si deux symboles sont identiques, le joueur gagne 1 jeton.
- Si le joueur n'a plus de jetons, il ne peut plus jouer.
- Afficher le nombre de jetons restants à chaque partie.

---

## Scénario 5 [⭐⭐☆☆☆]

**Concepts abordés :** Variables, fonctions, conditions, chaines de caractères

**Créer une application qui simule un décodeur de messages secrets.**

- L’utilisateur entre un message et un décalage (pour un chiffrement de César ou également appelé Rot13)
- L’application affiche le message décodé.
- L’utilisateur entre un message codé.
- L'application affiche le message décodé.
  _Note_ : Utilisez seulement des lettres minuscules, les autres caractères doivent être ignorés.

### Bonus [⭐⭐⭐☆☆]

- Etendre le chiffrement pour inclure non seulement les lettres minuscules, mais aussi les majuscules, les chiffres et les symboles spéciaux.
- Au lieu d’utiliser un simple décalage, permettre à l’utilisateur d’entrer une clé de chiffrement. Chaque lettre de la clé déterminerait le décalage pour un caractère du message.

---

## Scénario 6 [⭐⭐☆☆☆]

**Concepts abordés :** Variables, fonctions, conditions, chaines de caractères, objets

**Créer une application qui convertit une phrase en “langage Leet” (1337)**

- L’utilisateur entre une phrase en texte clair.
- L’application convertit la phrase en langage Leet en suivant des règles de conversion prédéfinies cf : https://en.wikipedia.org/wiki/Leet
- L’application affiche la phrase convertie à l’utilisateur.
  _Note_ : Utilisez seulement des lettres minuscules, les chiffres, les autres caractères doivent être ignorés.

### Bonus [⭐⭐⭐☆☆]

- l’utilisateur peut choisir s’il veut coder ou décoder un message en langage Leet.

---

**Scénario 7** [⭐⭐⭐☆☆]
**Concepts abordés :** Variables, fonctions, conditions, tableau

**Créer une application qui calcule la moyenne d’une liste de notes.**

- L'utilisateur donne un nombre d'élèves compris entre 7 et 31. (_Bonus : Générer des noms d'élève_)
- L'utilisateur donne un nombre de notes par élève compris entre 5 et 12.
- L'application génère aléatoirement pour chaques élèves les notes comprises entre 0 et 20 (_Bonus : Générer des noms de matières_)
- L'application devra afficher un tableau avec les notes de chaques élèves
- L'application calcul le moyenne de la classe par matière et devra l'afficher
- L'application calcul le moyenne de la classe et devra l'afficher
- L’application calcule la moyenne des notes de chaque élève et devra l'afficher

### Bonus [⭐⭐⭐⭐☆]

- Pour chaque élève l'application donnera une appréciation de votre choix (par exemple : "Excellent", "Très bien", "Bien", "Peut mieux faire", "Insuffisant", "Très insuffisant"
  - Une appréciation entre 0 et 5 compris, une entre 5 non compris et 10 non compris, une entre 10 non compris et 12, une entre 12 non compris et 15 non compris une entre 15 non compris et 18 non compris et une pour le reste des notes.
- Permettre à l’utilisateur de saisir les noms des matières.
- Pour rendre les résultats plus lisibles, afficher les notes et les moyennes dans un format tabulaire ou sous forme de bulletin scolaire.
- Trier les élèves en fonction de leur moyenne, du plus performants à ceux qui ont besoin d’amélioration.

---

## Scénario 8 [⭐⭐⭐☆☆]

**Concepts abordés : Variables, fonctions, conditions, boucles, objets**

**Créer une application qui simule un distributeur automatique.**

- L’utilisateur choisit un produit et la quantité
- L’utilisateur ne pourra pas choisir une quantité supérieure au stock disponible
- L’utilisateur insère de l’argent (billets de 100, 50, 20, 10, pièces de 5, 2, 1 et 0.50, 0.20, 0.10, 0.05, 0.01)
- L’application devra mentionner si le montant n’est pas suffisant
- L’application donne le produit et rend la monnaie

### Bonus [⭐⭐⭐☆ ☆]

- L’utilisateur peut choisir plusieurs produits

---

## Scénario 9 [⭐⭐⭐⭐☆]

**Concepts abordés :** Variables, fonctions, conditions, tableau, objets

**Créer un jeu de course de voitures. Sur à la ligne de départ, il y a 5 voitures minimum.**

- L’application génère pour chaque voiture une vitesse minimale et maximale aléatoire comprise entre 80 et 220 km/h.
- La course se déroule sur un nombre aléatoire de tours compris entre 5 et 11.
- La distance d’un tour de circuit est également déterminée aléatoirement entre 5 et 15 km.
- Une itération sera égal à 3 minutes
- A chaque itération, chaque voiture peut accélérer ou décélérer d’un nombre aléatoire compris entre 2 et 15 km/h. La distance parcourue par la voiture est déterminée en fonction de sa vitesse à ce moment précis. Cependant, la vitesse de la voiture ne peut pas dépasser sa vitesse maximale ni descendre en dessous de sa vitesse minimale.
- Les itérations continuent jusqu’à ce que toutes les voitures aient terminé la course.
- À la fin de la course, l’application affiche l’ordre d’arrivée des voitures et la vitesse moyenne par tour pour chaque voiture.

### Bonus [⭐⭐⭐⭐☆]

- L’utilisateur peut choisir le nombre de voitures participant à la course.
- L’utilisateur peut voir le classement des voitures après chaque tour.
- L'utilisateur peut voir le temps de chaque voiture après chaque tour.
- L’utilisateur peut voir le temps total de chaque voiture et la distance totale parcourue.

---

## Scénario 10 [⭐⭐⭐⭐☆]

**Concepts abordés :** Variables, fonctions, conditions, tableau, objets

**Créer une application de type "Quizz"**

- Chaque question du quiz est un objet avec des propriétés : "question, responses et correctAnswer".
- L’application affiche chaque question à l’utilisateur, recueille sa réponse et affiche son score total à la fin du quiz.
- L’utilisateur pourra revoir toutes les questions et ses réponses à la fin du quiz.

### Bonus [⭐⭐⭐⭐⭐]

- Ajouter un timer pour chaque question. (_BONUS + Utiliser les promesses_)
- Chaque question aura un nombre de points différent en fonction de sa difficulté.
- Ajouter une option pour que l’utilisateur puisse choisir la difficulté du quiz (facile, moyen, difficile), ce qui affecterait le nombre de questions et/ou leur difficulté.
- Chaque niveau de difficulté pourra avoir un nombre de questions différent (minimum 5).
- Mélanger les questions avec l'algorithme de "Fisher-Yates".
