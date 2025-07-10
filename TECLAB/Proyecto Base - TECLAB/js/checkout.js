const tbody = document.querySelector("tbody");
const btnComprar = document.querySelector("button#btnComprar"); 


const retornarTablaHTML = (producto) => {
return `<tr>
            <th id="tablehead">${producto.imagen}</th>
            <th id="tablehead">${producto.nombre}</th>
            <th id="tablehead">${producto.precio}</th>
            <th id="tablehead">Quitar</th>
        </tr>`;

};

if (carritoFrutas.length > 0) {
    tbody.innerHTML = "";
    carritoFrutas.forEach(
        (producto) => (tbody.innerHTML += retornarTablaHTML(producto))
);
}

btnComprar.addEventListener ("click", () => { 
    alert("Gracias por su compra!");
    localStorage.removeItem("carritoFrutas"); // Limpiamos el carrito del localStorage
    tbody.innerHTML = ""; // Limpiamos el contenido de la tabla 
});

/*`<tr>
            <th id="tablehead">${producto.imagen}</th>
            <th id="tablehead">${producto.nombre}</th>
            <th id="tablehead">${producto.precio}</th>
            <th id="tablehead">Quitar</th>
            <th id="tablehead">${producto.nombre}</th>
            <th id="tablehead">${producto.descripcion}</th>
            <th id="tablehead">${producto.importe}</th>
            <th id="tablehead"><button class="button button-outline button-remove" id="${producto.id}" title="clic para quitar del carrito">Quitar</button></th>
</tr>`;*/