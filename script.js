// script.js saludo inicial 



function mostrarMensaje(){
    alert('��Hola, Te damos la Bienvenida a Alfajores Arami!');

}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        mostrarMensaje();
    }
});
// script.js

let Productos = [
   
    { "id":maicena,
        "name": 'maicena',
        "cantidad":('media docena','1 docena','2 docenas'), 
        "price" : (6000,12000,24000),
        "img": "maicena.jpg",
        "description" : "Los alfajores de maicena son un clásico de la pastelería argentina. Estos alfajores delicados y suaves están hechos con una masa de maicena que se deshace en la boca, rellenos de dulce de leche y cubiertos con una generosa capa de coco rallado. Cada bocado es un deleite de sabores y texturas que evoca los recuerdos más dulces de la infancia."
        },
       

    { cordobeces: 'cordobeces', precio: 200 },
    { nombre: 'Producto 3', precio: 300 },
    { nombre: 'Producto 4', precio: 400 },
    { nombre: 'Producto 5', precio: 500 }
];

function agregarAlCarrito(nombre,cantidad, precio) {
    carrito.push({ nombre: nombre,cantidad:cantidad, precio: precio });
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