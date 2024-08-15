let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

// o tipo undefined foi retornado porque a variavel não recebeu nenhum valor, ou seja ela é indefinida nada foi definida a essa variavel


nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")

console.log(typeof nome) 

// O tipo de idade e retornado como uma string porque a função prompt retorna qualquer dado de entrada como uma string. 
// Uma forma de corrigir isso é fazendo "Number(prompt("digite sua idade"))" o que vai fazer com que o dado de entrada venha como um numero(type Number)
console.log(typeof idade)

alert(`Olá ${nome}, você tem ${idade} anos`)