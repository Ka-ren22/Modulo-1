
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

/* 
La sentencia var declara una variable, opcionalmente inicializándola con un valor.

Asignar un valor a una variable no declarada implica crearla como variable global (se convierte en una propiedad del objeto global) cuando la asignación es ejecutada. Las diferencias entre una variable declarada y otra sin declarar son:

1. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.

2. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.


3. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse).

*/
```javascript
x = 1;  //1
var a = 5; //Global
var b = 10; //Global
var c = function(a, b, c) {
  var x = 10; //Local
  console.log(x); //10
  console.log(a); //8
  var f = function(a, b, c) {
    b = a; //Local
    console.log(b); //8
    b = c; //Local
    var x = 5; //Local
  }
  f(a,b,c);
  console.log(b); //9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // 1
console.log(baz); // undefined baz no esta definida
foo(); // 'Hola'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";  //var se pisa cuando se reasigna, toma el ultimo valor agregado dentro de su contexto
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //"Franco" --> reasigna la variable
```

```javascript
var instructor = "Tony";
console.log(instructor); //"Tony"
(function() {  //Otro contexto de ejecucion
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony --> toma el valor del global
```

```javascript
var instructor = "Tony";  //var se pisa cuando se reasigna
let pm = "Franco";  //let es fija
if (true) {  //otro contexto de ejecucion
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The Flash
    console.log(pm); //Reverse Flash
}
console.log(instructor); //Tony  --> mira al global
console.log(pm); //Franco  --> mira al global
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "45px" -->concatena
"$" + 4 + 5 // "$45" -->concatena
"4" - 2 // 2  --> lo toma como 2 numeros
"4px" - 2 // Nan --> operaciones matematicas solo definidas para numeros
7 / 0 // Infinito
{}[0] // [0] --> devuelve la posicion 0 del arr
parseInt("09") // 9
5 && 2 //  2 ->devuelve el ultimo
2 && 5 // 5 
5 || 0 // 5 --> devuelve el true
0 || 5 // 5
[3]+[3]-[10] // 
3>2>1 //true
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //1
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // 2
		
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //'Meow Mix' --> como no lo tiene apunta al global
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio de la Rosa

var test = obj.prop.getFullname;

console.log(test()); //Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); //1º
   setTimeout(function() { console.log(2); }, 1000); // 4ª
   setTimeout(function() { console.log(3); }, 0); //3ª
   console.log(4); // 2ª
}

printing();
```
