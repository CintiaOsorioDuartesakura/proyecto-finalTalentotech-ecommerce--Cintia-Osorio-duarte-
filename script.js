// script.js saludo inicial 


    // Mostrar el saludo inicial al cargar la página
    // script.js

function mostrarMensaje() {
    alert('¡Hola, bienvenido a Alfajores Arami!');
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        mostrarMensaje();
    }
});


    
    









    
    

// script.js
const precios = {
    cordobeses: {
    
    12: 17000,
    
    },
    marplatenses: {
    
    12: 18000,
    
    },
    maicena: {
       
        12: 12000,
        
        },
        colaciones: {
            
            12: 20000,
            

};

document.querySelectorAll('.quantity').forEach(select => {
    select.addEventListener('change', actualizarPrecio);
});

function actualizarPrecio(event) {
    const select = event.target;
    const product = select.closest('.product');
    const tipoProducto = select.id.split('-')[0];
    const cantidad = parseInt(select.value, 10);
    const precio = precios[tipoProducto][cantidad] || 0;
    product.querySelector('.precio').textContent = precio;
}

function calcularTotal() {
    let total = 0;
    document.querySelectorAll('.product').forEach(product => {
    const precio = parseInt(product.querySelector('.precio').textContent, 10) || 0;
      total += precio;
    });
    document.getElementById('total').textContent = total;
  }
  
//
let Productos = [

    { "id": 1,
        "name": 'maicena',
        "cantidad":(0), 
        "price" : (12000),
        "img": "maicena.jpg",
        "description" : "Los alfajores de maicena son un clásico de la pastelería argentina. Estos alfajores delicados y suaves están hechos con una masa de maicena que se deshace en la boca, rellenos de dulce de leche y cubiertos con una generosa capa de coco rallado. Cada bocado es un deleite de sabores y texturas que evoca los recuerdos más dulces de la infancia."
        },
    {
        "id": 2,
        "name": 'cordobeces',
        "cantidad":(0),
        "price" : (17000),
        "img": "cordobeces.jpg",
        "description" : "Los alfajores cordobeses destacan por su particular textura y sabor. Con una receta que incluye harina de trigo y miel, estos alfajores están rellenos de una generosa capa de dulce de leche y cubiertos con un glaseado blanco que les da un toque distintivo. Son conocidos por su equilibrio perfecto entre dulzura y suavidad, ofreciendo una experiencia de sabor auténticamente argentina."
    },
    

    {
        "id": 3,
        "name": 'marplatenses',
        "cantidad":(0),
        "price" : (18000),
        "img": "mdq.jpg",
        "description" : "El alfajor marplatense es famoso por su inigualable combinación de sabores. Estos alfajores están formados por dos galletas esponjosas rellenas de dulce de leche, bañadas en un suave chocolate semi amargo que se derrite en la boca. Originarios de Mar del Plata, estos alfajores son un verdadero símbolo de la tradición repostera argentina, perfectos para cualquier ocasión."
    },
    {
        "id": 4,
        "name": 'colaciones',
        "cantidad":(0),
        "price" : (20000),
        "img": "colaciones.jpg",
        "description" : "Los alfajores argentinos son una maravilla de la pastelería argentina. Estos alfajores delicados y suaves están hechos con una masa de maicena que se deshace en la boca, rellenos de dulce de leche y cubiertos con una generosa capa de coco rallado. Cada bocado es un deleite de sabores y texturas que evoca los recuerdos más dulces de la infancia."
    }

];
for (let i = 0; i < Productos.length; i++) {
    console.log(Productos[i].name);
}
function renderProducts() 
{ const productList = document.getElementById('product-list');
   productList.innerHTML = ''; 
   products.forEach(product => { const productCard = document.createElement('div'); 
      productCard.classList.add('product-card');
       productCard.innerHTML = ` <h2>${product.name}</h2> <p>Precio: $${product.price}</p> 
       <div class="product-quantity"> 
       <button onclick="updateQuantity(${product.id}, -1)">-</button> <span>${product.quantity}</span> 
       <button onclick="updateQuantity(${product.id}, 1)">+</button> </div> `; 
       productList.appendChild(productCard); }); updateTotal(); } 
       function updateQuantity(productId, change) { const product = products.find(p => p.id === productId); 
          if (product) { product.quantity += change;
               if (product.quantity < 0) { product.quantity = 0; } renderProducts(); } } 
               function updateTotal() { const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
                   document.getElementById('total').innerText = total; } document.addEventListener('DOMContentLoaded', renderProducts);








