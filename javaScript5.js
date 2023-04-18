num1=5;
num2=10;


switch(prompt("ingrese el tipo de operacion a realizar ")){

    case 'R','r':
        console.log(`El resultado de la resta es igual a: ${num1-num2} o a la inversa ${num2-num1}`);
        break;
    case 'S','s':
        console.log(`El resultado de la suma es igual a: ${num1+num2}`);
        break;

    case 'M','m':
        console.log(`El resultado de la multiplicacion es: ${num1*num2}`);
        break;
    case 'D','d':
        console.log(`El resultado de la division es igual a: ${num1/num2} o a la inversa ${num2/num1}`);
        break;

    default: (console.log("no elegiste la letra correcta"));
}