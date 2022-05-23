"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  /*
  Separar los datos, uso split();
  Por cada uno de ellos hago una operacion matematica.
  Los sumo en un resultado final.
  */
  // Primera forma:

  //var arreglo = num.split(""); //separa los datos en un array
  //var resultado = 0;
  //for (var i =0 ; i< num.length ; i++) {
  //	resultado = resultado + arreglo[i] *Math.pow(2, num.length -1 -i);
  //}
  //return resultado;

  //Segunda forma:
  let resultado = 0;
  let numeroSeparado = num.split("");
  for(let i = 0 ; i < num.length ; i++){
      resultado = resultado + numeroSeparado[i]*2 **(num.length-1-i);
  }
  return resultado;
}

console.log(BinarioADecimal("100"));


function DecimalABinario(num) {
  // tu codigo aca
  /*
  Tomo el numero y lo divido por 2
  Divido hasta que el resultado sea 0
  Tomo todos los restos para formar el binario
  Los guardo en un array
  */
 //Primera forma
  //if (num < 0 ) {
  //	return "Enviar un numero mayor a cero";
  //}
  //var arreglo =[]; 

  //while(num > 0){
  //	arreglo.unshift(num%2);
  //	num = Math.floor(num/2);
  //}  
  //return arreglo.join("");
  
//Segunda forma

  let resultado = [];
  while(num > 0){
    resultado.unshift(num%2);
    num = Math.floor(num/2);
  }
return resultado.join("");
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
