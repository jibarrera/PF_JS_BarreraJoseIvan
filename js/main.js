//let productos = [];

fetch("./js/postres.json")
    .then(response => response.json())
    .then(data => {
        const postres = data.results;
        agregarAlCarrito(postres);
         productos = [];
         productos.forEach(el => {
             crearCard(el);
         });
     })
     .catch(error => {
         console.error("Error cargando el JSON:", error);
     });


let carrito = [];


const arrayDePostres = [
    {
        id: 1000,
        nombre: "Waffle with Berries",
        precio: 4000,
        imagen: "img/img01.jpg",
    },

    {
        id:1001,
        nombre : "Vanilla Bean Crème Brûlée",
        precio: 7500,
        imagen: "img/img02.jpg",
        
    },

    {
        id: 1002,
        nombre : "Macaron Mix of Five",
        precio: 1500,
        imagen: "img/img03.jpg",
    },

    {
        id : 1003,
        nombre : "Classic Tiramisu",
        precio: 4500,
        imagen: "img/img04.jpg",
    },

    {
        id : 1004,
        nombre : "Pistachio Baklava",
        precio: 2800,
        imagen: "img/img05.jpg",
    },

    
    {
        id : 1005,
        nombre : "Lemon Meringue Pie",
        precio: 2800,
        imagen: "img/img06.jpg",
    },

     {
        id : 1006,
        nombre : "Red Velvet Cake",
        precio: 2000,
        imagen: "img/img07.jpg",
    },

    
    {
        id : 1007,
        nombre : "Salted Caramel Brownie",
        precio: 2500,
        imagen: "/img/img08.jpeg",
    },

    {
        id : 1008,
        nombre : "Vanilla Panna Cotta",
        precio: 1200,
        imagen: "img/img09.jpeg",
    },

];

const container = document.getElementById("container");
const botonesAgregar = document. querySelectorAll(".btn");
const numerito = document.querySelector("#numerito");


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS){
     productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();

}else{

    productosEnCarrito = [];

}


function agregarAlCarrito(el) {


    const nombreBoton = el.nombre;

    const productoAgregado = arrayDePostres.find(el => el.nombre === nombreBoton);
    //console.log(productoAgregado);

     if(productosEnCarrito.some(el => el.nombre === nombreBoton)){


        const index = productosEnCarrito.findIndex(el => el.nombre === nombreBoton);

        productosEnCarrito[index].cantidad++;

     } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
     }


     actualizarNumerito();
     //console.log(productosEnCarrito);


     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}



//Funcion que me permite agregar cantidades de productos seleccionados y sumarlo a medida que se agregan prodcutos al carrito.

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, el) => acc + el.cantidad, 0);
    numerito.innerText = nuevoNumerito;
    //console.log(nuevoNumerito);
}


   function crearCard(producto){
    const card = document.createElement("div");
    card. className = "card";
    //card.innerHTML = producto.imagen;


    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    card.imagen = producto.imagen;


    const title = document.createElement("h1");
    title.innerText = producto.nombre;
    title.className = "card-title";

    const price = document.createElement("p");
    price.innerText = `$${producto.precio}`;
    price.className = "card-price";

    const botonComprar = document.createElement("button");
    botonComprar.innerText = "Agregar";
    botonComprar.className = "btn";
    botonComprar.id = "id";
    botonComprar.addEventListener("click", () => agregarAlCarrito(producto));

    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(botonComprar);
    card.appendChild(imagen);


    container.appendChild(card);

};
      
arrayDePostres.forEach(el => {

    crearCard(el);
   

});
