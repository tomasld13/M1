'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1]; 
  let div = 2;
  while(div <= num){
    if(num % div === 0){
      if(esPrimo(div)){
        while(num % div === 0){
          factores.push(div);
          num /= div;
        }
      }
    }
    div++;
  }
  return factores;
}

function esPrimo(num){
  for(let div = 2; div < num; div++){
    if(num % div === 0){
      return false;
    }
  }
  return true;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while(swap){
    swap = false;
    for(let i = 0; i < array.length-1; i++){
      if(array[i] > array[i+1]){
        var aux = array[i]
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
  for(let index = 1; index < array.length; index++){ 
    let pre = 0;                                     
    while(pre < index && array[pre] < array[index]){
      pre++;
    }
    let temp = array[index];
    for(let comp = index - 1; comp >= pre; comp--){
      array[comp+1] = array[comp];
    }
    array[pre]=temp
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let primero = 0; primero < array.length; primero++){
    let min = primero;
    for(let segundo = min; segundo < array.length; segundo++){
      if(array[min] > array[segundo]){
        min = segundo; 
      }
    }
    if(array[primero] >= array[min]){
      let temp = array[primero];
      array[primero] = array[min];
      array[min] = temp;
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
