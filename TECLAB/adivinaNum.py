import random

def jugar_adivinanzas():
    rango_minimo = int(input("Ingrese el rango mínimo de números: "))
    rango_maximo = int(input("Ingrese el rango máximo de números: "))
    intentos_maximos = int(input("Ingrese la cantidad de intentos máximos: "))

    numero_generado = random.randint(rango_minimo, rango_maximo)
    intentos_restantes = intentos_maximos
    numeros_ingresados = []

    while intentos_restantes > 0:
        numero_ingresado = int(input("Ingrese un número: "))

        if numero_ingresado in numeros_ingresados:
            print("Ya has ingresado ese número. Intenta con otro.")
            continue

        numeros_ingresados.append(numero_ingresado)
        numeros_ingresados.sort()

        if numero_ingresado == numero_generado:
            print("¡Felicidades! Has adivinado el número.")
            break
        elif numero_ingresado < numero_generado:
            print("El número ingresado es menor que el número generado.")
        else:
            print("El número ingresado es mayor que el número generado.")

        intentos_restantes -= 1
        print("Intentos llevados:", len(numeros_ingresados))
        print("Intentos restantes:", intentos_restantes)

    if intentos_restantes == 0:
        print("Se te han acabado los intentos. El número generado era:", numero_generado)

jugar_adivinanzas()
