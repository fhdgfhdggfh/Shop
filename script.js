// Beispiel für das Hinzufügen von Produkten zum Warenkorb
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(cart);
}

// Beispiel für das Entfernen von Produkten
function removeFromCart(product) {
    cart = cart.filter(item => item !== product);
    console.log(cart);
}
