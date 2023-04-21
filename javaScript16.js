// 16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.

var a1=[];
var a2=[];

for (let i = 0; i < 5; i++) {
    a1[i]=Math.floor(Math.random()*10);
    a2[i]=Math.floor(Math.random()*10);
    
}
console.log(a1);
console.log(a2);
document.write(` <h2>El primer Array con los valores: ${a1}     </h2>`);
document.write(` <h3>El segundo Array con los valores: ${a2}  </h2> `);