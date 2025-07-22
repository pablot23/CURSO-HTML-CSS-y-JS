<?php
// Conexión a la base de datos
$conexion = mysqli_connect("localhost", "root", "", "registro_usuarios");

// Verifica la conexión correctamente
if (!$conexion) {
    die("Error en la conexión: " . mysqli_connect_error());
}

// Captura los datos del formulario 
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$ciudad = $_POST["ciudad"];

// Inserta los datos en la tabla datos
$sql = "INSERT INTO usuarios (nombre, apellido, ciudad) VALUES ('$nombre', '$apellido', '$ciudad')";

// Ejecuta la consulta
if (mysqli_query($conexion, $sql)) {
    echo "Los datos se guardaron exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
}

// Cierra la conexión
mysqli_close($conexion);
?>



