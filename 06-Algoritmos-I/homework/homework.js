'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
 
  let factores = [1];  //array para guardar los divisores, el primero es 1
  let divisor = 2;   //divido por 2 hasta que no pueda mas y despues incremento
  while(num  !== 1) {
    if (num % divisor === 0) {
      factores.push(divisor);
    }else {
      divisor++;
    }
  }
  return factores; 
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 
var huboCambio = true;
while(huboCambio){
  huboCambio = false;
  for (let i = 0 ; i < array.length ; i++) {
    if (array[i] > array[i+1]) {
      let aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;
      huboCambio = true;
    }
  }
}
return array;

  /*
  const l = array.length;
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( array[ j ] > array[ j + 1 ] ) {
        [ array[ j ], array[ j + 1 ] ] = [ array[ j + 1 ], array[ j ] ];
      }
    }
  }

  return array;
*/



  /*
  let nuevoArray;    //creo array para ordenar los valores
  for (var i =0 ; i < array.length ; i++) {   //ciclo for para recorrerlo
     if (array[i] < array[i+1]) {   //si la posicion1 < a la dos, retorno 1
    return array[i];
    } else if ( array[i] > array[i+1]) {  //si la 1 es mayor a la 2, retorno el dos
      return array[i+1 ]; 
  }
   return nuevoArray.push(array[i]);
   */
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

for (let i = 0 ; i < array.length;  i++) {
  var x = i-1;
  var aux = array[i];
  while(x >= 0 && array[x] >aux){
    array[x+1] = array[x];
    x = x-1;
  }
  array[x+1] = aux;
}
return array;



 /* const l = array.length;
  let j, temp;

  for ( let i = 1; i < l; i++ ) {
    j = i;
    temp = array[ i ];
    while ( j > 0 && array[ j - 1 ] > temp ) {
      array[ j ] = array[ j - 1 ];
      j--;
    }
    array[ j ] = temp;
  }

  return array;

  
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
  */
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

for (let i =0; i < array.length; i++) {
  let minimo = i;
  for (var x = i+1 ; x < array.length;  x++) {
    if (array[x] < array[minimo]) {
      minimo = x;
    }
  }
  if (minimo !== i) {
    let aux = array[i];
    array[i] = array[minimo];
    array[minimo] = aux;
  }
}
return array;
  /*
  for ( let j = 0; j < array.length; ++j ) {
    let i = iMin = j;
    for ( ++i; i < array.length; ++i ) {
      ( array[ i ] < array[ iMin ] ) && ( iMin = i );
    }
    [ array[ j ], array[ iMin ] ] = [ array[ iMin ], array[ j ] ];
  }

  return array;

  let nuevoArray = [];
  for (var i = 0; i < array.length ; i++) {
    if (array[i] < array[i+1]) && array[i] < array[i++] {
      return array[i];
    } else if (true) {}
  
  }
  */
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
