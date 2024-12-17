// script.js saludo inicial 

function mostrarMensaje() {
    alert('¡Hola, Te damos la bienvenida a Alfajores Arami!');
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        mostrarMensaje();
    }
});
// script.js

let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    guardarCarrito();
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

function mostrarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    const totalElemento = document.getElementById('total');
    carritoElemento.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const itemElemento = document.createElement('div');
        itemElemento.textContent = `${item.nombre} - $${item.precio}`;
        carritoElemento.appendChild(itemElemento);
        total += item.precio;
    });

    totalElemento.textContent = `Total: $${total}`;
}

document.addEventListener('DOMContentLoaded', cargarCarrito);

function calcularTotal() {
    const subtotales = document.querySelectorAll('.subtotal');
    let total = 0;
    subtotales.forEach(subtotal => {
      const cantidad = subtotal.previousElementSibling.value;
      const precio = subtotal.previousElementSibling.previousElementSibling.textContent.replace('$', '');
      subtotal.textContent = '$' + (cantidad * precio);
      total += cantidad * precio;
    });
    document.getElementById('total').textContent = '$' + total;
  }