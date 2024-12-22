// script.js saludo inicial 




    alert('Hola, Te damos la Bienvenida a Alfajores Arami!');



document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        mostrarMensaje();
    }
});
// script.js
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
        <form id="my_form${producto.id}">
          <div>
            <output id="nombre" name="nombre">${producto.name}</output>
            <br>
            <output id="precio" name="precio">${producto.price}</output>
            <br>
            <button id="btnMasInfo${producto.id}" class="button" onclick="masInfo(${producto.id})">+ info</button>
            <div id="botonera${producto.id}">
              <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
            </div>  
            <div>
              <output id="description${producto.id}" class="description">
                ${producto.description}
                <br>
                  <button onclick="comprar(${producto.id})" class="button" value="Comprar">Comprar</button>
              </output>
            </div>
          </div>
        </div>
      `;
      contenedorProductos.append(contenedorIndividual);
    });
  });
//
function masInfo(id){
Event.preventDefault();
let idx= id.toString();
let param = 'description' + idx;
  let btnMasInfo = 'botonera' + idx;
  let btnComprar = 'btnMasInfo' + idx;
  let btnComprarDesc = 'comprar' + idx;


    document.getElementById(`description${id}`).style.display = 'block';
    document.getElementById(`btnMasInfo${id}`).style.display = 'none';
    document.getElementById(`botonera${id}`).style.display = 'block';
  }
  function comprar(id){
    alert(`Has seleccionado comprar al alfajor ${Productos[id-1].name}`);
  }


// mostrar mensaje de bienvenida




