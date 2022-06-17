'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //Elijo un pivote que actua de mediana y divide el array en 2, quedando los valores menores y mayores entre el
  //Repito el ciclo hasta que no tenga pivotes por elegir
  //Los comparo a medida que los divido
  //Los junto en un array

if (array.length <= 1) {return array;}
let pivote = array[Math.floor(Math.random()*array.length)];
let izq = [];
let der = [];
let ordenados = [];

for (let i = 0 ; i < array.length; i++) {
  if (array[i]<pivote) {
    izq.push(array[i]);
  } else if (array[i]>pivote) {
    der.push(array[i]);
  } else{
    ordenados.push(array[i]);
  }
}
return quickSort(izq).concat(ordenados).concat(quickSort(der));


  /*var resultado = [];
  if (array.length / 2 === 1) {   //condicion de corte
  	return false;
  } else (array.length / 2 !== 1){   //division distinta de 1 --> for
  	for (var i = 0 ; i < array.length ; i++) {
  		if (array[i] > array[i-1] && array[i] < array[i+1] ) {   //condicion de pivote
  			var aux = array[i];      //guardo el pivote
  			if (array[i] > array[i-1]) { //pivote > al sig elemento
  				var aux1 = [];
  				aux1.push(array[i-1])
  			}   
  			else if (array[i] < array[i+1]) {  //pivote < al siguiente elemento
  				var aux2 = [];
  				aux2.push(array[i+1]);
  			}
  			
  		}
  	}
*/
}
 //resultado =aux1 + aux  + aux2;  //junto los arrays
 //return quickSort(resultado).join('');  //recursion y los dejo todos en un solo array

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //Divido sucesivamente sobre 2 hasta que el resultado sea 1
  //Comparo los elementos de la subdivision
  //Ordeno
if(array.length <= 1) return array;

const i= Math.floor(array.length/2);
let left =(array.slice(0,i));
let right = (array.slice(i));

left = mergeSort(left);
right = mergeSort(right);

let result = [];

while(left.length && right.length){
  if(left[0] > right[0]){
    result.push(right.shift());
  }else {
    result.push(left.shift());
  }
}
 return [...result, ...left, ...right];
}

//if (array.length <=1) { return array;}
//let division = elQueDivide(array);
//let left = division[0];
//let right = division[1];
//return mezcla(mergeSort(left),mergeSort(right));

/*function elQueDivide(array){
  let medio = Math.floor(array.length/2);
  let left = array.slice(0,medio);
  let right = array.slice(medio);
  return [left, right];
}

function mezcla(izq,der){
  let iIzq = 0;
  let iDer = 0;
  let array = [];

  while(iIzq < iIzq.length && iDer < iDer.length){
    if (left[iIzq]< der[iDer]) {
      array.push(izq(iIzq));
      iIzq++;
    } else {
      array.push(der(iDer));
      iDer++;
    }
  }
  return array.concat(izq.slice(iIzq)).concat(der.slice(iDer));
  }

*/
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
