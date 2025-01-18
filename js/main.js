const container = document.getElementById("container");


let  carrito;

if(JSON.parse(localStorage.getItem("carrito"))){
    carrito = JSON.parse(localStorage.getItem("carrito"))

}else{
    carrito = [];
}


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
        imagen: "./img/img08.jpg",
    },

    {
        id : 1008,
        nombre : "Vanilla Panna Cotta",
        precio: 1200,
        imagen: "img/img09.jpg",
    },

];



function agregarAlCarrito(producto){
    //console.log(`Compraste ${producto.nombre}`);
    //console.log(`Precio:  $${producto.precio}`);
    carrito.push(producto);
    //localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`Agregaste ${producto.nombre} correctamente al carrito`);

}

function verCarrito(){
    console.log("Este es tu carrito");
    console.log(carrito);
}

function crearCard(producto){
    const card = document.createElement("div");
    card. className = "card";
    card.innerHTML = producto.imagen;


    const imagen = document.createElement('img');
    imagen.innerHTML = `${producto.img}`;


    const title = document.createElement("h1");
    title.innerText = producto.nombre;
    title.className = "card-title";

    const price = document.createElement("p");
    price.innerText = `$${producto.precio}`;
    price.className = "card-price";

    const botonComprar = document.createElement("button");
    botonComprar.innerText = "Comprar";
    botonComprar.className = "btn";
    botonComprar.addEventListener("click", () => agregarAlCarrito(producto));

    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(botonComprar);
    card.appendChild(imagen);


    container.appendChild(card);

}
      
arrayDePostres.forEach(el => {

    crearCard(el);


});


const botonCarrito = document.getElementById("btn-carrito");

botonCarrito.addEventListener("click", ( ) => verCarrito());
