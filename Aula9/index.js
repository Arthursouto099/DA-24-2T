// let array 
// console.log('a' , array)
// // retorna undefined


// array = null
// console.log("b", array)
// // retorna nulo

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log("c", array.length)
// // retorna 11, o tamanho do array

// let i = 0
// console.log("d", array[i])
// // retorna o numero 3

// array[i+1] = 19
// console.log("e", array)
// // o numero  4 vai passar a ser 19

// const valor = array[i+6]
// console.log("f", valor)
// // let i = 0 + 6 = 6 array[6]
// // exibe o numero 7


// const frase = prompt("Digite uma frase: ")
// // recebe uma frase do user pelo prompt
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// // 1 --> deixa a frase toda em maiusculo  toUpperCase()
// // 2 --> vai substituir todas as letras A por I replaceAll("A", "I")
// // vai exibir o tamanho da frase frase.length


// // a saida caso a frase seja Subi num onibus em marrocos seria
// // SUBI NUM ONIBUS EM MIRROCOS 27


// const nomeDoUser = prompt("digite seu nome: ")
// const emailDoUser = prompt("digite seu email: ")


// console.log(`o email ${emailDoUser} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUser}`)


// const comidas = ["panqueca", "lasanha", "pizza", "frango", "queijo"]


// console.table(comidas)
// // convencional
// console.log(`Essas são minhas comidas favoritas

// ${comidas[0]}
// ${comidas[1]}
// ${comidas[2]}
// ${comidas[3]}
// ${comidas[4]}
//     `)

// // outra maneira

// console.log("Minhas comidas favoritas: ")
// comidas.forEach(comida => {
//     console.log(`---> ${comida}`)
// })

// const comidaDoUser = prompt("digite sua comida favorita: ")

// comidas[1] = comidaDoUser
// console.table(comidas)


// const listaDeTarefas = []

// const tarefa1 = prompt("digite sua tarefa: ")
// const tarefa2 = prompt("digite sua tarefa: ")
// const tarefa3 = prompt("digite sua tarefa: ")

// listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

// console.table(listaDeTarefas)

// const tarefaRealizada = prompt("digite o indice da tarefa no qual você ja realizou: 0/1/2")

// listaDeTarefas.splice(tarefaRealizada, 1)

// console.table(listaDeTarefas)

// const tarefas = []

// let condicao = false

// while(condicao === !true) {
//     const tarefa = prompt("digite sua tarefa: ")
//     tarefas.push(tarefa)
//     console.log(`a tarefa "${tarefa} foi adicionada com sucesso"`)
//     console.table(tarefas)
//     const simOuNao = prompt("Deseja continuar? S/N").toUpperCase()
//     if(simOuNao === "N") {condicao = true}
// }


// function apagarTarefa(numero) {
//     tarefas.splice(numero - 1, 1)
//     console.log("operação realizada com sucesso")
//     console.table(tarefas)
// }

//const realizarDelete = prompt("escolha umas das 3 tarefas para apagar: 1/ 2/ 3")


//apagarTarefa(realizarDelete)

// Desafio
const frase = prompt("digite sua frase: ")

const palavras = frase.split(' ')
console.log(palavras) 

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"] 


const frutaDoUser = prompt("digite sua fruta: ")

const indice = frutas.indexOf(frutaDoUser)
if(indice !== -1) {
console.log(`O indice da sua fruta é ${indice}: ${frutas[indice]}`)
}
else{console.log("O item não etsá presente na lista")}



console.table(frutas)