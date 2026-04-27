// Check authentication
if (typeof currentUser !== 'undefined' && (!currentUser || currentUser.role !== 'admin')) {
    window.location.href = 'login.html';
}

// Display products
function displayAdminProducts() {
    const grid = document.getElementById('adminProductsGrid');
    if (!grid) return;
    
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <p class="product-category">${product.category}</p>
                <p>${product.description}</p>
                <button class="edit-btn" onclick="editProduct(${product.id})">Edit</button>
                <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

// Add product
document.getElementById('productForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newProduct = {
        id: Date.now(),
        name: document.getElementById('productName').value,
        price: parseFloat(document.getElementById('productPrice').value),
        category: document.getElementById('productCategory').value,
        description: document.getElementById('productDesc').value
    };
    
    products.push(newProduct);
    saveData();
    displayAdminProducts();
    closeModal();
    this.reset();
    alert('Product added successfully!');
});

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        const newName = prompt('Enter new name:', product.name);
        const newPrice = prompt('Enter new price:', product.price);
        const newCategory = prompt('Enter new category:', product.category);
        if (newName && newPrice && newCategory) {
            product.name = newName;
            product.price = parseFloat(newPrice);
            product.category = newCategory;
            saveData();
            displayAdminProducts();
            alert('Product updated successfully!');
        }
    }
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== id);
        saveData();
        displayAdminProducts();
        alert('Product deleted successfully!');
    }
}

// Display orders
function displayOrders() {
    const ordersDiv = document.getElementById('ordersList');
    if (!ordersDiv) return;
    
    if (orders.length === 0) {
        ordersDiv.innerHTML = '<p>No orders yet.</p>';
        return;
    }
    
    ordersDiv.innerHTML = orders.map(order => `
        <div class="order-card">
            <h4>Order #${order.id}</h4>
            <p><strong>User:</strong> ${order.userEmail}</p>
            <p><strong>Date:</strong> ${new Date(order.date).toLocaleString()}</p>
            <p><strong>Total:</strong> $${order.total}</p>
            <p><strong>Items:</strong> ${order.items.map(i => `${i.name} (x${i.quantity})`).join(', ')}</p>
            <p><strong>Status:</strong> ${order.status}</p>
        </div>
    `).join('');
}

// Display users
function displayUsers() {
    const usersDiv = document.getElementById('usersList');
    if (!usersDiv) return;
    
    const regularUsers = users.filter(u => u.role === 'user');
    
    if (regularUsers.length === 0) {
        usersDiv.innerHTML = '<p>No registered users yet.</p>';
        return;
    }
    
    usersDiv.innerHTML = regularUsers.map(user => `
        <div class="user-card">
            <h4>${user.name}</h4>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>User ID:</strong> ${user.id}</p>
        </div>
    `).join('');
}

function showSection(section) {
    document.querySelectorAll('.dashboard-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`${section}Section`).classList.add('active');
    
    if (section === 'products') displayAdminProducts();
    if (section === 'orders') displayOrders();
    if (section === 'users') displayUsers();
}

function showAddProductForm() {
    document.getElementById('addProductForm').style.display = 'flex';
}

function closeModal() {
    document.getElementById('addProductForm').style.display = 'none';
}

// Initialize
if (document.getElementById('adminProductsGrid')) {
    displayAdminProducts();
}
