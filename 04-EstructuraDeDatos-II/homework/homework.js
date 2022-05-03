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

function LinkedList() {

	this._length = 0;
	this.head = null;
}

function Node(value){
	this.value = value;
	this.next = null;
}

let list = new LinkedList();

LinkedList.prototype.add = function(value) {
	let node = new Node(value);
	let current = this.head;
	if (!this.head) {
		this.head = node;
		return node;
	} 
		while(current.next){
			current = current.next;
		}
		current.next = node;
		return node;
};

	list.add();

LinkedList.prototype.remove = function(value) {


if(this.head === null){ //head vacio 
		 return false;
	}
	else if(this.head && !this.head.next){   //hay head pero no elemento siguiente
		let node1 =this.head.value;
		this.head = null;
		return node1;
	}
		while(current.next.next){ //Mientras haya elemento siguiente
			current = current.next; //Me muevo al siguiente elemento
			let node1 = current.next.value; //guardo la informacion en una variable antes de remover
			current.next = null; //remuevo el ultimo elemento y queda en null
			return node1;
		}
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
}

HashTable.prototype.hash= function(key){
	let sum = 0;
	for (let i = 0 ; i < key.length ; i++) {
		sum += key.charCodeAt(i) //suma la cantidad de caracteres del key
	}
	return sum % this.numBuckets;  //retornar el resto de la suma divido el numero de Buckets
};

HashTable.prototype.set= function(key, value){
	if (typeof key!== 'string') {
		throw new typeError ("Keys must be string");
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
};

HashTable.prototype.hasKey= function(key){
	let i = this.hash(key);
	return this.buckets[i].hasOwnProperty[key];
};






// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
