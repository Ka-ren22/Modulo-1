'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {  //Estructura de la lista vacia

	this._length = 0;
	this.head = null;
}

function Node(value){
	this.value = value;
	this.next = null;   //Me permite avanzar en la lista
}

let list = new LinkedList();

LinkedList.prototype.add = function(value) {  //agrego al final
	let node = new Node(value);    //Creo un nodo para agregar
	let current = this.head;		//variable que guarde las referencias --> primero estoy en el head
	if (!current) {					//si no hay head --> ubico el nuevo nodo
		this.head = node;
		return node;
	} 
		while(current.next){      //mientras exita nodo siguiente al next
			current = current.next;  //avanzo
		}
		current.next = node;		//me posiciono en el siguiente nodo
 		return node;
};


LinkedList.prototype.remove = function(value) {   //remuevo al final

let current = this.head;
if(this.head === null){ //head vacio 
		 return null;
	}
	else if(this.head && !this.head.next){   //hay head pero no elemento siguiente --> un solo elemento
		let aux = this.head.value;
		this.head = null;  //elimino el head y me queda apuntando a null
		this._length--;
		return aux;
	}								//	Para n elementos
		while(current.next.next){ //Mientras haya elemento siguiente
			current = current.next;	
		}
		let aux1 = current.next.value; 
		current.next = null; 
		this._length--;
		return aux1;
};		


LinkedList.prototype.search = function(value) {
	if(this.head === null){   //si el head es null --> null
		return null;
	}
	let current = this.head; //guardo la ref en una variable para identificar si es value o function
	while(current){   //mientras exista current
		if(current.value === value){   //el valor de value sea igual al valor ingresado
			return current.value;  //retornar el valor
		}else if(typeof value === 'function'){   //sino, evaluar si el tipo de dato es una funcion
			if (value(current.value)) {  // si el valor coincide con el ingresado
				return current.value; //retornar el valor
			}
		}
		current = current.next;  // currente se mueve al siguiente valor para analizar
	}
	return null;  // si no encuantra nada retorna null
};

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
	this.numBuckets = 35;
	this.buckets = [];

}

HashTable.prototype.hash= function(key){
	let sum = 0;
	for (let i = 0 ; i < key.length ; i++) {   //recorro el string
		sum += key.charCodeAt(i); //devuelve la posicion del arreglo, tengo que indicar la posicion de la cadena, en este caso es(i)
	}
	return sum % this.numBuckets;  //retornar el resto de la suma divido el numero de Buckets
};

HashTable.prototype.set= function(key, value){
	if (typeof key!== 'string') {
		 throw new TypeError("Keys must be string");

	}
	let i = this.hash(key); //guardo el valor en la variables
	if (this.buckets[i] === undefined) {
		this.buckets[i]={};
	}
	this.buckets[i][key] = value;
};

HashTable.prototype.get= function(key){
	let i = this.hash(key);
	return this.buckets[i][key];
};0

HashTable.prototype.hasKey= function(key){
	
	let i = this.hash(key);
	if (this.buckets[i]){
		return this.buckets[i].hasOwnProperty(key);
	} else{
		return false;
	}

};






// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
