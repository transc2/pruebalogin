function login() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (usuario === "admin" && password === "1234") {
        location.href = 'index.html';
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function logout() {
    location.href = 'login.html';
}

