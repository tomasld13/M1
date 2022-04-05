'use strict'

const { off } = require("process");

// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value){
    if(value === this.value){
      return undefined;
    }
    if(value < this.value){
      if(!this.left){
        this.left = new BinarySearchTree(value);
      }else{
        this.left.insert(value);
      }
    }
    if(value > this.value){
      if(!this.right){
        this.right = new BinarySearchTree(value);
      }else{
        this.right.insert(value);
      }
    }
  }
  
  contains(search){
    if(this.value === search){
      return true;
    }else if(this.left === search){
      return true;
    }else if(this.right === search){
      return true;
    }
    if(this.left != null){
      if(this.left.contains(search)){
        return true;
      }
    }
    if(this.right != null){
      if(this.right.contains(search)){
        return true;
      }
    }
    return false;
  }
  
  depthFirstForEach(cb,order){
    let values = [];
    if(order === "pre-order"){
      cb(this.value)
      if(this.values){
        values.push(this.value);
      }
      if(this.left){
        values.push(this.left.depthFirstForEach(cb,order));
      }
      if(this.right){
        values.push(this.right.depthFirstForEach(cb,order));
      }
    }else if(order === "post-order"){
      if(this.left){
        values.push(this.left.depthFirstForEach(cb,order));
      }
      if(this.right){
        values.push(this.right.depthFirstForEach(cb,order));
      }
      if(this.values){
        values.push(this.value);
      }
      cb(this.value)
    }else{
      if(this.left){
        values.push(this.left.depthFirstForEach(cb,order));
      }
      if(this.values){
        values.push(this.value);
      }
      cb(this.value)
      if(this.right){
        values.push(this.right.depthFirstForEach(cb,order));
      }
    }
  }
  
  breadthFirstForEach(cb, queue){
    if(!queue){
      var queue = [];
    }
    if(this.left){
      queue.push(this.left)
    }
    if(this.right){
      queue.push(this.right);
    }
    cb(this.value)
    if(queue.length > 0){
      queue.shift().breadthFirstForEach(cb,queue)
    }
  }
  
  size(){
    if(!this.left && !this.right){
      return 1;
    }
    else if(!this.left){
      return 1 + this.right.size();
    }else if(!this.right){
      return 1 + this.left.size();
    }
    return 1 + this.left.size() + this.right.size();
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
