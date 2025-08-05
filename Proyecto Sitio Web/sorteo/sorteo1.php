<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Grupos Aleatorios</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    h3 { color: #2c3e50; margin-top: 20px; }
    ul { list-style-type: none; padding-left: 0; }
    li { background-color: #ecf0f1; margin: 5px 0; padding: 8px; border-radius: 4px; }
  </style>
</head>
<body>

<?php
  $personas = ['Ana', 'Carlos', 'Laura', 'Pedro', 'Lucía', 'Martín', 'Sofía', 'Julián', 'Verónica', 'Tomás', 'Micaela', 'Federico'];
  
  shuffle($personas); // Mezclar aleatoriamente

  // Dividir en 4 grupos lo más equilibrado posible
  $tamañoGrupo = ceil(count($personas) / 4);
  $grupos = array_chunk($personas, $tamañoGrupo);

  echo "<h2>Grupos Aleatorios</h2>";

  foreach ($grupos as $i => $grupo) {
    echo "<h3>Grupo " . ($i + 1) . "</h3>";
    echo "<ul>";
    foreach ($grupo as $persona) {
      echo "<li>$persona</li>";
    }
    echo "</ul>";
  }
?>

</body>
</html>

