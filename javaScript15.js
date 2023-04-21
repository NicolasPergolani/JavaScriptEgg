// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
// radio del círculo lo proporcionará el usuario.
var circulo={
    radio:Number,
    area:Number,
    perimetro:Number,
}
pedirRadio(circulo);
function pedirRadio(circulo){
    circulo.radio=prompt("Ingrese el radio del circulo");
}
function calcularArea(circulo){
  circulo.area= Math.PI*circulo.radio**2;
    return circulo.area;
}
function calcularPerimetro(circulo){
    circulo.perimetro= Math.PI*2*circulo.radio;
    return circulo.perimetro;
}
console.log(calcularArea(circulo));
console.log(calcularPerimetro(circulo));
console.log(circulo);