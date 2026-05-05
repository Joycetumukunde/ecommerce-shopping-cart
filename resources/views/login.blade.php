@extends('layout')

@section('title', 'Login - ShoppingHub')

@section('content')
<div class="login-container">
    <div class="login-card">
        <h2>Login to Your Account</h2>
        <form id="loginForm" method="POST" action="{{ route('login.post') }}">
            @csrf
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required value="{{ old('email') }}">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>
            <button type="submit" class="login-btn">Login</button>
        </form>
        @if ($errors->any())
            <div id="errorMsg" class="error-message" style="display:block;color:red;margin-top:10px;">
                {{ $errors->first() }}
            </div>
        @endif
        <div class="demo-info">
            <h3>Demo Credentials:</h3>
            <p><strong>Admin:</strong> admin@shoppinghub.com / admin123</p>
            <p><strong>User:</strong> user@shoppinghub.com / user123</p>
        </div>
    </div>
</div>
@endsection
