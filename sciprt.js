let cart = [];

const cartCount = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-button");
const addButtons = document.querySelectorAll(".add-button");

// Add products to the cart
addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({ name: name, price: price });

        cartCount.textContent = cart.length;

        button.textContent = "Added ✓";

        setTimeout(function() {
            button.textContent = "Add to Cart";
        }, 800);
    });
});

// Show cart items and total
cartButton.addEventListener("click", function() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const items = cart.map(function(item) {
        return item.name + " - $" + item.price.toFixed(2);
    });

    const total = cart.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);

    alert(
        "YOUR COFFEE CART\n\n" +
        items.join("\n") +
        "\n\nTotal: $" + total.toFixed(2)
    );
});