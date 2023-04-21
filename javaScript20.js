// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array [6, 9, 12, 15, 18].
var A=[[3], [6], [9], [12], [15]];
var B=[];
for (let i = 0; i < A.length; i++) {
    
        B[i]=parseInt(A[0])+parseInt(A[i]);
    //B.push(parseInt(A[0])+parseInt(A[i])); Otra opcion con el push 

    
}
console.log(B)