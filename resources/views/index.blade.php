@extends('layout')

@section('content')
<div class="hero">
    <div class="hero-content">
        <h1>Welcome to ShoppingHub</h1>
        <p>Your one-stop destination for all your shopping needs</p>
        <a href="{{ route('login') }}" class="cta-button">Get Started</a>
    </div>
</div>

<div class="features">
    <div class="feature-card">
        <h3>🛍️ Wide Selection</h3>
        <p>Thousands of products across multiple categories</p>
    </div>
    <div class="feature-card">
        <h3>🚀 Fast Delivery</h3>
        <p>Quick shipping to your doorstep</p>
    </div>
    <div class="feature-card">
        <h3>🔒 Secure Payments</h3>
        <p>100% secure payment gateway</p>
    </div>
</div>
@endsection
