'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.
//
function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)

  /*Recursión:
  	Condiciones:
  		1) Una función que se llame así misma en su ciclo de ejecución
  		2)Que tenga una condición de corte, sino rompe el código en un ciclo infinito

 	*/
 	
 	if (n > -1 && n < 2) {		//Caso de corte
 		return 1;
 	}
 		else if (n < 0) {
 			return 0;
 		}
 	console.log(n);
 	return n * nFactorial(n-1);  //llama a la recursion

/*	for (var i = 0 i<2; i++) {
		console.log(i)
	}
		return n * nFactorial(n-1);
		*/
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8

  //Triangulo de Tartaglia 

  if (n>=0 && n<2) {   //Condicion de corte
  	return n;	
  }
  return nFibonacci(n-1) + nFibonacci(n-2)   //Llama a la recursion

}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {    //Clase, responde al this
	this.array =[];
     }
let queue1 = new Queue();  //Instancia

Queue.prototype.size = function() {   //Metedos de la clase --> prototype

        return this.array.length; //devuelve numero de elementos
    }

Queue.prototype.enqueue = function(value) {
         return this.array.push(value);   //agrega un valor al final
    }

Queue.prototype.dequeue = function() {
        return this.array.shift();  //saca el primer elemento del array
    }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
