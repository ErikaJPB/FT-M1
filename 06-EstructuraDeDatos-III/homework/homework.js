"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {

    this.value = value;
    this.right = null;
    this.left = null;


}

  BinarySearchTree.prototype.size = function () {


    // caso de corte, si el leaf node no tiene ni right ni left

    if (this.left === null && this.right === null) return 1;1

     // si tiene un solo hijo

    if (this.left === null)  return 1 + this.right.size()

    if (this.right === null) return 1 + this.left.size()
      
      
   // si tiene ambos hijos

    return 1 + this.left.size() + this.right.size()

    }



    BinarySearchTree.prototype.insert = function (value) {

     //si es mas grande -- > derecha

     if (value > this.value) {
      
     if (this.right === null) {
          this.right = new BinarySearchTree(value);
       
      } else {
        // recursion.. porque esta ocupado el espacio, debe devolverse
      
      this.right.insert(value);

      }

    } else {
      // si es mas pequeno --- > izquierda
     
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BinarySearchTree(value);
        } else {
          
          this.left.insert(value)
        }
      }
    }
  }
  

    BinarySearchTree.prototype.contains = function (value) {

      if (this.value === value) return true;
      

      if (value <= this.value && this.left !== null) {
        return this.left.contains(value);
      } else if (value > this.value && this.right !== null) {
        return this.right.contains(value)
      } else {
        return false;
      }
    }


    BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
      
      if (order === "in-order" || order === undefined) {
        //izquierda,nodo,derecha 
        // undefined, porque no esta definido, o !order


        this.left !== null && this.left.depthFirstForEach(cb,order); 
          cb(this.value);
          this.right !== null && this.right.depthFirstForEach(cb,order);

        } else if (order === "pre-order") {
          //nodo, izquierda, derecha, 
          cb(this.value);
          this.left !== null &&  this.left.depthFirstForEach(cb,order);
          this.right !== null && this.right.depthFirstForEach(cb,order);
        } 
        else {
          //post-order = izquierda, derecha, nodo
          this.left !== null &&  this.left.depthFirstForEach(cb,order);
          this.right !== null && this.right.depthFirstForEach(cb,order);
          cb(this.value);
        }
    }


    BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {

      //Por niveles
      //Usar arreglos para guardar los niveles, porque los
      //siblings no tienen relacion
      

      if (!array) {
      var array = [];
      }

      //se ejecuta el cb con el valor que nos pasan
      cb(this.value);

      //pusheamos los valores en el array, tanto del hijo dederecha e izquierda
      // se pushea todo lo de la izquierda, no solo el value;

      if (this.left !== null) array.push(this.left);

      if (this.right !== null) array.push(this.right);

      // usar shift.. para sacar el primer valor
      
      // el shift se va a usar hasta que el arreglo tenga length;
      // cuando tenga 0 entonces dara false y no pasara al shift;

      if (array.length !== 0) {
        array.shift().breadthFirstForEach(cb, array);

    }

  }
  

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
