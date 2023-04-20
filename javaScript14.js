// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas.

var libro = {
    ISBN: "",
    Titulo: "",
    Autor: "",
    nroDePaginas: "",
    
};
crearLibro(libro);
function crearLibro(){
libro.ISBN=prompt("Ingrese el ISBN");
libro.Titulo=prompt("Ingrese Titulo");
libro.Autor= prompt("Ingrese Autor");
libro.nroDePaginas= prompt("Ingrese el numero de paginas");

}
mostrar(libro);
function mostrar(libro){
    console.log(libro);
}
