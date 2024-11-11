// Assuming the cart data is stored in the browser (can be in localStorage or sessionStorage)
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;

// Update the checkout page with cart items and total
function updateCheckoutPage() {
    const cartItemsSummary = document.getElementById('cart-items-summary');
    const totalSummary = document.getElementById('total-summary');

    cartItemsSummary.innerHTML = ''; // Clear existing items

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItemsSummary.appendChild(listItem);
        total += item.price * item.quantity;
    });

    totalSummary.textContent = `Total: $${total.toFixed(2)}`;
}

// Handle form submission (for now, just show a confirmation message)
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    alert(`Thank you for your order, ${name}!\n\nA confirmation email will be sent to ${email}.\n\nShipping to: ${address}\nPhone: ${phone}`);

    // Clear cart after order
    localStorage.removeItem('cart');
    cart = [];
    total = 0;
    updateCheckoutPage(); // Update page to reflect empty cart
});

// Initialize page with cart data
updateCheckoutPage();