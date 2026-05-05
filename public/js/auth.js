// Handle login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        
        if (user.role === 'admin') {
            window.location.href = 'admin-dashboard.html';
        } else {
            window.location.href = 'user-dashboard.html';
        }
    } else {
        document.getElementById('errorMsg').textContent = 'Invalid credentials! Please check your email and password.';
    }
});

function logout() {
    sessionStorage.removeItem('currentUser');
    currentUser = null;
    window.location.href = 'login.html';
}
