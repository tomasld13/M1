'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let binario = num.toString();
  let decimal = 0;
  let potencia = 0;
  for(let i = binario.length-1; i >= 0; i--){
    let actual = parseInt(binario.charAt(i));
    decimal += actual*(2**potencia);
    potencia+=1;
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  if(num === 0){
    return 0;
  }else{
    let div = 2;
    let binario = "";
    while(1 <= num){
      binario = num % div + binario;
      num = parseInt(num /= div);
    }
    return binario;
  }
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}