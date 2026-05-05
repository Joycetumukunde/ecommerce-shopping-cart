<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard - ShoppingHub</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <h2>ShoppingHub</h2>
            </div>
            <ul class="nav-links">
                <li><a href="#" onclick="showSection('products')">Products</a></li>
                <li><a href="#" onclick="showSection('cart')">Cart (<span id="cartCount">0</span>)</a></li>
                <li><a href="#" onclick="showSection('orders')">My Orders</a></li>
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
            <h2>Our Products</h2>
            <div class="products-grid" id="userProductsGrid"></div>
        </div>

        <div id="cartSection" class="dashboard-section">
            <h2>Shopping Cart</h2>
            <div id="cartItems"></div>
            <div class="cart-summary">
                <h3>Total: $<span id="cartTotal">0</span></h3>
                <button class="checkout-btn" onclick="checkout()">Checkout</button>
            </div>
        </div>

        <div id="ordersSection" class="dashboard-section">
            <h2>My Order History</h2>
            <div id="userOrders"></div>
        </div>
    </div>

    <script src="{{ asset('data/products.js') }}"></script>
    <script src="{{ asset('js/cart.js') }}"></script>
    <script src="{{ asset('js/user.js') }}"></script>
</body>
</html>
