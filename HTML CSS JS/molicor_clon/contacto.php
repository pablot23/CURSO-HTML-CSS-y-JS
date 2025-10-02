<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $mensaje = $_POST['mensaje'];

  $to = "tucorreo@ejemplo.com";
  $subject = "Mensaje desde el sitio web";
  $body = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Mensaje enviado correctamente.";
  } else {
    echo "Error al enviar el mensaje.";
  }
}
?>
