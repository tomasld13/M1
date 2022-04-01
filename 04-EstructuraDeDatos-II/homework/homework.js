'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.length = 0;
  this.head = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){
  let node = new Node(value);
  let current = this.head;
  if(!current){
    this.head = node;
    return node;
  }
  while(current.next){
    current = current.next;
  }
  current.next = node;
  return node;
}

LinkedList.prototype.remove = function(){
	let current = this.head;
	if(!current){
		return null;
	}
  else if(!current.next){
    const value = this.head.value;
    this.head = null;
    return value;
  }
	while(current.next.next){
    current = current.next
	}
  const value = current.next.value;
	current.next = null;
  return value;
}

LinkedList.prototype.search = function(searched){
  if(!this.head){
    return null;
  }
  let current = this.head;
  while(current){
    if(typeof searched === "function"){
      if(searched(current.value)){
        return current.value;
      }
    }
    if(current.value === searched){
      return searched;
    }
    current = current.next;
  }
  return null;
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o arr donde puede guardar información.
// Para este ejercicio, generar 35 arr para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.
//Como funcion.
function HashTable() {
  this.numBuckets = 35;
  this.arr = [];
}

HashTable.prototype.hash = function(key){
  let sum = 0;
    for(let i = 0; i < key.length; i++){
      sum += key.charCodeAt(i);
    }
    return sum % this.numBuckets;
}

HashTable.prototype.hasKey = function(key){
  let index = this.hash(key)
  return this.arr[index].hasOwnProperty(key);
}

HashTable.prototype.set = function(key,value){
  if(typeof key !== "string"){
    throw new TypeError ("Keys must be string");
  }
  let index = this.hash(key);
  if(this.arr[index] === undefined){
    this.arr[index] = {}
  }
  this.arr[index][key] = value;
}

HashTable.prototype.get = function(key){
  let index = this.hash(key);
  return this.arr[index][key];
}

//Como clase.
/*
class HashTable{
  constructor(){
    this.numBuckets = 35;
    this.arr = []
  }

  hash(key){
    let sum = 0;
    for(let i = 0; i < key.length; i++){
      sum += key.charCodeAt(i);
    }
    return sum % this.numBuckets;
  }

  hasKey(key){
    let index = this.hash(key)
    return this.arr[index].hasOwnProperty(key);
  }

  set(key,element){
    if(typeof key !== "string"){
      throw new TypeError ("Keys must be string");
    }
    let index = this.hash(key);
    if(this.arr[index] === undefined){
      this.arr[index] = {}
    }
    this.arr[index][key] = element;
  }

  get(key){
    let index = this.hash(key);
    return this.arr[index][key];
  }
}*/


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
