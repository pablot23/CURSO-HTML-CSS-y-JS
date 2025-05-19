/*let nombre = "Mi primer proyecto en node.js"

mostrarContenido;
function mostrarContenido(){
    console.clear();
    console.log(nombre);
}*/
npm 
const express=require('express');
const productos = require('./productos');
const app = express();
const port = 3000;

app.listen(port, ()=>console.log("servidor escuchado en el puerto",port));
app.use(express.json());

app.get('/productos',(req,res)=>{
    res.status(200).json(productos);
});
app.get('/productos/:id', (req,res)=>{
    const idproductos=parseInt(req.params.id);
    if(isNaN(idproductos)){
        returnres.status(400).json({"error": "id no valido"});
    }
    const resultado=productos.find((productos)=>productos.id==idproductos);
    if(resultado) {
        res.status(200).json(resultado);
    } else {
        res.status(404).json({"error": "404","mensaje":"producto no encontrado"});
    }
});


