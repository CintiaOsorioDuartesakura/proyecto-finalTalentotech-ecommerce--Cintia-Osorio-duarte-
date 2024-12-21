// script.js saludo inicial 




    alert('Hola, Te damos la Bienvenida a Alfajores Arami!');



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
    {
        "id": cordobeces,
        "name": 'cordobeces',
        "cantidad":('media docena','1 docena','2 docenas'),
        "price" : (8500,17000,34000),
        "img": "cordobeces.jpg",
        "description" : "Los alfajores cordobeses destacan por su particular textura y sabor. Con una receta que incluye harina de trigo y miel, estos alfajores están rellenos de una generosa capa de dulce de leche y cubiertos con un glaseado blanco que les da un toque distintivo. Son conocidos por su equilibrio perfecto entre dulzura y suavidad, ofreciendo una experiencia de sabor auténticamente argentina."
    },
    

    {
        "id": marplatenses,
        "name": 'marplatenses',
        "cantidad":('media docena','1 docena','2 docenas'),
        "price" : (9000,18000,36000),
        "img": "mdq.jpg",
        "description" : "El alfajor marplatense es famoso por su inigualable combinación de sabores. Estos alfajores están formados por dos galletas esponjosas rellenas de dulce de leche, bañadas en un suave chocolate semi amargo que se derrite en la boca. Originarios de Mar del Plata, estos alfajores son un verdadero símbolo de la tradición repostera argentina, perfectos para cualquier ocasión."
    },
    {
        "id": colaciones,
        "name": 'colaciones',
        "cantidad":('media docena','1 docena','2 docenas'),
        "price" : (10000,20000,40000),
        "img": "colaciones.jpg",
        "description" : "Los alfajores argentinos son una maravilla de la pastelería argentina. Estos alfajores delicados y suaves están hechos con una masa de maicena que se deshace en la boca, rellenos de dulce de leche y cubiertos con una generosa capa de coco rallado. Cada bocado es un deleite de sabores y texturas que evoca los recuerdos más dulces de la infancia."
    }
   
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