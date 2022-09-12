'use strict'

function BinarioADecimal(num) {
  
  // tu codigo aca
  let binario = num.toString()
  
  let decimal = 0;
  
  for (let i = 0; i < binario.length; i++) {
    if (binario.charAt(i) == '1' ) {
      decimal = decimal + Math.pow(2, binario.length -1 - i) 
    }
  }
    return decimal;
}
// }

// let binario = String(num).split("").filter( i => i === '1' || i === "0")

// let resultado = 0;

// for (let i = 0; i < binario.length; i++) {
//   resultado = resultado + Number(binario[i] * Math.pow(2, binario.length - 1 - i) )
// }

// return resultado;
// }

function DecimalABinario(num) {
  // tu codigo aca
let resultado = "";
let divisor = 2;
let cociente = 0;
let residuo = 0;

  while (num >= 2) {
    cociente = Math.trunc(num / divisor);
    residuo = num % divisor;
    resultado += residuo.toString()
    num = cociente;
  }

  let auxiliar = num.toString();
  resultado += auxiliar;
  return resultado.split("").reverse().join("");
  

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
