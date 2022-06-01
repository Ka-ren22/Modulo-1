'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}


let arbol = new BinarySearchTree(20);  //nodo raiz


BinarySearchTree.prototype.insert = function(value){
	//if (value === this.value){ 
	//	this.right = new BinarySearchTree(value);
		 // } 
	if (value > this.value) {  // si valor es mayor al nodo raiz lo ingreso a la derecha
		if (!this.right) {
			this.right = new BinarySearchTree(value);    //si no hay nada lo coloco a la derecha
		} else {
			this.right.insert(value); //llamo a la recursion --> voy para atras en el recorrido
			}
	}
	else{  //si le valor es menor al nodo lo ingreso a la izquierda
			if (!this.left) {  //si no hay nada lo inserto
				this.left = new BinarySearchTree(value);
			} 
			else {
				   this.left.insert(value);
		}
	}	
};


//function mostrar(valor){
//		console.log(valor);
//	}
BinarySearchTree.prototype.depthFirstForEach= function(cb,recorrido){  //usamos cb para saber en que posicion esta el nodo
	if (recorrido === 'pre-order') {  //como en el argumento me pasan el orden, se repite en los 3 ciclos
		cb(this.value);
		if (this.left) {
			this.left.depthFirstForEach(cb,recorrido);
		}
		if (this.right) {
			 this.right.depthFirstForEach(cb,recorrido);
				}
		} else if (recorrido === 'post-order') {
			if (this.left) {
			this.left.depthFirstForEach(cb,recorrido);
		}
		if (this.right) {
			 this.right.depthFirstForEach(cb,recorrido);
				}
		cb(this.value);		
			} else {
				if (this.left) {
					this.left.depthFirstForEach(cb,recorrido)
				}
				cb(this.value);
		if (this.right) {
			this.right.depthFirstForEach(cb,recorrido)
		}
			}
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb,array=[]){
	//Paso el array por parametro porque quiero ir sumando todos los arboles en el mismo array

		if (this.left) {
			array.push(this.left); //pusheo lo de la izq --> formp una queue
		}
		if (this.right) {
			array.push(this.right) //pusheo lo de la der --> formp una queue
		}
		cb(this.value);
		if (array.length > 0) {
			array.shift().breadthFirstForEach(cb,array); //saco el 1° valor y ejecuto el resto
		}
	
};

BinarySearchTree.prototype.size = function(){  //size: 1 - izq + der
	if (!this.left && ! this.right) {return 1;}
		else if (this.left && this.right) {return 1 + this.left.size()+ this.right.size();}
			else  if (this.left) {return 1 + this.left.size();}
				else if (this.right) {return 1 + this.right.size();}
};

BinarySearchTree.prototype.contains = function(value){
	if(value === this.value){return true;}

	if(this.left){
		if(this.left.contains(value)){
		return true;
		}

	}
	if(this.right){
		if(this.right.contains(value)){
			return true;
		}
	}

	return false;
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
