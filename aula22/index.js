// let numeros = [1, 2, 3, 4, 5]
// let soma =0
// // mesmo javascript não possuindo uma tipagem, ele ainda acusa erro quando não definimos uma variavel(type/ soma = 0): Number


// for(let i = 0; i < numeros.length; i++) {
//     soma += numeros[i]
// }


// console.log(soma)


// function fatorial(n) {
//     let resultado = 1
//     for(let i = n; i > 0; i --) {
//         resultado *= i


//     }

//     return resultado
// }


// console.log(fatorial(5))






// 1 i = 5 resultado = 5
// 2 i = 4 resultado = 20
// 3 i = 3 resultado = 60
// 4 i = 4 resultado = 120
// 5 i = 5 resultado = 120


// let numeros = [1,2,3,4,5]
// let soma = 0

// for(let i = 0; i < numeros.length; i ++) {
//     console.log((`I: ${i}, numeros[i]: ${numeros[i]}, soma antes : ${soma}`))
//     soma += numeros[i]
//     console.log(`soma depois: ${soma}`)
// }


// console.log(`Resultado final ${soma}`)


// let numeros = [1,2,3,4,5]
// let somaPares = 0


// for(let i = 0; i < numeros.length; i++) {
// console.log(`interação: ${i}, numeros[i]: ${numeros[i]}, soma antes: ${somaPares}`)
//     if(numeros[i] % 2 === 0) {
//         console.log(numeros[i])
//         somaPares += numeros[i]
//     }
//     console.log(`soma depois: ${somaPares}`)
// }


// console.log(somaPares)


function jogoPontuacao(jogadas) {
    let pontuacao = 0
    console.log(pontuacao)

    for (let i = 0; i < jogadas.length; i++) {
        if (jogadas[i] === "ganhou") {
            pontuacao += 3
         
        }

        else if (jogadas[i] === "empatou") {
            pontuacao += 1
     
        }

        else if (jogadas[i] === "perdeu") {
            pontuacao -= 1
          
        }
    }



    return pontuacao


}

let resultadoFinal = jogoPontuacao(["ganhou", "empatou", "perdeu", "ganhou"])

console.log(resultadoFinal)
