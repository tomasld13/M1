'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  let potencia = 0;
  for(let i = num.length-1; i >= 0; i--){
    decimal += Math.pow(2,potencia)*num[i];
    //decimal += parseInt(num.charAt(i))*(2**potencia);
    potencia+=1;
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  if(num === 0){
    return 0;
  } 
  else{
    let binario = "";
    while(num > 0){
      binario = num % 2 + binario;
      num = Math.floor(num /= 2);
    }
    return binario;
  }
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}