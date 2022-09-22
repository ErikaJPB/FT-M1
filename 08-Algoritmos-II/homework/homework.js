'use strict'

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

//Quick sort : Pivote / menores izquierda y mayores a la derecha 



// Caso base porque vamos a hacer recursion
if (array.length <= 1) return array; // [5] --> ya esta ordenado, lo puedo retornar

let pivot = array[Math.floor(Math.random()*array.length)];//array[Math.floor(array.length - 1/2)]; // o se puede hacer el mathfloor del math random *array.length
let left = []; // para los menores
let right = []; // para los mayores
let middle = []; // pivote o igual a el
 //los que son iguales los mandamos a la izquierda o a la derecha o podemos hacer otra variable middle.


 
 for (let i = 0; i < array.length; i++) {
  if (array[i] < pivot) {
    left.push(array[i])
  } else if (array[i] > pivot) {
    right.push(array[i])
  } else {
    middle.push(array[i])
  }
 
}

 return quickSort(left).concat(middle).concat(quickSort(right));
 


}




  function letsMerge(left, right) {

    // Dos punteros, uno para el arreglo izquierdo y el otro el derecho
    let i = 0; //array izquierdo
    let j = 0;  //array derecho
    let array = [];

      while (i < left.length && j < right.length) {
        // mientras i y j sean menor al length de los arrays va a entrar
        if (left[i] < right[j]) {
          array.push(left[i])
          i++;
        } else {
          array.push(right[j])
          j++;
        }
      } 

       return array.concat(left.slice(i)).concat(right.slice(j));

  }



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


  if (array.length === 1) return array;

  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length)

return letsMerge(mergeSort(left),mergeSort(right));
 

}

// Hacer funcion que une los arreglos

// EN UNA SOLA FUNCION SIN NECESIDAD DE HACER MAS

// if (array.length < 2) return array;

// const half = Math.floor(array.length/2);
// let left = array.slice(0, half);
// let right = array.slice(half, array.length);


// array = [];

// left = mergeSort(left);
// right = mergeSort(right);

// while(left.length && right.length) {
//   if (left[0] < right[0]){
//     array.push(left.shift());
//   } else {
//     array.push(right.shift());
//   }
// }

// array = array.concat(left, right)

// return array;






// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
