function adivina_el_numero() {
	var cant_intentos, intentos_restantes, intentos_usados, numero, num_usuario, rango_maximo, rango_minimo;
	alert("ingresar el rango de numeros para el juego: ", '<BR/>');
	alert("rango minimo: ", '<BR/>');
	rango_minimo = Number(prompt());
	alert("rango maximo: ", '<BR/>');
	rango_maximo = Number(prompt());
	alert("ingresar la cantidad de intentos: ", '<BR/>');
	cant_intentos = prompt();
	while (rango_minimo>=rango_maximo || cant_intentos<=0) {
		alert("ERROR ---> Ingresar un rango valido y la cantidad de intentos mayor a cero", '<BR/>');
		alert("rango minimo: ", '<BR/>');
		rango_minimo = Number(prompt());
		alert("rango maximo: ", '<BR/>');
		rango_maximo = Number(prompt());
		alert("ingresar la cantidad de intentos: ", '<BR/>');
		cant_intentos = Number(prompt());
	}
	numero = aleatorio(rango_minimo, rango_maximo);
	intentos_restantes = cant_intentos;
	intentos_usados = 0;
	while (intentos_restantes>0) {
		alert("los intentos restantes son: ", intentos_restantes, '<BR/>');
		alert("los intentos usados son: ", intentos_usados, '<BR/>');
		alert("ingresar un numero: ", '<BR/>');
		num_usuario = prompt();
		if (num_usuario<rango_minimo || num_usuario>rango_maximo) {
			alert("ERROR ---> El numero ingresado esta fuera de rango", '<BR/>');
		}
		if (num_usuario==numero) {
			alert("¡BRAVOOO!!! has adivinado el numero", '<BR/>');
			intentos_restantes = 0;
		} else {
			if (num_usuario<numero) {
				if (num_usuario<numero) {
					alert("el numero que desea adivinar es mayor", '<BR/>');
				} else {
					alert("el numero que desea adivinar es menor", '<BR/>');
				}
			}
		}
		intentos_usados = intentos_usados+1;
		intentos_restantes = intentos_restantes-1;
	}
	if (intentos_restantes<=0) {
		alert("no hay mas intentos. El numero era: ", numero, '<BR/>');
	}
}
