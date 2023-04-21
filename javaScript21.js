// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

var persona={
    nombre: "",
    edad: Number,
    sexo: "",
    peso: Number,
    altura: Number
}
const personas=[];
let continuar;
do {    
    const persona = {};
    persona.nombre=prompt("Ingrese el nombre de la persona")
    persona.edad=prompt("Ingrese la edad de la persona")
    persona.sexo=prompt("Ingrese el sexo de la persona H M u O ")
    persona.peso=prompt("Ingrese el peso de la persona")
    persona.altura=prompt("Ingrese la altura de la persona")


    personas.push(persona);

    


    continuar = prompt("¿Desea agregar otra persona? (si/no)") === "si";
} while (continuar);
console.log(personas)



















