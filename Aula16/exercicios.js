// exercicio 1#

const informacoes = () => console.log("Oi, meu nome é Arthur, eu estudo no Caic madezzati")

// exercicio 2#

//const soma = (num1, num2) => {return num1 + num2}


const comparacao = (a, b) => {
    if(a > b) return "Primeiro numero é maior que o segundo" + " = " + true
    else if(b > a) return "Primeiro numero é maior que o segundo"+ " = " + false
    else return "Os numeros são iguais"  
}

// comparacao(3, 3)

const parOuNao = (numero) => {
if(numero % 2 === 0) return "O numero é par" + " = " + true
else return "O numero é par" + " = " + false
}

// parOuNao(4)


const imprimeMensagem = (mensagem) => console.log(mensagem.length + " ---> " + mensagem.toUpperCase())

// exercicio 3# 

const soma = (num1, num2) => {return num1 + num2}
const subtracao = (num1, num2) => {return num1 - num2}
const multiplicacao = (num1, num2) => {return num1 * num2}
const divisao = (num1, num2) => {return num1 / num2}

function calculadora (numero1, numero2) {
console.log("SOMA: " + soma(numero1, numero2))
console.log("SUBTRAÇÃO: " + subtracao(numero1, numero2))
console.log("MULTIPLICAÇÃO: " + multiplicacao(numero1, numero2))
console.log("DIVISÃO: " + divisao(numero1, numero2))
}

calculadora(5, 5)