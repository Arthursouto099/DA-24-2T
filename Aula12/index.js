//  const rl = require("readline-sync")


// let i = 0


// while(i < (10 + 1)) {
//     console.log(i)
//     i++
// }


// var coxinhas = 0

// while(coxinhas <= 100) {
//     console.log("QUANTIDADE DE COXINHAS COMIDAS: ", coxinhas)
//     coxinhas = coxinhas + 5
// }


// contador = 1
// const numeros = []

// while(contador !== 0) {
//     let numeroDoUser  = Number(rl.question("Digite seu numero para a soma: "))
//     if(numeroDoUser > 0) {numeros.push(numeroDoUser)}
//     console.log("numeros adicionado:", numeros)

//     if(numeroDoUser === 0) {
//     contador = 0
//     let soma = 0
//     for(let i = 0; i < numeros.length; i++) {
//       soma += numeros[i]
//     }
//     console.log("A soma dos seguintes números " + numeros + " foram", soma)
    
//     }
//     numeroDoUser ++
    
    
// }



// let i = 1


// do {
//     console.log("O valor do computador é ", i)
//     i++
// }while (i <= 7) {
   
// }

// const pg = [1, 190, 5, 6, 100, 8, 12, 67, 99, 43, 20]


// let numeroMaior = pg[0]
// for(let i = 0; i < pg.length; i++) {

//     if(numeroMaior < pg[i]) {
//         numeroMaior = pg[i]
//     }
// }

// console.log(numeroMaior)

const arrayDouser = []
let alternativa = true

while(alternativa === true) {
    const numeroDoUser = Number(rl.question("Digite seu numero: "))
    arrayDouser.push(numeroDoUser)
    const pergunta = String(rl.question("deseja finalizar o programa? "))
    if(pergunta.toUpperCase() === "SIM") {
        alternativa = false
    }
}

// console.log(arrayDouser)

// let soma = 0
// for(let i = 0; i < arrayDouser.length; i++) {
// if(arrayDouser[i] % 2 == 0) {
//     console.log(`Os numeros pares são ${arrayDouser[i]}`)
//     soma += arrayDouser[i]
    
// }
// }

// console.log(`A soma dos numeros pares são: ${soma}`)


// let mensagens = ["oi", "sumido", 'tudo', "bem?"]

// let frase = ""
// for(let mensagem of mensagens) {
//     frase += " " +  mensagem
// }

// console.log(frase)


// let soma = 0
// for(let numero of arrayDouser) {
// if(numero % 2 === 0) {
//     console.log("numeros pares são:",  numero)
//     soma += numero
// }
// }

// console.log(soma)

