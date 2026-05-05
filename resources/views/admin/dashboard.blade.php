<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - ShoppingHub</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <h2>ShoppingHub - Admin Panel</h2>
            </div>
            <ul class="nav-links">
                <li><a href="#" onclick="showSection('products')">Products</a></li>
                <li><a href="#" onclick="showSection('orders')">Orders</a></li>
                <li><a href="#" onclick="showSection('users')">Users</a></li>
                <li>
                    <form method="POST" action="{{ route('logout') }}" style="display:inline">
                        @csrf
                        <button type="submit" style="background:none;border:none;color:white;cursor:pointer;font-family:inherit;font-size:1rem;padding:0;">Logout</button>
                    </form>
                </li>
            </ul>
        </div>
    </nav>

    <div class="dashboard-container">
        <div id="productsSection" class="dashboard-section active">
            <h2>Manage Products</h2>
            <button class="add-btn" onclick="showAddProductForm()">+ Add New Product</button>
            
            <div id="addProductForm" class="modal" style="display:none">
                <div class="modal-content">
                    <span class="close" onclick="closeModal()">&times;</span>
                    <h3>Add New Product</h3>
                    <form id="productForm">
                        <input type="text" id="productName" placeholder="Product Name" required>
                        <input type="number" id="productPrice" placeholder="Price" required>
                        <input type="text" id="productCategory" placeholder="Category" required>
                        <textarea id="productDesc" placeholder="Description" rows="3"></textarea>
                        <button type="submit">Add Product</button>
                    </form>
                </div>
            </div>

            <div class="products-grid" id="adminProductsGrid"></div>
        </div>

        <div id="ordersSection" class="dashboard-section">
            <h2>All Orders</h2>
            <div class="orders-list" id="ordersList"></div>
        </div>

        <div id="usersSection" class="dashboard-section">
            <h2>Registered Users</h2>
            <div class="users-list" id="usersList"></div>
        </div>
    </div>

    <script src="{{ asset('data/products.js') }}"></script>
    <script src="{{ asset('js/admin.js') }}"></script>
</body>
</html>
