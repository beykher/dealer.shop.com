let cart = []; // Array para almacenar los productos del carrito

// Función para agregar un producto al carrito
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    updateCart();
}

// Función para actualizar el carrito en la interfaz de usuario
function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.querySelector(".cart-count");

    // Limpiar los elementos previos del carrito
    cartItems.innerHTML = "";

    let total = 0;

    // Mostrar los productos en el carrito
    cart.forEach(item => {
        let div = document.createElement("div");
        div.textContent = `${item.name} - $${item.price} COP`;
        cartItems.appendChild(div);
        total += item.price;
    });

    // Mostrar el total y la cantidad de productos en el carrito
    cartTotal.textContent = `Total: $${total} COP`;
    cartCount.textContent = cart.length;
}

// Función para mostrar u ocultar el carrito
function toggleCart() {
    let cart = document.getElementById("cart");
    cart.style.display = cart.style.display === "block" ? "none" : "block";
}

// Función para cerrar el carrito
function closeCart() {
    let cart = document.getElementById("cart");
    cart.style.display = "none";
}

// Función para eliminar un producto del carrito
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Añadir productos al carrito al hacer clic
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        let productName = this.getAttribute("data-name");
        let productPrice = parseInt(this.getAttribute("data-price"));
        addToCart(productName, productPrice);
    });
});
