// script.js saludo inicial 

function mostrarMensaje() {
    alert('¡Hola, Te damos la bienvenida a Alfajores Arami!');
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        mostrarMensaje();
    }
});

