num1=5;
num2=10;
var letra=prompt("Ingrese una opcion")

switch(letra.toLowerCase()){

    case 'r':
        console.log(`El resultado de la resta es igual a: ${num1-num2} o a la inversa ${num2-num1}`);
        break;
    case 's':
        console.log(`El resultado de la suma es igual a: ${num1+num2}`);
        break;

    case 'm':
        console.log(`El resultado de la multiplicacion es: ${num1*num2}`);
        break;
    case 'd':
        console.log(`El resultado de la division es igual a: ${num1/num2} o a la inversa ${num2/num1}`);
        break;

    default: (console.log("no elegiste la letra correcta"));
}