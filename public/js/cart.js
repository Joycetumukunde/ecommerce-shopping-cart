// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem(`cart_${currentUser?.id}`);
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem(`cart_${currentUser?.id}`, JSON.stringify(cart));
    updateCartCount();
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
        alert(`${product.name} quantity increased to ${existingItem.quantity}`);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
        alert(`${product.name} added to cart!`);
    }
    
    saveCart(cart);
    if (typeof displayCart === 'function') {
        displayCart();
    }
    updateCartCount();
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart(cart);
        if (typeof displayCart === 'function') {
            displayCart();
        }
        updateCartCount();
    }
}

// Remove from cart
function removeFromCart(productId) {
    let cart = getCart();
    const product = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    if (typeof displayCart === 'function') {
        displayCart();
    }
    updateCartCount();
    if (product) {
        alert(`${product.name} removed from cart!`);
    }
}

// Update cart count in navbar
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountSpan = document.getElementById('cartCount');
    if (cartCountSpan) {
        cartCountSpan.textContent = count;
    }
}

// Checkout
function checkout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty! Add some products first.');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const order = {
        id: Date.now(),
        userId: currentUser.id,
        userEmail: currentUser.email,
        items: [...cart],
        total: total,
        date: new Date().toISOString(),
        status: 'Confirmed'
    };
    
    orders.push(order);
    saveData();
    
    // Clear cart
    saveCart([]);
    
    alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
    if (typeof displayCart === 'function') {
        displayCart();
    }
    if (typeof showSection === 'function') {
        showSection('orders');
    }
    if (typeof displayUserOrders === 'function') {
        displayUserOrders();
    }
    updateCartCount();
}
