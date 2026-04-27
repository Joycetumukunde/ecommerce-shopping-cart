// Check authentication
if (typeof currentUser !== 'undefined' && (!currentUser || currentUser.role !== 'user')) {
    window.location.href = 'login.html';
}

// Display products
function displayUserProducts() {
    const grid = document.getElementById('userProductsGrid');
    if (!grid) return;
    
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <p class="product-category">${product.category}</p>
                <p>${product.description}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Display cart
function displayCart() {
    const cart = getCart();
    const cartDiv = document.getElementById('cartItems');
    const totalSpan = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty. Start shopping!</p>';
        totalSpan.textContent = '0';
        return;
    }
    
    cartDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Price: $${item.price} x ${item.quantity}</p>
                <p><strong>Subtotal: $${(item.price * item.quantity).toFixed(2)}</strong></p>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span style="font-weight: bold; min-width: 30px; text-align: center;">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalSpan.textContent = total.toFixed(2);
}

function showSection(section) {
    document.querySelectorAll('.dashboard-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`${section}Section`).classList.add('active');
    
    if (section === 'products') displayUserProducts();
    if (section === 'cart') displayCart();
    if (section === 'orders') displayUserOrders();
}

function displayUserOrders() {
    const userOrders = orders.filter(order => order.userEmail === currentUser.email);
    const ordersDiv = document.getElementById('userOrders');
    
    if (userOrders.length === 0) {
        ordersDiv.innerHTML = '<p>You haven\'t placed any orders yet.</p>';
        return;
    }
    
    ordersDiv.innerHTML = userOrders.map(order => `
        <div class="order-card">
            <h4>Order #${order.id}</h4>
            <p><strong>Date:</strong> ${new Date(order.date).toLocaleString()}</p>
            <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
            <p><strong>Status:</strong> ${order.status}</p>
            <p><strong>Items:</strong></p>
            <ul>
                ${order.items.map(i => `<li>${i.name} - Quantity: ${i.quantity} - $${(i.price * i.quantity).toFixed(2)}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Initialize
if (document.getElementById('userProductsGrid')) {
    displayUserProducts();
    updateCartCount();
}
