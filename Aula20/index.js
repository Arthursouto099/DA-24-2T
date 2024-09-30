 const rl = require("readline-sync")

// // 2x3
// let matriz = [
//     [1,2,3],// linha
//     [4,5,6]
//     // coluna
// ]

// console.log(matriz)
// console.log(matriz[0][2])


// matriz[1].forEach(n => console.log("-----> " + n))

// // 3x3
// let matriz2 = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]

// let matriz3 = []

// // matriz3[0] = [1, 2, 3]
// // matriz3[1] = [4, 5, 6]
// // matriz3[2] = [7, 8, 9]

// // console.log(matriz3)

// // console.log(matriz3[2][2])



// const jogoDaVelha = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
// ]


// jogoDaVelha[1][2] = 1


// console.log(jogoDaVelha)


// let matriz2 = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]


// let soma = 0
// for(let i = 0; i <matriz2.length; i++) {
//     for(let j = 0; j < matriz2[i].length; j++) {
//         console.log(matriz2[i][j])
//         soma += matriz2[i][j]
//     }
// }

// console.log(soma)


// let matriz4 = [
//     [329,20231,3032123],
//     [4032213,5213230,62130],
//     [70,80321,92130]
// ]



// for(let i = 0; i < matriz4.length; i++) {
//     for(let j = 0; j < matriz4[i].length; j++) {
        
//        console.log(matriz4[i][j])


//     }
// }



// let matriz4 = [
//     [329,20231,3032123],
//     [4032213,5213230,62130],
//     [70,80321,92130]
// ]



// for(let i = 0; i < matriz4.length; i++) {
//     for(let j = 0; j < matriz4[i].length; j++) {
//         matriz4[i][j] *= 2
//         console.log(matriz4[i][j])
//     }
// }


// const matriz = [
//   [1,2,3,4],
//   [5,6,7,8],
//   [9,10,11,12],
//   [13,14,15,16],
// ]


// let soma = 0


// somaDaMatriz(matriz)



const batalhaNaval = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]


function trocarTodosOsNumerosPraUm(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = 1
        }
    }
}

trocarTodosOsNumerosPraUm(batalhaNaval)


function posicionar(matriz) {

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
           const indiceAleatorio = Math.floor(Math.random() * matriz.length)
           let contador = 0
           while(contador < 4) {
            matriz[i][indiceAleatorio] = 0
            contador++
           }
           
        }
    }

    console.log(matriz)
   

}

posicionar(batalhaNaval)

function somaDaMatriz(matriz) {
    let soma = 0
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] === 1) {
                soma += matriz[i][j]
            }
           
        }
    }

    return soma
}


function verificarIndice(linha, coluna) {

    if(batalhaNaval[linha][coluna] !== 0) {
        return true
    }
    else {
        return false
    }


   

}

function jogar() {
     const somaDaMatrizes = somaDaMatriz(batalhaNaval)
     
     console.log(somaDaMatrizes)
     


    let soma = 0
    let tentativa = 0
    let condicao = true


     while(condicao) {
         const indice1 = Number(rl.question("Digite o indice da linha que você quer: "))
         const indice2 = Number(rl.question("Digite o indice da coluna que voce quer: "))

         
        verificarIndice(indice1, indice2) 

        

        if(verificarIndice(indice1, indice2) === true) {
            soma += 1
            console.log("você acertou\n")
            console.log(soma)
        }

        if(verificarIndice(indice1, indice2) === false) {
            console.log("Voce errou")
            rl.question("Digite qualquer tecla para avançar: \n")
        }

        if(soma === 6) {
            condicao = false
            console.log("Você ganhou")
        }



     }
}




jogar()