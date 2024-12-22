// script.js saludo inicial 




    alert('Hola, Te damos la Bienvenida a Alfajores Arami!');



document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        mostrarMensaje();
    }
});
// script.js
const precios = {
    cordobeses: {
      6: 8500,
      12: 17000,
      24: 34000
    },
    marplatenses: {
      6: 9000,
      12: 18000,
      24: 36000
    }
    maicena: {
        6: 6000,
        12: 12000,
        24: 24000
        },
        colaciones: {
            6: 10000,
            12: 20000,
            24: 40000
            }

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

    { "id": maicena,
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
for (let i = 0; i < Productos.length; i++) {
    console.log(Productos[i].name);
}
let contenedorProductos = document.getElementById('productos');
contenedorIndividual.classicList.add ('card_container');


// cargar productos
document.addEventListener("DOMContentLoaded", (event) => {
    Productos.forEach(producto => {
       contenedorIndividual.innerHTML += `
        <div class="card">
           <img src="./assets/img/${producto.img}" class="card-img-top" alt="${producto.name}">
          <div class="card-body">
            <h5 class="card-title">${producto.name}</h5>
            <p class="card-text">${producto.description}</p>
            <p class="card-text">Precio: $${producto.price}</p>
            <p class="card-text">Cantidad: ${producto.cantidad}</p>
            <button id="btnMasInfo${producto.id}" onclick="masInfo(${producto.id})" class="btn btn-primary">Más información</button>
            <div id="description${producto.id}" style="display: none;">
              <p>${producto.description}</p>
            </div>
            <div id="botonera${producto.id}" style="display: none;">
              <button onclick="comprar(${producto.id})" class="btn btn-success">Comprar</button>
              <button onclick="masInfo(${producto.id})" class="btn btn-danger">Cerrar</button>
            </div>
          </div>
        </div>
      `;
    }   else {  return false;  }    
);
  }
    localStorage.setItem('productos', JSON.stringify(Productos));   
    });  
      //
//



// mostrar mensaje de bienvenida




