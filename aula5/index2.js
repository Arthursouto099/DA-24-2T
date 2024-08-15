// A variavel a recebe o valor em numero de 10
let a = 10

// A variavel b recebe o valor em numero de 20
let b = 20

// c Recebe o valor de a, logo c passa a valer 10
c = a
// b Recebe o valor de c, logo b passa a valer 10
b = c
// a Recebe o valor de b, logo a passa a valer 10

//exibe no console a{10}, b{10}, c{10} todas as variaveis tem o valor de 10
console.log(a, b, c)

// Pergunta ao usuario o numero de horas que ele trablha por dia e guarda em uma variavel, um nome melhor seria "horasTrabalhadas"
let p = prompt("Quantas horas você trabalha por dia?")

//Pergunta ao usuario o quanto ele recebe por dia e guarda esse valor em uma variavel, um nome melhor seria "salarioPorHora"
let t = prompt("Quanto você recebe por dia")

//Exibe no console o valor da variavel t(horasTrabalhadas) e o valor da variavel t(salarioPorHora)
console.log("Voce recebe", t, "/", p, "por hora")
