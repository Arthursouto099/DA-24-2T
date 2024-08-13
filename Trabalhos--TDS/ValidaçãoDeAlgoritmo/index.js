// Selecione um algoritmo de sua preferência entre(Verificar se um numero é par ou impar, converter Celcius para Fahrenheit) 


// verificar se o numero e par ou impar
const nomeDoUser = prompt("Digite seu nome: ")
const numeroDoUser = Number(prompt("Digite um numero: "))

/* Verificando se o resto da divisão do numero é igual a 0
CASO o resto da divisão for igual a 0, o numero do user é par
CASO contrario o numero é impar
*/
if(numeroDoUser % 2 == 0) {
  alert("o numero é par")
}
else {
    alert("O numero é impar")
} 


// Converter graus celcius em fahrenheit
const grausDoUser = Number(prompt("Digite uma temperatura em celcius: "))
const tempEmFahrenheit = (grausDoUser * 1.8) + 32

/*
Celsius → Fahrenheit
Multiplicamos a temperatura em ºC por 1,8 e somamos 32 ao resultado.
*/

alert(`A  temperatura do user: ${nomeDoUser} ==> { ${grausDoUser} graus celcius } convertida para fahrenheit é ${tempEmFahrenheit.toFixed(0)} fahrenheit`)


