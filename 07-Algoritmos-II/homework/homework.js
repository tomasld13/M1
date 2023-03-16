'use strict'

const DeleteRequireCache = require("@11ty/eleventy/src/Util/DeleteRequireCache");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array;
  }
  let pivote = Math.floor(array.length / 2);
  let arrayOrdenadoDerecha = []
  let arrayOrdenadoIzquierda = []
  for(let i = 0; i < array.length; i++){
    if(array[i] < array[pivote] && i !== pivote){
      arrayOrdenadoIzquierda.push(array[i])
    }else if(array[i] > array[pivote] && i !== pivote){
      arrayOrdenadoDerecha.push(array[i])
    }else if(array[i] === array[pivote] && i !== pivote){
      arrayOrdenadoDerecha.push(array[i])
    }
  }
  return quickSort(arrayOrdenadoIzquierda).concat(array[pivote],quickSort(arrayOrdenadoDerecha));
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array;
  }
  var mid = Math.floor(array.length / 2)
  let left = array.slice(0,mid)
  let right = array.slice(mid)
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left,right){
  var leftIndex = 0;
  var rightIndex = 0;
  var merged = [];
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      merged.push(left[leftIndex])
      leftIndex++
    }else{
      merged.push(right[rightIndex])
      rightIndex++
    }
  }
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
