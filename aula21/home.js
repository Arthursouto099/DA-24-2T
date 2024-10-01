const rl = require("readline-sync")

// retrona um numero aleatorio com base no multiplicadoMaximo 
// começa do 0
function numeroAleatorio(numeroMaximo) {
    const random = Math.floor(Math.random() * numeroMaximo)
    return random
}

function embaralharMatriz(matriz, qtd) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            const nRI = numeroAleatorio(matriz.length)
            const nRN = numeroAleatorio(qtd)

            matriz[i][nRI] = nRN
        }
    }

    return matriz
}


// const mapa = [
//     [0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,0,0,0]
// ]

// const m0 = "grama"
// const m1 = "agua"
// const m2 = "montanha"

// embaralharMatriz(mapa, 3)

// console.log(mapa)


// for(let i = 0; i < mapa.length; i++) {
//     for(let j = 0; j < mapa[i].length; j++) {
//         if(mapa[i][j] === 0) {
//             mapa[i][j] = m0
//         }
//         else if(mapa[i][j] === 1) {
//             mapa[i][j] = m1
//         }

//         else {
//             mapa[i][j] = m2
//         }
//     }
// }

// console.log(mapa)

// let pontuacao = [
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0]
// ]

// embaralharMatriz(pontuacao, 30)

// let somaJogadorUm = 0
// let somaJogadorDois = 0
// let somaJogadorTres = 0

// const soma1 = () => {
//     for(let i = 0; i < pontuacao[0].length; i++) {
//         somaJogadorUm += pontuacao[0][i]

//     }
//     console.log(somaJogadorUm)
// }
// const soma2 = () => {
//     for(let i = 0; i < pontuacao[1].length; i++) {
//         somaJogadorDois += pontuacao[1][i]

//     }
//     console.log(somaJogadorDois)
// }
// const soma3 = () => {
//     for(let i = 0; i < pontuacao[2].length; i++) {
//         somaJogadorTres += pontuacao[2][i]

//     }
//     console.log(somaJogadorTres)
// }




// soma1()
// soma2()
// soma3()


// console.log(pontuacao)

// const lista = [
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0]
// ]


// embaralharMatriz(lista, 5)

// // transformar em crescente
// for(let i = 0; i < lista.length; i++) {
//     for(let j = 0; j < lista[i].length; j++) {
//         lista[i].sort((a, b) => a -b)
//     }
// }

// console.log(lista)

// for(let i = 0; i < lista.length; i++) {
//     for(let j = 0; j < lista[i].length; j++) {
//         lista[i].sort((a, b) => b - a)
//     }
// }
// console.log(lista)


let jurassic = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]



const mapa = embaralharMatriz(jurassic, 5)


console.log("--------------------------------------------------------")

const m0 = "grama"
const m1 = "agua"
const m2 = "floresta"
const m3 = "carnivoro"
const m4 = "herbívoro"





function mudarDirecao(direcao) {

    if (direcao === "cima") {
        for (let i = 0; i < mapa.length; i++) {
            for (let j = 0; j < mapa[i].length; j++) {
                if (mapa[i][j] === 3 && i != 0) {
                    if (mapa[i - 1][j] != 1) {
                        mapa[i - 1][j] = 3
                        mapa[i][j] = 0
                    }
                    else {
                        console.log("Dinossauro não pode atravessar agua")
                    }

                }

                else if (mapa[i][j] === 4 && i != 0) {
                    if (mapa[i - 1][j] != 1) {
                        mapa[i - 1][j] = 4
                        mapa[i][j] = 0

                    }

                    else {
                        console.log("Dinossauro não pode atravessar agua")
                    }

                }

            }
        }
    }

    

    else if (direcao === "baixo") {
        for (let i = mapa.length - 1; i >= 0; i--) {
            for (let j = mapa[i].length - 1; j >= 0; j--) {

                if (mapa[i][j] === 3 && i < mapa.length - 1) {
                    if (mapa[i + 1][j] != 1) {
                        mapa[i + 1][j] = 3
                        mapa[i][j] = 0
                    }

                    else {
                        console.log("Dinossauro não pode atrevssar agua")
                    }

                }

                else if (mapa[i][j] === 4 && i < mapa.length - 1) {
                    if (mapa[i + 1][j] != 1) {
                        mapa[i + 1][j] = 4
                        mapa[i][j] = 0
                    }

                    else {
                        console.log("Dinossauro não pode atrevssar agua")
                    }

                }
            }
        }
    }


    else if (direcao === "esquerda") {
        for (let i = 0; i < mapa.length; i++) {
            for (let j = 0; j < mapa[i].length; j++) {
                if (mapa[i][j] === 3 && j != 0) {
                    if(mapa[i][j - 1] !=1) {
                        mapa[i][j - 1] = 3
                        mapa[i][j] = 0
                    }

                    else {
                        console.log("Dinossauro não pode atrevssar agua")
                    }
                
                }

                else if (mapa[i][j] === 4 && j != 0) {
                    if(mapa[i][j - 1] !=1) {
                        mapa[i][j - 1] = 4
                        mapa[i][j] = 0
                    }

                    else {
                        console.log("Dinossauro não pode atrevssar agua")
                    }
             
                }
            }
        }
    }


    else if (direcao === "direita") {
        for (let i = mapa.length - 1; i >= 0; i--) {
            for (let j = mapa[i].length - 1; j >= 0; j--) {
                if (mapa[i][j] === 3 && j < mapa.length - 1) {
                    if( mapa[i][j + 1] != 1) {
                        mapa[i][j + 1] = 3
                        mapa[i][j] = 0
                    }

                    else {
                        console.log("Dinossauro não pode atrevssar agua")
                    }
                  
                }

                else if (mapa[i][j] === 4 && j < mapa.length - 1) {
                    if(mapa[i][j + 1] != 1) {
                        mapa[i][j + 1] = 4
                        mapa[i][j] = 0
                    }

                    else {
                        console.log("Dinossauro não pode atrevssar agua")
                    }
                  
                  
                }
            }
        }
    }




}





mudarDirecao("direita")


function movimentar() {
    console.table(mapa)
    console.log("///////////////////////////////////////////////////////////////////////////////")
    let condicao = true

    while (condicao) {
        const direcao = rl.question("Digite a direção que os dinossauros devem seguir: cima/ baixo / esquerda / direita ")

        mudarDirecao(direcao)
        console.table(mapa)

        const question = rl.question("Deseja continuar: sim/nao")

        if (question === "nao") {
            condicao = false
        }


    }
}



console.log("--------------")

// for(let i = 0; i < jurassic.length; i++) {
//     for(let j = 0; j < jurassic[i].length; j++) {
//         if(jurassic[i][j] === 0) {
//             jurassic[i][j] = m0
//         }
//         else if(jurassic[i][j] === 1) {
//             jurassic[i][j] = m1
//         }

//         else if(jurassic[i][j] === 2) {
//             jurassic[i][j] = m2
//         }

//         else if(jurassic[i][j] === 3) {
//             jurassic[i][j] = m3
//         }

//         else {
//             jurassic[i][j] = m4
//         }
//     }
// }

movimentar()