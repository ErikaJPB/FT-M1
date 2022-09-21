'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

//dividir el numero en 2

    var array = [1]; // es primo de todos por eso el 1

    var div = 2; // para empezar a dividir 

      while (num !== 1){
       if (num % div === 0) { // para saber si es primo
          array.push (div)
            num = num / div
       } else {
       div++
   }
  }

return array;


}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // va comparando el primero con el segundo y lo swapea, mas grande al final


  // swap

  
// [5, 1, 4, 2, 8]
//  i
//    i+1
// aux = guarda lo de i, luego lo pisa y devuelve aux.
 

 let swap = true;

 while (swap) {

  swap = false;

  for (let i = 0; i < array.length-1; i++) {
   if (array[i] > array[i+1]) {

      let aux = array[i]

      array[i] = array[i+1]

      array[i+1] = aux  
    
      swap = true;
     }
  }
 }
    return array;

}
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // [5, 1, 4, 2, 8]
  //     i 
  //  j 

  // var aux que guarde i y lo suelta en 0 o cuando o adelante de un valor mas pequeno

  // lo saca y compara con los de atras hasta que lo ubica


  for (let i = 1; i < array.length; i++ ) {
    let j = i - 1;
    let aux = array[i];

    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j]
      j--;

    }

    array[j+1] = aux;
  }
  
    return array;

}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // selecciona el primero y lo va a cambiar por el mas pequeno que encuentre en el array, luego el segundo, tercero etc.

// [5, 1, 4, 2, 8]
//  i 
  //   j 
  // min

  for (var i = 0; i < array.length; i++){
    var min = i
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    if (i !== min) {
    var aux = array[i];
    array[i] = array[min];
array [min] = aux;
    }
  } 
  
  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
