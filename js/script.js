document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Cek login
    if (username === 'admin' && password === 'stydbdidbbe') {
        alert('Login berhasil!');
        // Arahkan ke halaman admin dashboard
        // window.location.href = 'dashboard.html'; // Buat halaman dashboard admin
    } else {
        alert('Username atau password salah.');
    }
});
