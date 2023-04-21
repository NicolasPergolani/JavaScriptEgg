// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
// de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
// programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
// ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
// 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
// de 20.
// var a=[];
// var b=[];
// for (let i = 0; i < 50; i++) {
//     A[i] = (Math.floor(Math.random()*50));

    
// }
// console.log(a);
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
//     }
//     a.sort(compareNumeric)
//     console.log(a);
let A = [];
let B = [];

for (let i = 0; i < 50; i++) {
  A.push(Math.floor(Math.random()*50));
}

console.log("Arreglo A sin ordenar:");
console.log(A);

A.sort(function (a, b) {
  return a - b;
});

console.log("Arreglo A ordenado de menor a mayor:");
console.log(A);

B = A.slice(0, 10);

for (let i = 0; i < 10; i++) {
  B.push(0.5);
}

console.log("Arreglo B combinado de 20 elementos:");
console.log(B);
