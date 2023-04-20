/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/
var frase=prompt("Ingrese una Frase");

var frase2;

for (let i = 0; i < frase.length; i++) {
    frase2=frase.substring(0,i+1)+" ";
    
}

//si pones 3 puntitos te lo separa igual que idiotes
console.log(...frase2);