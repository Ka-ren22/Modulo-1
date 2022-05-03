'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [];  //array para guardar los divisores
  let divisor = 1;
  while(num % divisor === 0) {
    array.push(divisor);
  }
  return array.join(''); 
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let nuevoArray;    //creo array para ordenar los valores
  for (var i =0 ; i < array.length ; i++) {   //ciclo for para recorrerlo
     if (array[i] < array[i+1]) {   //si la posicion1 < a la dos, retorno 1
    return array[i];
    } else if ( array[i] > array[i+1]) {  //si la 1 es mayor a la 2, retorno el dos
      return array[i+1 ]; 
  }
   return nuevoArray.push(array[i]);
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let nuevoArray = [];
  for (var i = 0 i < array.length ; i++) {
    if (array[i] < array[i+1]) {
      return array[i];
    } else if (array[i] > array[i+1]) {
      return array[i+1];
    }
    else if (array[i] < array[i+1+i]) {
      return array[i];
    }
  }
  return nuevoArray.push(array[i])
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  let nuevoArray = [];
  for (var i = 0; i < array.length ; i++) {
    if (array[i] < array[i+1]) && array[i] < array[i++] {
      return array[i];
    } else if (true) {}
  
  }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
