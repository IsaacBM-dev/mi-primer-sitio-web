// Comando muy usado para trabajar con la consola de la página
console.log("Hello world en JS");

//Variables
// let : Cambia - const : No cambia

let nombre = "Isaac";
const dni = 12345678;

// Tipos de datos: String - int/float - boolean
let texto = "Hola";
let numero = 21;
let on = true;

// Tipos de operadores: +|-|*|/ | Operadores para manejo de errores.-  == : comparar valor | === : comparar valor + tipo

let suma = 5 + 3;
let igual = 5 == "5";
let estricto = 5 === "5";

console.log(suma);
console.log(igual);
console.log(estricto);

// Condicionales

if(numero >= 10){
    console.log("Aprobado");
}else if(numero > 20){
    console.log("Numero no admitido");
}else{
    console.log("Desaprobado");
}

// Bubles

for(let i = 0; i<5;i++){
    console.log(i);
}

// Funciones

function saludar(){
    alert("Hola, este es un ejemplo de ventana emergente con JavaScript");
}

saludar();

// Conexión con HTML
//document -> Da acceso al documento html asociado.
//getElementById() -> obtiene la etiqueta que tenga el id agregado.

let titulo = document.getElementById("titulo"); //Selecciona
titulo.textContent = "Nuevo titulo"; //Cambiar contenido
let boton = document.getElementById("btn");

//Usamos el metodo addEventListener con el evento click
//Ejecutamos una función al momento que ocurra el evento
boton.addEventListener("click", function(){
    titulo.textContent = "Texto cambiado";
});
