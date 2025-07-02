const container=document.querySelector("div.container")

retornarCardHtml=(producto)=>{
    return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`
}

const cargarProductos=(array)=> {
    if(array.length > 0){
        array.forEach(producto =>{
            container.innerHTML += retornarCardHtml(producto)
        });
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