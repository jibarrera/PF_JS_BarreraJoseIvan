let productosEnCarrito = localStorage.getItem("productos-en-carrito");

productosEnCarrito = JSON.parse(productosEnCarrito);
console.log(productosEnCarrito);


const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosEnCarrito(){
    
    if (productosEnCarrito && productosEnCarrito.length > 0) {


        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");


        contenedorCarritoProductos.innerHTML = "";
        
            productosEnCarrito.forEach(el => {
        
                const div = document.createElement("div");
                div.classList.add("carrito-producto");
                div.innerHTML = `
                    <img class="carrito-producto-imagen" src="${el.imagen}" alt="${el.nombre}">
                    <div class="carrito-producto-titulo">
                        <small>Nombre</small>
                        <h3>${el.nombre}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>Cantidad</small>
                        <p>${el.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>Precio</small>
                        <p>$${el.precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>Subtotal</small>
                        <p>$${el.precio * el.cantidad}</p>
                    </div>
                    <button class="carrito-producto-eliminar" id="${el.id}"><i class="bi bi-trash-fill"></i></button>
                `;
        
                contenedorCarritoProductos.append(div);
            })
        
        actualizarBotonesEliminar();
       // actualizarTotal();
        
        } else {
            contenedorCarritoVacio.classList.remove("disabled");
            contenedorCarritoProductos.classList.add("disabled");
            contenedorCarritoAcciones.classList.add("disabled");
            contenedorCarritoComprado.classList.add("disabled");
        }

        actualizarBotonesEliminar();
}

cargarProductosEnCarrito();
actualizarTotal();



function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(el){

    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "green",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
          },
        onClick: function(){} // Callback after click
      }).showToast();


    const nombreBoton = el.currentTarget.id;
    const index = productosEnCarrito.findIndex(el => el.id === nombreBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosEnCarrito();
    actualizarTotal();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);

//Funcion que me permite eliminar por completo la compra de postres que haya realizado. La misma funcion ademas permite vaciar por completo el carrito en el LocalStorage.
function vaciarCarrito() {

    productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosEnCarrito();
}




function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;

}




botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {

    productosEnCarrito.length = 0;
    console.log(productosEnCarrito);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}
