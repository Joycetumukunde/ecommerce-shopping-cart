<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'E-Commerce Store')</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <h2>ShoppingHub</h2>
            </div>
            <ul class="nav-links">
                @auth
                    @if(auth()->user()->role === 'admin')
                        <li><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
                    @else
                        <li><a href="{{ route('user.dashboard') }}">Dashboard</a></li>
                    @endif
                    <li>
                        <form method="POST" action="{{ route('logout') }}" style="display:inline">
                            @csrf
                            <button type="submit" style="background:none;border:none;color:white;cursor:pointer;font-family:inherit;font-size:1rem;">Logout</button>
                        </form>
                    </li>
                @else
                    <li><a href="{{ route('home') }}">Home</a></li>
                    <li><a href="{{ route('login') }}">Login</a></li>
                @endauth
            </ul>
        </div>
    </nav>

    @yield('content')

    <footer>
        <p>&copy; {{ date('Y') }} ShoppingHub. All rights reserved.</p>
    </footer>
    @stack('scripts')
</body>
</html>
