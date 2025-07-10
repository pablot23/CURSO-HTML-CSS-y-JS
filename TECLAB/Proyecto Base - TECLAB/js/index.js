const productos = []
const URL="js/productos.json"; 

const container = document.querySelector("div.container");

const retornarCardHtml = (producto) => {
    return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="clic para agregar al carrito">Agregar</button>
                </div>
            </div>`;
};

const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('button.button-outline.button-add');
    if (botonesAgregar !== null) {
        botonesAgregar.forEach((button) => {
            button.addEventListener('click', (e) => {
                agregarAlCarrito(e.target.id);
            });
        });
    }
};

const cargarProductos = (array) => {
    if (array.length > 0) {
        array.forEach((producto) => {
            container.innerHTML += retornarCardHtml(producto);
        });
        activarClickEnBotones();
    }
};
const obtenerProductos =  () => {
    fetch(URL) 
        .then((response) => response.json())
        .then((data) => productos.push(...data))
        .then(() => cargarProductos(productos))  
}

//cargarProductos(productos);
obtenerProductos(); // Llamamos a la función para obtener los productos desde el JSON 




/*const obtenerProductos = () => {
    fetch(URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la respuesta de la red");
            }
            return response.json();
        })
        .then((data) => {
            productos.push(...data);
            cargarProductos(productos);
        })
        .catch((error) => {
            console.error("Error al obtener los productos:", error);
        });
}*/



/*const container=document.querySelector("div.container")

const retornarCardHtml=(producto)=>{
    return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="clic para agregar al carrito">Agregar</button>
                </div>
            </div>`
}
const activarClickEnBotones = () =>{
    const botonesAgregar = document.querySelectorAll('button.button-outline.button-add')
    if(botonesAgregar !== null){
        botonesAgregar.forEach((button) => {
            button.addEventListener('click', (e) => {
                agregarAlCarrito(e.target.id)
            }
        }
    }
}

const cargarProductos=(array)=> {
    if(array.length > 0){
        array.forEach(producto =>{
            container.innerHTML += retornarCardHtml(producto)
        });
        activarClickEnBotones()
    }
}

cargarProductos(productos)











/*let nombre="teclab"
let fechaNacimiento="21/03/1975"
let anioInicial=2018

const USUARIO="Joe McMillan"
const SecurityID='044b429d-911a-a5b1d9b7efbd'

const paisesDelSur=['Argentina','Uruguay','Brasil','Venezuela','Chile']

const carrito=[{codigo:123,nombre:'tecla bluetooth',importe:15500},
{codigo:234,nombre:'Mouse bluetooth',importe:7800},
{codigo:345,nombre:'SSD Portatil',importe:47350}]*/