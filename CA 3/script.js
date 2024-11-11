// Add product to the shopping cart
let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;

    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Handle form submission (just show an alert for now)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});