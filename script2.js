function mostrarMensaje() { 
    alert('¡Hola, bienvenido a Alfajores Arami!'); } 
    document.addEventListener('DOMContentLoaded', function() 
    { mostrarMensaje(); });

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
    document.addEventListener("DOMContentLoaded", (event) => {
        productos.forEach(producto => {
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
        function masInfo(id) {
            document.getElementById(`description${id}`).style.display = 'block';
            document.getElementById(`btnMasInfo${id}`).style.display = 'none';
        }
        function comprar(id) {
            alert(`Has comprado ${Productos[id-1].name}`);
        }
        function masInfo(id) {
            Event.preventDefault();
            let idx = id.toString();
            //seleccionamos los elementos, le damos un id unico
            //y los guardamos en una variable
            let param = 'description' + idx;
            let btnMasInfo = 'botonera' + idx;
            let btnComprar = 'btnMasInfo' + idx;
            let btnComprarDesc = 'comprar' + idx;
        }
        //seleccionamos el elemento por su id
        let descripcion = document.getElementById(param);
        //mostramos la descripcion si no esta visible
        if (descripcion.style.display === 'none') {
            descripcion.style.display = 'block';
        } else {
            descripcion.style.display = 'none';
        }
        //ocultamos el boton de mas info y mostramos el boton de comprar
        document.getElementById(btnMasInfo).style.display = 'none';
        document.getElementById(btnComprarDesc).style.display = 'block';
    
    //funcion que se ejecuta cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', function() {
        mostrarProductos();
    });
    //funcion que muestra los productos en la lista
    function mostrarProductos() {
        let productos = Productos;
        for (let i = 0; i < productos.length; i++) {
            console.log(Productos[i].name);
        }
        let contenedorProductos = document.getElementById('contenedorProductos');
        productos.forEach(producto => {
            contenedorProductos.innerHTML += `
                <div class="card">
                    <div>
                        <h2>${producto.name}</h2>
                        <p>${producto.description}</p>
                        <p>Precio: $${producto.price}</p>
                        <button onclick="comprar(${i+1})">Comprar</button>
                    </div>
                </div>
            `;
        });
    }
    //funcion que compra un producto
    function comprar(id) {
        alert(`Has comprado el producto ${Productos[id-1].name}`);
    }
    //funcion que muestra la descripcion de un producto
    function masInfo(id) {
        let descripcion = document.getElementById(`descripcion${id}`);
        if (descripcion.style.display === 'none') {
            descripcion.style.display = 'block';
        } else {
            descripcion.style.display = 'none';
        }
    }

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
        },
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
      
      document.getElementById('my_form').addEventListener('submit', (event) => {
        event.preventDefault();
        calcularTotal();
      });
      
      document.getElementById('reset').addEventListener('click', () => {
        document.getElementById('total').textContent = 0;
      });
      
      