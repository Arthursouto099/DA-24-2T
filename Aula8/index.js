
// // const lista = ["tavares", "joao", "julia"]

// // function adicionaNome(nome) {
// //     return lista.push(nome)
// // }

// // var afirmacao = false

// // while(afirmacao === false) {
// //     var nomeDoUser = prompt("Digite um nome: ")
// //     adicionaNome(nomeDoUser)
// //     var perguntaAoUser = prompt("Você deseja continuar? S/N")
// //     if(perguntaAoUser === "N")  {
// //         afirmacao = true
// //         alert(lista.join(" --> "))
// //     }
// // }

// // Fixação
// // Exercicio 1

// const nomeDoUser = prompt("Digite seu nome: ")
// const corDoUser = prompt("Digite sua cor favorita: ")

// // usando concatenação
// var resultado1 = "A cor favorita de " + nomeDoUser + " é " + corDoUser
// // usando template strings
// var resultado2 = `A cor favorita de ${nomeDoUser} é ${corDoUser}`

// console.log(resultado1)
// console.log(resultado2)


// const nome = 'Tavares'

// //atributo
// nome.length 

// //metodos do nome: string

// nome.toLocaleUpperCase()
// nome.toLocaleLowerCase()

// const email = "   tavares@senacrs.edu.br   "

// //metodos do nome: string
// // retira os espaços entre o começo e o final da string(nunca no meio)
// email.trim()


// //metodos da frase: string
// const frase = "Hoje comi cenoura"
// frase.includes("cenoura")// true
// frase.includes("batata")// false

// const fraseSaudavel = "Hoje eu comi cenoura, amo cenoura"
// console.log(fraseSaudavel.replaceAll("cenoura", "batata"))


// // exercicio 2 

// var fraseDoUser = prompt("Escreva sua frase: ")

// console.log(fraseDoUser.toLocaleUpperCase())
// console.log(fraseDoUser.replaceAll("o", "i"))
// console.log(fraseDoUser.length)

// // exercicio 3
 
// const frutas = ["abacate", "banana", "tomate", "milho", "uva", "morango"]

// const fruta = frutas[4] 
// console.log(fruta)


// const cachorros = ["Pomerânia", "Bulldog Francês" , "Shih Tzu", "Rottweiler", "Pug"]

// const numDoUser = Number(prompt("Digite um número de 0 a 4: "))


// const cachorro = cachorros[numDoUser]
// console.log(cachorro)

// const pokemons = ["bulbasaar", "squirtle", "chamander"]

// console.log(pokemons.length )

// const seriesBoas = ["Vikings", "the big bang theory"]

// console.log(seriesBoas.includes("Vikings"))

// console.log(seriesBoas.includes("Game of Thorenes"))


// const numeros = [1,2,3]

// console.log(numeros)

// numeros.push(5, 6, 8)

// console.log(numeros)

// const meusPeixes = ["palhaço", "mandarim", "esturjao"]

// meusPeixes.pop()

// console.log(meusPeixes)


// const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]

// letras.splice(2, 1)
// console.log(letras)

// letras.splice(5, 2)

const numeros = [1, 2, 3, 4, 5, 6]

console.log(numeros.length)
numeros.push(7)

numeros.splice(3, 2)
console.log(numeros)

console.log(numeros.length)