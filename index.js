// 1. some()
// Verifica si algún elemento del arreglo cumple cierta condición
const numeros = [3, 7, 10, 18, 21];
// Verifica si hay algún número mayor que 15
const hayMayorA15 = numeros.some(num => num > 15);
console.log(hayMayorA15 ? 'Hay números mayores a 15' : 'Ningún número es mayor a 15'); 
// Verifica si algún número es par
const hayPar = numeros.some(num => num % 2 === 0);
console.log(hayPar ? 'Hay números pares en el arreglo' : 'Todos los números son impares'); 


// 2. every()
// Comprueba si todos los elementos cumplen una condición
const edades = [18, 22, 30, 25, 19];
 // Verifica si todos son mayores o iguales a 18
const todosMayores = edades.every(edad => edad >= 18);
console.log(todosMayores ? 'Todos son mayores o iguales a 18' : 'Hay menores de 18');
// Verifica si todos son números pares
const todosPares = edades.every(edad => edad % 2 === 0);
console.log(todosPares ? 'Todos son pares' : 'Al menos una edad es impar'); 


// 3. fill()
// Rellena partes de un arreglo con un valor específico
let letras = ['a', 'b', 'c', 'd', 'e'];

// Se usa un arreglo copiado para no modificar el original 
let letras1 = [...letras];
// Rellena las tres primeras posiciones con x
console.log(letras1.fill('x', 0, 3)); 

let letras2 = [...letras];
console.log(letras2.fill('z', 2, 4)); 

// 4. filter()
// Crea un nuevo arreglo con los elementos que cumplen una condición
const productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },    
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Monitor', precio: 300 }
];

// Filtra los productos que cuesten más de 100
const caros = productos.filter(p => p.precio > 100);
console.log(caros.length > 0 ? caros : 'No hay productos caros'); 

// Filtra los productos cuyo nombre tenga más de 5 letras
const nombreLargo = productos.filter(p => p.nombre.length > 5);
console.log(nombreLargo.length > 0 ? nombreLargo : 'Nombres muy cortos');

// 5. find()
// Devuelve el primer elemento que cumpla la condición
const alumnos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carmen', edad: 19 }
];

// Encuentra al primer alumno mayor de 18 años
const mayorDeEdad = alumnos.find(a => a.edad > 18);
console.log(mayorDeEdad ? `El mayor es ${mayorDeEdad.nombre}` : 'No hay mayores de 18'); 
// Encuentra al alumno cuyo nombre sea 'Luis'
const luis = alumnos.find(a => a.nombre === 'Luis');
console.log(luis ? "Luis sí esta" : 'Luis no está'); 

// 6. findIndex()
// Devuelve el índice del primer elemento que cumpla la condición
const frutas = ['manzana', 'plátano', 'pera', 'fresa', 'uva']; 
// Encuentra el índice de la pera
const indicePera = frutas.findIndex(f => f === 'pera');
console.log(indicePera !== -1 ? `Pera está en el índice ${indicePera}` : 'No se encontró la pera'); 
// Encuentra el índice de la primera fruta con más de 5 letras
const indiceLarga = frutas.findIndex(f => f.length > 5);
console.log(indiceLarga !== -1 ? `Primera fruta > 5 letras en índice ${indiceLarga}` : 'No hay frutas de más de 5 letras'); 


// 7. Set
// Estructura de datos que no permite valores duplicados
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];
// Crea un Set para eliminar los duplicados
const setNumeros = new Set(numerosDuplicados); 
// Convierte el Set nuevamente a un arreglo sin duplicados
const sinDuplicados = [...setNumeros]; 
console.log('Arreglo sin duplicados:', sinDuplicados);

const nuevoNumero = 6;
// Agrega un nuevo número al Set y verifica si ya existe
setNumeros.has(nuevoNumero) ? console.log('El número ya existe en el Set') : (setNumeros.add(nuevoNumero), console.log(`Se agregó el número ${nuevoNumero}`)); 

// 8. 
const personas = [
    { nombre: 'Ana', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Carlos', edad: 17, ciudad: 'México' },
    { nombre: 'Beatriz', edad: 22, ciudad: 'Colombia' }
];

// Filtra las personas mayores de 18 años
const mayores = personas.filter(p => p.edad > 18);
console.log(mayores.length > 0 ? mayores : 'No hay personas mayores de edad');

// some() para saber si hay alguien de Madrid
const hayMadrid = personas.some(p => p.ciudad === 'Madrid');
console.log(hayMadrid ? 'Sí hay alguien de Madrid' : 'Nadie es de Madrid');

// every() para verificar si todos son mayores de edad
const todosSonMayores = personas.every(p => p.edad >= 18);
console.log(todosSonMayores ? 'Todos son mayores de edad' : 'Al menos uno es menor de edad');

// find() para obtener la primera persona de México
const personaMexico = personas.find(p => p.ciudad === 'México');
console.log(personaMexico ? `La persona de México es ${personaMexico.nombre}` : 'No hay nadie de México');

// findIndex() para obtener la posición de Ana
const indiceAna = personas.findIndex(p => p.nombre === 'Ana');
console.log(indiceAna !== -1 ? `Ana está en la posición ${indiceAna}` : 'Ana no se encuentra en el arreglo');