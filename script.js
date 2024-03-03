
const palabras = ["manzana", "banana", "pera", "naranja", "uva", "sandia", "kiwi", "melon", "pina", "mango"];

//Palabra objetivo aleatoria
const palabraObjetivo = palabras[Math.floor(Math.random() * palabras.length)];

//Intentos permitidos
const intentosMaximos = 5;

//Letras correctas en posición correcta
let letrasCorrectas = 0;

//Función para verificar la palabra ingresada por el usuario
function verificarPalabra(palabra) {
 if (palabra.length !== palabraObjetivo.length) {
 console.log("La palabra ingresada debe tener", palabraObjetivo.length, "letras.");
 devolucion;
 }

letrasCorrectas = 0;

for (let i = 0; i < palabra.length; i++) {
 if (palabra[i] === palabraObjetivo[i]) {
 letrasCorrectas++;
 }
 }

if (letrasCorrectas === palabraObjetivo.length) {
 console.log("¡Felicidades! Has adivinado la palabra:", palabraObjetivo);
 return true;
 } else {
 console.log("Intento fallido. Letras correctas en posicion correcta:", letrasCorrectas);
 return false;
 }
}

//Función principal del juego
function jugarWordle() {
 let intentos = 0;
 let ganador = falso;

console.log("Bienvenido a Wordle. Tienes", intentosMaximos, "intentos para adivinar la palabra secreta.");

while (intentos < intentosMaximos &&  !ganador) {
 const palabraUsuario = prompt("Intento #" + (intentos + 1) + ": Ingrese una palabra:");

if (palabraUsuario === null) {
 devolucion; //El usuario cancelo el juego
 }

ganador = verificarPalabra(palabraUsuario);

intentos++;
 }
 if (!ganador) {
 console.log("Lo siento, has agotado todos tus intentos. La palabra correcta era:", palabraObjetivo);
 }
}
