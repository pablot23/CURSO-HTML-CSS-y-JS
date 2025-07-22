<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "registro_usuarios_dinamico");

// Verificar conexión
if (!$conexion) {
    die("Error en la conexión: " . mysqli_connect_error());
}

// Insertar datos si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $ciudad = $_POST["ciudad"];

    $sql = "INSERT INTO datos (nombre, apellido, ciudad) VALUES ('$nombre', '$apellido', '$ciudad')";
    mysqli_query($conexion, $sql);

    // Redirigir para limpiar el formulario y evitar reenvíos
    header("Location: formulario.php?registro=ok");
    exit();
}
?>

<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Formulario con Tabla</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body class="container py-4">

    <h2 class="mb-4">Registro de usuarios</h2>

    <?php if (isset($_GET['registro']) && $_GET['registro'] === 'ok'): ?>
      <div class="alert alert-success">✅ Tu registro fue exitoso</div>
    <?php endif; ?>

    <!-- 📝 Formulario -->
    <form action="formulario.php" method="POST" class="row g-3">
      <div class="col-md-4">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" name="nombre" required>
      </div>
      <div class="col-md-4">
        <label class="form-label">Apellido</label>
        <input type="text" class="form-control" name="apellido" required>
      </div>
      <div class="col-md-4">
        <label class="form-label">Ciudad</label>
        <input type="text" class="form-control" name="ciudad" required>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>

    <!-- 📋 Tabla de resultados -->
    <h3 class="mt-5">Usuarios registrados</h3>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Ciudad</th>
        </tr>
      </thead>
      <tbody>
        <?php
        $resultado = mysqli_query($conexion, "SELECT * FROM datos ORDER BY id DESC");

        while ($fila = mysqli_fetch_assoc($resultado)) {
            echo "<tr>
                    <td>{$fila['id']}</td>
                    <td>{$fila['nombre']}</td>
                    <td>{$fila['apellido']}</td>
                    <td>{$fila['ciudad']}</td>
                  </tr>";
        }

        mysqli_close($conexion);
        ?>
      </tbody>
    </table>

  </body>
</html>