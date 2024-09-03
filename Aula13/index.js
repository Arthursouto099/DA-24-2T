// const rl = require("readline-sync")


// let valor = 0
// // declaramos um valor no qual algo vai ser incrementado
// for(let i = 0; i < 5; i++) {
//     valor += i
//     // valor recebe a soma da variavel i  a cada reptição
// }


// console.log(valor)
// resultado valor = 10

// const arrayDouser = []
// let alternativa = true

// while(alternativa === true) {
//     const numeroDoUser = Number(rl.question("Digite seu numero: "))
//     arrayDouser.push(numeroDoUser)
//     const pergunta = String(rl.question("deseja finalizar o programa? "))
//     if(pergunta.toUpperCase() === "SIM") {
//         alternativa = false
//     }
// }

// console.log(arrayDouser)


// for(let numero of arrayDouser) {
//     if (numero > 18) {
//         console.log(numero)
//         // vai exibir no console todos os numeros da lista, no qual são maiores que 18
//     }
// }

// const quantidadeTotal = Number(rl.question("Digite a quantidade de linhas"))
// let quantidadeAtual = 0

// // enquanto o valor da variavel quantidadeAtual for menor que a quantidadeTotal o codigo 
// // sera executado
// while(quantidadeAtual < quantidadeTotal) {
//     // variavel linha foi declarada como uma string vazia
//     let linha = ''
//     // variavel astericos foi declarada igual zero, o codigo vai ser executado a quantidade de vezes do valor da quantidadeAtual + 1
//     for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//         // linha vai receber um "*" a cada repetição desse for 
//         // na primeira repetição o asterico vai valer 1 = *
//         // na segunda o asterisco vai valer 2 = **
//         // assim em diante
//         linha += "*"
//     }

//     console.log(linha)

//     quantidadeAtual++
//     // o valor de quantidadeAtual se incrementa a cada reptição do laço
// }


// let qtdBichinhos = Number(rl.question("Digite a quantidade de bichinhos de estimações que você possui "))

// if(qtdBichinhos === 0) {
//     console.log("Que pena, adote um animal!")
// }

// else {
//     let animaisDeEstimações = []
//     let contador = 0

//     while(contador < qtdBichinhos) {
//         nomeDoBichinho = rl.question("Digite o nome do seu bichinho numero " + (contador + 1) + " ")
//         animaisDeEstimações.push(nomeDoBichinho)
//         contador++
//     }

//     console.log(animaisDeEstimações)
// }


// function imprimeValorOg() {
//     console.log("Numeros do array OG")
//     for(numero of arrayDouser) {
//         console.log(numero)
//     }
// }

// imprimeValorOg()

// function dividirValorOg() {
//     console.log("Valores do array OG divididos por 10")
//     for(numero of arrayDouser) {
//         console.log(numero / 10)
//     }
// }

// dividirValorOg()

// function arrayOgPares() {
//     let ogValoresPares = []
//     console.log("Valores do array OG que são pares")
//     for(numero of arrayDouser) {
//         if(numero % 2 === 0) {
//             ogValoresPares.push(numero)
//         }
//     }

//     console.log(ogValoresPares)
// }

// arrayOgPares()

// function stringValoresOg() {
//     let arrayDeStrings = []

//     for(let index = 0; index < arrayDouser.length; index++) {
//         let string = 'o elemento do index ' +  index + ' é ' + arrayDouser[index]
//         arrayDeStrings.push(string)

//     }

//     console.log(arrayDeStrings)
// }

// stringValoresOg()


// const escolhaDoUser = (rl.question("Você quer o maior ou menor numero do array? maior/menor ")).toUpperCase()

// function maiorNumeroOuMenorOg(escolhaDoUser) {
//     let primeiroEl = arrayDouser[0]
//     if(escolhaDoUser === "MAIOR") {
//         for(let i = 0; i < arrayDouser.length; i ++) {
//             if(primeiroEl < arrayDouser[i]) {
//                 primeiroEl = arrayDouser[i]

//             }
//         }

//         console.log(primeiroEl)
//     }
//     else {
//         for(let i = 0; i < arrayDouser.length; i ++) {
//             if(primeiroEl > arrayDouser[i]) {
//                 primeiroEl = arrayDouser[i]

//             }
//         }

//         console.log(primeiroEl)

//     }
// } 
// maiorNumeroOuMenorOg()


// const numeroSecreto = Math.floor(Math.random() * 100 + 1)


// condicao = true
// contador = 0
// while(condicao === true) {
//     const tentativa = Number(rl.question("Faça sua tentativa: "))


//     if(tentativa > numeroSecreto) {
//         console.log("tente um numero menor") 
//     }

//     else if(tentativa < numeroSecreto) {
//         console.log("tente um numero maior") 
//     } 

//     else {
//         console.log("Você acertou!!! " + " voce tentou " + (contador + 1) + " vezes" )
//         condicao = false
//     }

//     contador++

// }


const jogador = Number(prompt("Digite seu UserName"))
let vida = 1
let recursos = 0


condicao = true
rodadas = 0

while (condicao === true) {

    let decisaoDoUser = String(prompt("Você deseja EXPLORAR ou DESCANSAR ?: ")).toUpperCase()
    if (decisaoDoUser === "DESCANSAR") {
        vida = vida + 1
        alert(`sua vida é de ${vida}hp`)
        alert("Você recuperou energia!\n")
    }

    else if (decisaoDoUser === "EXPLORAR") {
        let lutaOuGloria = Math.floor(Math.random() * 5)

        if (lutaOuGloria === 3) {
            alert("você encontrou um perigo!!!!\n")
        }

        else if (lutaOuGloria === 4) {
            alert("Corra, você encontrou um Gamemaker")
            vida = vida - 1
            alert(`sua vida é de ${vida}hp\n`)
            if (vida === 0) {
                condicao = false
                alert("você morreu")
                alert(`Você jogou por ${rodadas} rodadas`)
            }
        }

        else {
            alert("você encontrou recursos")
            recursos = recursos + 1

            if (recursos === 10) {
                condicao = false 
                alert("você conseguiu 10 recursos, você venceu")
                alert(`Você jogou por ${rodadas} rodadas`)
            }


            else if(recursos === 1) {
                alert("Você possui " + recursos + " recurso\n")
            }


            else {
                alert("Você possui a quantidade de " + recursos + " recursos\n")
            }


          
        }


    }

    rodadas++

}