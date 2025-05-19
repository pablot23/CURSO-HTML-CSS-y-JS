const express = require('express');
const app = express();
const port = 3000;

const usuarios = [ 
{
    nombre: "Pedro Perez",
    documento: 30569874,
    correo: "pedro.perez@gmail.com",
    telefono: 12345678,
    direccion: "calle 652",
    valor: 25000,
    concepto: "Sueldo",
}
];

app.get('/', (req, res) => {
  res.send(usuarios);
});

app.listen(port, () => {
  console.log(`ejecutandose`)
});

  