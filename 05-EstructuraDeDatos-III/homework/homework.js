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
	this.right =  null;
}
var nodo = new BinarySearchTree();



BinarySearchTree.prototype.insert = function(value){
	if (!this.value) {
		return null;
		this.value = new nodo(value);
	}
	while(this.value){
	if (this.left) { return false;}			//verifico si la izq esta llena
	else if (!this.left && value < this.value) {   //si no lo esta y el valor es menor a this.value la inserto
		 insert(this.value);
		}
	else if (this.right) {return false;}  //verifico si la der esta llena
	else if (!this.right && value > this.value) {  //si no lo esta y el valor es mayor a this.value, la inserto
		 insert(this.value);
		}
	}
};
BinarySearchTree.prototype.contains = function(value){
	while(this.value){ //mientras haya nodo
		if (!this.left &&!this.right) {  //si no hay nada en izq ni derecha --> false
		return false;
	}else if (this.left === value) {  //si esta en izq --> true
		return true;
	} else if (this.right === value) {  //si esta en derecha -->  true
		return true;
		}
	}
	return false;
};
BinarySearchTree.prototype.depthFirstForEach= function(){
	if (!this.value) {  //si no hay nodo
		return false;
	}
	while(this.value){   //mientras haya nodo
	if(!this.left && ! this.right ) {
	return false;    //in-order--> izquierda-nodo-derecha
	}
	 else if (this.left && this.right) {  //si hay izq y der
	 	return depthFirstForEach(this.left);
		return depthFirstForEach(this.value);
		return depthFirstForEach(this.right)
	 }
	if(this.value){ //pre-order
	if (this.left && this.right) {
		depthFirstForEach(this.value);
		depthFirstForEach(this.left);
		depthFirstForEach(this.right);
	} 
		
	}
	if (this.value) {  //post-order
		if (this.left && this.right) {
		depthFirstForEach(this.left);
		depthFirstForEach(this.node);
		depthFirstForEach(this.right);
				} 
			} 
		}  
};

BinarySearchTree.prototype.breadthFirstForEach= function(){
	if(!this.value){
		return false;
	}
	while(this.value){
		if (this.left && this.right) {
		depthFirstForEach(this.node);
		depthFirstForEach(this.left);
		depthFirstForEach(this.right);
				} 
	}
};

BinarySearchTree.prototype.size= function(){
	sum = 0;
	if (!this.value) {
		return false;
	}
	while(this.value){
		if(this.left && this.right){
			this.value = 1;
		}
		sum += this.value;
		return size(sum);
	}
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
