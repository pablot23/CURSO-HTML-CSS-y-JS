let num1=prompt("ingresar un numero");
let num2=prompt("ingresar otro numero");
let resultado=num1-num2;
console.log("el resultado de la resta es: " + resultado);

if (resultado > 0) {
    console.log("y es mayor a cero");
    let par_o_impar = resultado % 2;
        
        if (par_o_impar == 0){
            console.log("el numero ingresado es PAR " + resultado);    
        }
        else {
            console.log("el numero ingresado es IMPAR " + resultado);
        }
        
    } else  {
            console.log("es menor o igual a cero " + resultado);
        }
    


/*if (resultado > 0) {
    console.log("y es mayor a cero")
        if (resultado % 2 == 0){
            console.log("el numero ingresado es PAR " + resultado);    
        }
        else 
        console.log("el numero ingresado es IMPAR " + resultado);
        if (resultado <= 0) {
            console.log("es menor o igual a cero " + resultado);
        }
}*/
