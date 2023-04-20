//Escribir una función flecha que reciba una palabra y la devuelva al revés.

// var frase=prompt("Ingrese una frase o palabra ")
// var frase2=frase.split("").reverse().join("");
// console.log(frase2);



// var frase = prompt("Ingrese la frase a evaluar");

// let frase2 = (frase) => frase.split("").reverse().join("");

// console.log(frase2(frase));

 var frase = prompt(`Ingrese una frase o una palabra`);

const frase2 = (frase) => {
    let original = frase;
    let reversed = '';
  
    for (let i = frase.length - 1; i >= 0; i--) {
      reversed += frase[i];
    }
  
    return reversed;
  }
  
  console.log(frase2(frase));

