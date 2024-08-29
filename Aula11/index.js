// const repostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(repostaDoUsuario)

// // caso o resto da divisão do respostaDoUsuario: Number for igual a 0
// // ele passa no texte
// if(numero % 2 === 0) {
//     console.log("Passou no Teste")
// }
// // caso contrario ele não passara no teste
// else {
//     console.log("Não passou no texte")
// }

// let fruta = prompt("Escolha uma fruta")

// // // preco indefinido
// // let preco



// switch(fruta) {
//     // dependo de qual case o valor caia
//     // a variavel preco vai receber o valor da fruta que o usuario escolheu
//     case "Laranja":
//         preco = 3.5
//         break
//     case "Maça":
//         preco = 2.25
//         break
//     case "Uva":
//         preco = 0.30
//         break
//     case "Pêra":
//         preco = 5.5
//         break
//         // defaul: a variavel preco recebe o valor de 5 caso não 
//         // caia em nenhumas da case
//     default:
//         preco = 5
// }

// console.log("O preço da fruta " + fruta + "É", "R$", preco)


// c) o preco receberia o valor de 5 default


// const  numero = Number(prompt("Digiteo primeiro número. "))

// if(numero > 0) { // comparando se o numero do usuario é maior que zero, caso seja ele exibe um console.log() e cria uma variavel chamada mensagem , mas nao a exibe(dentro da condição)
//     console.log("Esse número passou no teste")
//     let mensagem = "Essa mensagem é secreta!!!"
// }

// // caso o numero fosse 10, a mensagem seria (passou no teste) e a variavel mensagem seria criada porem ela so pode ser exibida dentro do escopo local, como ela foi exibida fora dele ocorreria um erro informando que a variavel nao foi definida

// // caso fosse -10 nada ocorreria por falta da existencia de um else e o mesmo erro da variavel mensagem ocorreia

// console.log(mensagem)




// const idadeDoUsuario = Number(prompt("Digite sua idade: "))

// if(idadeDoUsuario >= 18) {
//     console.log("você pode dirigir")
// }

// else {
//     console.log("você não pode dirigir")
// }


// const turno = prompt("Digite um seu turno: M/V/N").toUpperCase()

// if(turno === "M") {
//     console.log("bom dia")
// }

// else if(turno === "V") {
//     console.log("boa tarde")
// }

// else if(turno === "N") {
//     console.log("boa noite")
// }

// else {
//     console.log("Não existe turno de madrugada")
// }

// switch(turno) {
//     case "M":
//         console.log("bom dia")
//         break
//     case "V":
//         console.log("boa tarde")
//         break
//     case "N":
//         console.log("boa noite")
//         break
//     default: 
//     console.log("Não existe turno de madrugada")
//     break
// }

// DESAFIO 1

// const generoDoFilme = prompt("Qual o genero do filme: ").toUpperCase()
// const preco = Number(prompt("Qual o preço do filme: "))


// if(generoDoFilme === "FANTASIA" && preco < 15) {
//     const lanchinho = prompt("Você deseja algum lanche? ").toUpperCase()
//     if(lanchinho === "SIM") {
//         const qualLanche = prompt("Qual seria o lanche? ")
//         console.log("Bom filme pombos e aproveitem seu lanche que é " + qualLanche)
//     } 
//     else {
//         console.log("Bom filme pombos")
//     }
  
// }

// else {
//     console.log("Escolha outro filme")
// }

// DESAFIO 2

const nome = prompt("Digite seu nome: ")
const tipoDoJogo = prompt("Digite o tipo do jogo: IN, DO")
const etapaDoJogo = prompt("Digite a etapa do jogo: SF, DT, FI")
const categoria = Number(prompt("Digite a categoria do jogo: 1, 2, 3 ou 4 "))
const qtdIngresso = Number(prompt("Digite a quantidade de ingressos: "))


if(tipoDoJogo === "DO" && etapaDoJogo == "SF" && categoria === 1) {
    const preco = 1320
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}

else if(tipoDoJogo === "DO" && etapaDoJogo == "SF" && categoria === 2) {
    const preco = 880
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}

else if(tipoDoJogo === "DO" && etapaDoJogo == "SF" && categoria === 3) {
    const preco = 550
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}

else if(tipoDoJogo === "DO" && etapaDoJogo == "SF" && categoria === 4) {
    const preco = 220
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}


else if(tipoDoJogo === "DO" && etapaDoJogo == "DT" && categoria === 1) {
    const preco = 660
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}

else if(tipoDoJogo === "DO" && etapaDoJogo == "DT" && categoria === 2) {
    const preco = 440
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
       ]   ValorTotal: ${total}   
    `)
}

else if(tipoDoJogo === "DO" && etapaDoJogo == "DT" && categoria === 3) {
    const preco = 330
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}


else if(tipoDoJogo === "DO" && etapaDoJogo == "DT" && categoria === 4) {
    const preco = 170
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}

else if(tipoDoJogo === "DO" && etapaDoJogo == "FI" && categoria === 1) {
    const preco = 1980
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}

else if(tipoDoJogo === "DO" && etapaDoJogo == "FI" && categoria === 2) {
    const preco = 1320
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}


else if(tipoDoJogo === "DO" && etapaDoJogo == "FI" && categoria === 3) {
    const preco = 880
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}

else if(tipoDoJogo === "DO" && etapaDoJogo == "FI" && categoria === 4) {
    const preco = 330
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total}   
    `)
}

///

if(tipoDoJogo === "IN" && etapaDoJogo == "SF" && categoria === 1) {
    const preco = 1320 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}

else if(tipoDoJogo === "IN" && etapaDoJogo == "SF" && categoria === 2) {
    const preco = 880 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}

else if(tipoDoJogo === "IN" && etapaDoJogo == "SF" && categoria === 3) {
    const preco = 550 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}

else if(tipoDoJogo === "IN" && etapaDoJogo == "SF" && categoria === 4) {
    const preco = 220 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}


else if(tipoDoJogo === "IN" && etapaDoJogo == "DT" && categoria === 1) {
    const preco = 660 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}

else if(tipoDoJogo === "IN" && etapaDoJogo == "DT" && categoria === 2) {
    const preco = 440 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}

else if(tipoDoJogo === "IN" && etapaDoJogo == "DT" && categoria === 3) {
    const preco = 330 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}


else if(tipoDoJogo === "IN" && etapaDoJogo == "DT" && categoria === 4) {
    const preco = 170 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}

else if(tipoDoJogo === "IN" && etapaDoJogo == "FI" && categoria === 1) {
    const preco = 1980 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}

else if(tipoDoJogo === "IN" && etapaDoJogo == "FI" && categoria === 2) {
    const preco = 1320 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}


else if(tipoDoJogo === "IN" && etapaDoJogo == "FI" && categoria === 3) {
    const preco = 880 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}

else if(tipoDoJogo === "IN" && etapaDoJogo == "FI" && categoria === 4) {
    const preco = 330 * 5.65
    const total = preco * qtdIngresso
    console.log(`
    Nome: ${nome}
    TipoDoJogo: ${tipoDoJogo}
    Etapa: ${etapaDoJogo}
    Categoria: ${categoria}
    QuantidadeIngresso: ${qtdIngresso}
    ValorTotal: ${total.toFixed(2)}   
    `)
}