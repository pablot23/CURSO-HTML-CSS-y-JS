<?php
// Conexión a la base de datos
$conexion = new mysqli("localhost", "root", "", "usuarios_db");

// Verifica la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];

// Insertar en la base de datos
$sql = "INSERT INTO registro (nombre, apellido) VALUES ('$nombre', '$apellido')";

if ($conexion->query($sql) === TRUE) {
    echo "Registro guardado con éxito.";
} else {
    echo "Error: " . $sql . "<br>" . $conexion->error;
}

$conexion->close();
?>
