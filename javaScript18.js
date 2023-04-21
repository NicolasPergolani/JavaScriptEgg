// 18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
var valores = [true, 5, false, "hola", "adios", 2];
var texto = [];
var booleanos = [];
var numeros = [];
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "string") {
        texto.push(valores[i]);
    }
    if (typeof valores[i] === "number") {
        numeros.push(valores[i])

    }
    if (typeof valores[i] === "boolean") {
        booleanos.push(valores[i])

    }

}
var aux = 0;
var cont = 0;
var palabra = "";
console.log(texto);
for (let i = 0; i < texto.length; i++) {
    if (texto[i].length > aux) {
        aux = texto[i].length;
        cont = i;

    }
    palabra = texto[cont];
}

console.log(palabra);
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
for (let i = 0; i < booleanos.length; i++) {
    if (booleanos[i] === true) {
        console.log(true);


    } else if (booleanos[i] === false)
        console.log(false)

}
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos
console.log(`El resultado de la resta es de ${numeros[0]-numeros[1]}`)
console.log(`El resultado de la suma es de ${numeros[0]+numeros[1]}`)
console.log(`El resultado de la multiplicacion es de ${numeros[0]*numeros[1]}`)
console.log(`El resultado de la division es de ${numeros[0]/numeros[1]}`)
console.log(`El resultado de la potenciacion es de ${numeros[0]**numeros[1]}`)
console.log(`El resultado de la raiz cuadrada es de ${numeros[0]**(1/2)}`)

