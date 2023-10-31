/**
 * Produits disponibles dans le distributeur
 * @type {Array<{name: string, price: number, quantity: number}>}
 */
const products = [
  { name: 'Coca-Cola', price: 1.5, quantity: 10 },
  { name: 'Thé froid', price: 1.45, quantity: 8 },
  { name: 'Chips', price: 2.0, quantity: 5 },
  { name: 'Chocolat', price: 1.75, quantity: 7 },
];

/**
 * Valeurs des billets et des pièces acceptées par le distributeur
 * @type {number[]}
 */
const moneyValues = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.01];

/**
 * Fonction pour afficher les produits disponibles
 */
function displayProducts() {
  const productInfo = products.map((product, index) => {
    return `${index + 1}. ${product.name} - Prix : ${product.price.toFixed(2)}€ - Quantité disponible : 
    ${product.quantity}`;
  });

  alert(productInfo.join('\n'));
}

/**
 * Fonction pour obtenir le choix du produit de l'utilisateur
 * @returns {number} - L'index du produit choisi dans le tableau de produits
 */
function getProductChoice() {
  let choice;

  do {
    choice = parseInt(prompt('Entrez le numéro du produit que vous souhaitez acheter (ou -1 pour terminer) :'));
  } while (isNaN(choice) || (choice !== -1 && (choice < 1 || choice > products.length)));

  return choice - 1; // Retourne l'index du produit dans le tableau
}

/**
 * Fonction pour obtenir la quantité que l'utilisateur souhaite acheter
 * @param {{name: string, price: number, quantity: number}} product - Le produit choisi
 * @returns {number} - La quantité que l'utilisateur souhaite acheter
 */
function getQuantity(product) {
  let quantity;

  do {
    quantity = parseInt(prompt(`Combien de ${product.name} souhaitez-vous acheter ?`));
  } while (isNaN(quantity) || quantity < 1 || quantity > product.quantity);

  return quantity;
}

/**
 * Fonction pour obtenir l'argent inséré par l'utilisateur
 * @param {number} amount - Le montant à payer
 * @returns {number} - L'argent inséré par l'utilisateur
 */
function getMoney(amount) {
  let money = 0;

  do {
    const billOrCoin = parseFloat(prompt('Insérez un billet ou une pièce :'));

    if (moneyValues.includes(billOrCoin)) {
      money += billOrCoin;
      alert(`Vous avez inséré : ${money.toFixed(2)}€`);
    } else {
      alert("Désolé, nous n'acceptons pas cette valeur.");
    }
  } while (money < amount);

  return money;
}

/**
 * Fonction pour rendre la monnaie
 * @param {number} money - L'argent inséré par l'utilisateur
 * @param {number} amount - Le montant à payer
 */
function giveChange(money, amount) {
  let change = money - amount;

  if (change > 0) {
    let changeDetails = [];

    for (let value of moneyValues.sort((a, b) => b - a)) {
      const count = Math.floor(change / value);

      if (count > 0) {
        change -= count * value;
        changeDetails.push(`${count} x ${value.toFixed(2)}€`);
      }
    }

    alert(`Voici votre monnaie : \n${changeDetails.join('\n')}`);
  }
}

/**
 * Fonction principale pour lancer l'application
 */
function main() {
  displayProducts();
  const cart = [];
  let totalAmount = 0;
  let ok = true;
  while (ok) {
    const choice = getProductChoice();
    if (choice === -1) {
      ok = false; // L'utilisateur a terminé ses achats
    }

    if (ok) {
      const quantity = getQuantity(products[choice]);
      cart.push({ product: products[choice], quantity: quantity });
      totalAmount += products[choice].price * quantity;

      products[choice].quantity -= quantity; // Mettre à jour la quantité en stock
    }
  }

  if (cart.length > 0) {
    // Si l'utilisateur a choisi au moins un produit
    const money = getMoney(totalAmount);
    giveChange(money, totalAmount);

    alert(
      `Merci pour votre achat ! Voici le détail de votre commande :\n${cart
        .map((item) => `${item.quantity} x ${item.product.name}`)
        .join('\n')}`
    );
  }
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Lance l'application
  main();
});
