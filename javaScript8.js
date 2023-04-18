var numeros=new Array();
var sum=0;

while (num!=0){
    var num=parseInt(prompt("Ingrese un numero terminara cuando sea 0"));
    if(num==0){
        console.log("Terminado el circuito")
    }else{
        numeros.push(num);
        sum+=num;
    }
  
   
}
var max=Math.max(...numeros);
var min=Math.min(...numeros);
var promedio=(sum/numeros.length);
console.log(numeros);
console.log(`El valor maximo es ${max}`);
console.log(`El valor minimo es ${min}`);
console.log(`El valor promedio es ${promedio}`);


