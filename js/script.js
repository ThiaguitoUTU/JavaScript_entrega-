
//Arrow function

//1. Recibe cero parámetros
const sinParametros = ()  =>{
    return;
}
console.log(sinParametros());

//2. Recibe 1 párametro

const nameOne = (nombre) =>{
    return 'Hola, ' + nombre + ' ¿Cómo estás?';
}
console.log(nameOne("Santiago"))

//3. Recibe más o 2 parámetros

const operaciónMatematica = (num, num2, num3) =>{
   return num + num2 + num3
}

console.log(operaciónMatematica(1,3,5));


//Variables

const number1= 3;
const number2= 4;

const suma = number1 + number2;
const resta = number1 - number2;
const multiplicacion = number1 * number2;
const division = number1 / number2;

console.log('Suma: '+ suma);
console.log('Resta:' + resta);
console.log('Multiplicación: '+ multiplicacion);
console.log('División: '+ division);

const nombre = "Santiago";
const apellido1 = " Ramirez"
const apellido2 = " Pulgarin"
console.log(nombre+apellido1+apellido2);


let numero = 15;
console.log(numero + 5);

let booleano = true;
console.log(!booleano);

let  elementos = [1, 2, 3, 6];
console.log(elementos.length);


let numeroDecimal = 8.99;
let numeroRedondeado = Math.floor(numeroDecimal);

console.log(numeroRedondeado); 

let base = 2;
let exponente = 3;
let resultadoPotencia = Math.pow(base, exponente);

console.log(resultadoPotencia); 

//Métodos propios de JavaScript. Con eso Strings y Math

let mensaje = "Hola, mundo!";
let mensajeEnMayusculas = mensaje.toUpperCase();
let mensajeEnMinusculas = mensaje.toLowerCase();

console.log(mensajeEnMayusculas); // Imprimirá "HOLA, MUNDO!"
console.log(mensajeEnMinusculas); // Imprimirá "hola, mundo!"

//Saca raiz Cuadrada 

const raiz = (number) =>{
    return  Math.sqrt(number)
}
console.log(raiz(50))


/* 
Arreglos usando funciones tipo flecha. 
*/ 

//1.Agregar elemento al inicio
let frutas = ["Manzana", "Banana", "Naranja"];
frutas.unshift("Uva");
console.log("Fruta", frutas);

//2.Busca los nombre por la letra que empieza 
let nombres =["Camilo","Santiago", "Esneyder", "Juan", "Sebastián"]

let filtro= nombres.filter(pais=>{
    return pais.startsWith("C")
})

console.log(filtro);


//3.Duplicar cada elemento y saludo a cada persona de arreglo anterior 
const saludo = nombres.map(name =>{
    return "Hola "+ name + " ¿Cómo estás?";
})
console.log(saludo);

//4.Reduce los números y los suma
let number= [50, 75, 100, 125, 150];
let resultado = number.reduce((acumula, valor) => {
    return acumula+valor;
});

console.log(resultado);


// 5.Crear un nuevo array con números pares
let numeros = [3, 8, 12, 20, 5, 18, 21, 16];
let numerosPares = numeros.filter(numero => {
    return numero % 2 === 0
});
console.log(numerosPares);

//6. Concatena dos arreglos
const uno = ["a", "b", "c"].concat(["x", "y", "z"]);
console.log( uno);


//7. Convertir arreglos a mayúsculas
const palabra = ["perro", "gato", "loro"];

const convertir= palabra.map(palabra => {
    return palabra.toUpperCase();
})
console.log(convertir);

//8. Eliminar elementos mayores a 50
const numbers = [30, 60, 80, 40, 90];
let mayores =numbers.filter(num =>{
    return num <= 50
});
console.log(mayores);

//9. Convertir arreglos a minúsculas
const palabra2 = ["COCHE", "CASA", "ÁRBOL"];
const minuscula= palabra2.map(palabra => {
    return palabra.toLowerCase();
})
console.log(minuscula);


//10. Agregar elementos al final
const colores = ["Rojo", "Verde", "Azul"];
colores.push("Amarillo", "Naranja");
console.log(colores);