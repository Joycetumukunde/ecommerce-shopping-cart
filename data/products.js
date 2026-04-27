// Products Data
let products = [
    { id: 1, name: "Gaming Laptop", price: 999, category: "Electronics", description: "High-performance gaming laptop" },
    { id: 2, name: "Smartphone", price: 699, category: "Electronics", description: "Latest 5G smartphone" },
    { id: 3, name: "Wireless Headphones", price: 199, category: "Accessories", description: "Noise-cancelling headphones" },
    { id: 4, name: "Smart Watch", price: 249, category: "Accessories", description: "Fitness tracker" },
    { id: 5, name: "Backpack", price: 49, category: "Fashion", description: "Durable backpack" },
    { id: 6, name: "Coffee Maker", price: 89, category: "Home", description: "Coffee maker" }
];

// Orders Storage
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Users Data (for login)
let users = [
    { id: 1, email: "admin@shoppinghub.com", password: "admin123", role: "admin", name: "Admin User" },
    { id: 2, email: "user@shoppinghub.com", password: "user123", role: "user", name: "Regular User" }
];

// Current User
let currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;

// Save to localStorage
function saveData() {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('users', JSON.stringify(users));
}

// Load from localStorage
function loadData() {
    const savedProducts = localStorage.getItem('products');
    const savedOrders = localStorage.getItem('orders');
    const savedUsers = localStorage.getItem('users');
    
    if (savedProducts) products = JSON.parse(savedProducts);
    if (savedOrders) orders = JSON.parse(savedOrders);
    if (savedUsers) users = JSON.parse(savedUsers);
}

loadData();
