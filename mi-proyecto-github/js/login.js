function validarLogin() {
    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Usuario y contraseña correctos
    const usuarioCorrecto = 'Luis';
    const contrasenaCorrecta = 'cano123';

    // Verificar si el usuario y contraseña son correctos
    if (username === usuarioCorrecto && password === contrasenaCorrecta) {
        // Si son correctos, redirigir a la página del menú
        window.location.href = 'index.html'; // Reemplaza con la URL del menú principal
    } else {
        // Si son incorrectos, mostrar mensaje de error
        document.getElementById('error-message').style.display = 'block';
    }
}
