//Escribir una función que reciba un String y devuelva la palabra más larga.
//String Ejemplo: “Guia de JavaScript”
//Resultado esperado : “JavaScript”

var frase = prompt("Ingrese la frase a evaluar");

function palabraMasLarga(frase) {
    frase = frase.split(" "); 
    let maxLongitud = 0;
    let palabrasLargas = [];
  
    for (let i = 0; i < frase.length; i++) {
      if (frase[i].length > maxLongitud) {
        maxLongitud = frase[i].length;
        palabrasLargas = [frase[i]];
      } else if (frase[i].length === maxLongitud) {
        palabrasLargas.push(frase[i]);
      }
    }
    return palabrasLargas;
  }

  
console.log(palabraMasLarga(frase));
