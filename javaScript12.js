// Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
// dato.
// var variable
// variable = prompt("Ingresa algo");



// var flechita = (variable) => typeof variable;

// console.log(flechita(variable));

// CHAT GPT con el mismo error 

  const obtenerTipoDato = () => {
    const valor = prompt("Ingrese un valor:");
    const tipo = typeof valor;
    alert(`El tipo de dato de ${valor} es ${tipo}.`);
  }
  
  // Ejemplo de uso:
  obtenerTipoDato();
  
 // CHAT GPT  con reconocimiento de numer y string 
 const dataType = () => {
    const arg = prompt("Ingresa un valor:");
    if (!isNaN(arg) && arg !== '') {
      return "number";
    } else if (typeof arg === "string") {
      return "string";
    } else if (typeof arg === "boolean") {
      return "boolean";
    } else {
      return "undefined";
    }
  }

  console.log(dataType());

