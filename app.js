// app.js
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/**
 * Hole Produkte aus Firestore
 */
async function getProducts() {
  const snapshot = await db.collection("products").get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

/**
 * Warenkorb aus LocalStorage lesen
 */
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

/**
 * Produkt zum Warenkorb hinzufügen
 */
function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

/**
 * Warenkorb leeren
 */
function clearCart() {
  localStorage.removeItem("cart");
}

/**
 * Gesamtsumme berechnen
 */
function calculateTotal() {
  return getCart().reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
}
