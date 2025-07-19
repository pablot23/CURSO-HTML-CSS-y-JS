let idiomaActual = 'es';
let traducciones = {};

// Carga el archivo JSON
fetch('textos.json')
  .then(res => res.json())
  .then(data => {
    traducciones = data;
    actualizarContenido();
  })
  .catch(error => {
    console.error('Error cargando JSON:', error);
  });

// Función para cambiar el idioma
document.getElementById('idiomaBtn').addEventListener('click', () => {
  idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
  actualizarContenido();
});

// Función que actualiza el contenido en base al idioma
function actualizarContenido() {
  const textos = traducciones[idiomaActual];
  document.getElementById('titulo').textContent = textos.titulo;
  document.getElementById('descripcion').textContent = textos.descripcion;
  document.getElementById('idiomaBtn').textContent = textos.boton;
}
