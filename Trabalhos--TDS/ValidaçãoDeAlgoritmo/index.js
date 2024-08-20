// Selecione um algoritmo de sua preferência entre(Verificar se um numero é par ou impar, converter Celcius para Fahrenheit) 



const nomeDoUser = prompt("Digite seu nome: ")
// verificar se o numero é par ou impar

// O comando prompt naturalmente entrega a resposta do cliente como uma string. com o metodo Number convertemos essa string para number
const numeroDoUser = Number(prompt("Digite um numero: "))



/* Verificando se o resto da divisão do numero por 2 é igual a 0
CASO o resto da divisão for igual a 0, o numero do user é par
CASO contrario o numero é impar
*/

if(numeroDoUser % 2 === 0) {
    alert(`O número ${numeroDoUser} é par`)
}


else {
  alert(`O número ${numeroDoUser} é impar`)
}


// Converter graus celcius em fahrenheit
const grausEmC = Number(prompt("Digite a temperatura: /Celcius: "))
/*
FORMULA 1
Celsius → Fahrenheit
Multiplicamos a temperatura em ºC por 1,8 e somamos 32 ao resultado.

FORMULA 2 
F = (C) X (9/5) + 32
*/
const converterParaF = (grausEmC) * (9/5) + 32
//Exibe para nosso usuario.
alert(` A temperatura do user em C: ${nomeDoUser} ==> { C${grausEmC} } para FAHRENHEIT é {F ${converterParaF.toFixed(0)}}`)



