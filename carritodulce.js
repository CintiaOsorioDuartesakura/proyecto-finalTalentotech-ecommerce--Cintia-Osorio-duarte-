

Alert("Bienvenidos a Alfajores Arami");

const products = [ 
    { id: 1, 
    name: 'Alfajor de Maicena',
    img: "maicena.jpg", 
    price: 12000, 
    quantity: 0 },
     { id: 2,
        name: 'Alfajor Marplatense',
         price: 18000,
            img: "marplatense.jpg", 
        quantity: 0 }, 
     { id: 3, 
        name: 'Alfajor Cordobés',
         img: "cordobés.jpg",
        price: 17000,
         quantity: 0 },
      { id: 4, name: 'Colaciones', price: 20000, quantity: 0 } 
    ]; 
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