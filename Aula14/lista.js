const rl = require('readline-sync')


// for(let i = 1; i < (20 + 1); i++) {
//     if(i % 2 === 0) {
//         console.log
//     }
// }


// const numeroDoUser = Number(rl.question("Digite um numero: "))
// for(let i = 1; i <= 10; i++) {
//     console.log(`${numeroDoUser} x ${i} = ${numeroDoUser * i}`)
// }


// let soma = 0

// for(let i = 1; i <= 5; i++) {
//     const numerosDoUser = Number(rl.question("Digite o " + i + " numero:" ))
//     soma += numerosDoUser
// }
// console.log(soma)

// soma = 0
// media = 0
// for(let i = 1; i <= 5; i++) {
//     const notaDosAlunos = Number(rl.question("Digite a nota do aluno " + i + ": " ))
//     soma += notaDosAlunos
//     media = i
// }
// console.log(soma / media)

// const listaDePalavras = ["feijao", "arroz", "frango", "panqueca", "chocolate", "pizza"]

// const escolhaDoPrograma = listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)]
// let rodadas = escolhaDoPrograma.length
// let palavra = []
// for(let i = 0; i < escolhaDoPrograma.length; i++) {
// palavra.push("-")
// }

// while(rodadas < escolhaDoPrograma.length + 8) {
// let tentativa = String(rl.question("Escolha uma Letra: ")).toLocaleLowerCase()
// const palavraEscolhida = [escolhaDoPrograma]


//     if(palavraEscolhida[0].includes(tentativa)) {
//         for(let i = 0; i < palavra.length; i++) {
//             // let index = escolhaDoPrograma.indexOf(tentativa)
//             if(palavraEscolhida[0][i] === tentativa) {
//                 palavra[i] = tentativa
//             }
//         }
//     }

//     else {
//         console.log("A palavra não possui essa letra! ")
//     }

//     if(palavra === palavraEscolhida[0]) {
//         break
//     }
    
    
//     console.log(palavra)
//     rodadas ++

// }


 
// const cpf = Number(rl.question("digite seu cpf")) 

// let condicao = true

// while(condicao) {
//     const cpfVerificar = Number(rl.question("digite seu cpf: "))

//     if(cpf != cpfVerificar) {
//         console.log("cpf invalido, ensira novamente: ")
   
//     }

//     else {
//         console.log("cpf, verificado com sucesso")
//         condicao = false
//     }
// }





// let condicao = true
// let arrayDoUser = []

// while(condicao) {
//     const numerosDoUser = Number(rl.question("digite seus numeros: "))
//     arrayDoUser.push(numerosDoUser)

//     const pergunta = rl.question("Deseja continuar s/n: ")

//     if(pergunta === "s") {
//         condicao = false
//     }
// }

// console.log(arrayDoUser.sort((a, b) => a - b))