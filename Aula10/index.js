// // Exemplo

// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"] 


// //const frutaDoUser = prompt("digite sua fruta: ")

// const indice = frutas.indexOf(frutaDoUser)
// if(indice !== -1) {
// console.log(`O indice da sua fruta é ${indice}: ${frutas[indice]}`)
// }
// else{console.log("O item não etsá presente na lista")}



// console.table(frutas) 


// let condicao1 = true 

// if(condicao1) {
//     console.log("Hello world")
// }

// let condicao2 = false 

// if(condicao2) {
//     console.log("Hello world")
// }

// //exercicio 

// let num1 = Number(prompt("digite seu numero: "))
// let num2 = Number(prompt("digite seu numero: "))


// if(num1 === num2) {
//     console.log("sucesso")
// }

// else {console.log("numeros são bem diferentes")}


// let condicao = !false


// if(condicao) {
//     console.log("é verdadeira")
// }
// else {
//     console.logI("A condição e falsa")
// }


//  let num1 = Number(prompt("digite seu numero: "))
//  let num2 = Number(prompt("digite seu numero: "))


//  if(num1 === num2) {
//     console.log("Os numeros são iguais")
//  }

//  else {
//     console.log("Os numeros são diferentes")
//  }


// let condicao1 = !true
// let condicao2 = !true

// if(condicao1) {
//     console.log("CONDIÇÃO VERDADEIRA")
// }
// else if(condicao2) {
//     console.log("condição2 é verdadeira") 
// } 
// else {
//     console.log("ENtrou no else")
// }


// let num1 = Number(prompt("digite seu numero: "))
// let num2 = Number(prompt("digite seu numero: "))

// if(num1 > num2) {
//     console.log(`${num1} é maior que ${num2}`)
// }

// else if(num2 > num1) {
//     console.log(`${num2} é maior que ${num1}`)
// }

// else {
//     console.log("Os números são iguais")
// }


// var paisDeOrigem = prompt("Digite sua nacionalidade: ")

// switch(paisDeOrigem) {
//     case "Brasil": 
//     console.log("brasileiro")
//     break

//     case "EUA":
//     console.log("Americano")
//     break

//     case "Inglaterra":
//     console.log("Ingles")
//     break

//     default: 
//     console.log("Nenhuma nacionalidade encontrada")
//     break

// }




// var pokemonsDoUser = prompt("Digite seu Pokemon").toUpperCase()

// switch(pokemonsDoUser) {
//     case "Pikachu".toUpperCase():
//         alert("Eletrico")
//     break

//     case "Bulbasauro".toUpperCase(): 
//         alert("Planta e Veneno")
//     break

//     case "Charmander".toUpperCase():
//         alert("Fogo")
//     break

//     case "squirtle".toUpperCase(): 
//         alert("Água")
//     break

//     default: 
//         console.log("que pokemon é esse? ")
//     break
// 


// let condicao1 = false
// let condicao2 = !true

// if(condicao1 && condicao2) {
//     console.log("as duas condições são verdadeiras: ")
// } else {
//     console.log("Alguma condição é falsa")
// }

// if(condicao1 || condicao2) {
//     console.log("alguma das condições são verdadeiras ")
// } else {
//     console.log("Todas são falsas ")
// }


// if(!condicao1) {
// console.log("A condição 1 é falsa")
// }

// else {
// console.log("A condição 1 é verdade")
// }


// const nome  = prompt("digite seu nome: ")
// const idade = Number(prompt("Digite sua idade: ")) 
// const escolaridade = prompt("digite seu nivel de escolaridade: incompleto/completo").toUpperCase()
// const faculdade = prompt("Você cursa alguma faculdade? SIM/NÂO").toUpperCase()

// if(idade >= 18 && escolaridade === "COMPLETO" && faculdade === "NÃO")  {
//     alert(`Parabens ${nome}, você compriu todos os requisitos necessarios`)
// }

// else {
//     alert("é uma baita de uma triste noticia mas o candidato " + nome + " não passou")
// }

const escolhaComputador = Math.floor(Math.random() * 3 + 1)


let tentativaDoComputador = []

switch (escolhaComputador) {
    case 1:
        if (tentativaDoComputador.length === 0) {
            tentativaDoComputador.push("PEDRA")
        }

    case 2:
        if (tentativaDoComputador.length === 0) {
            tentativaDoComputador.push("PAPEL")
        }

    case 3:
        if (tentativaDoComputador.length === 0) {
            tentativaDoComputador.push("TESOURA")
        }

    // case 4:
    //     if (tentativaDoComputador.length === 0) {
    //         tentativaDoComputador.push("LAGARTO")
    //     }

    // case 5:
    //     if (tentativaDoComputador.length === 0) {
    //         tentativaDoComputador.push("SPOCK")
    //     }

}


 const tentativaDoUser = prompt("ESCOLHA: ").toUpperCase()


if(tentativaDoComputador[0] === "PEDRA" && tentativaDoUser === "PAPEL" ) {
    console.log(tentativaDoComputador[0])
    alert("você ganhou a partida!!!")
}

else if(tentativaDoComputador[0] === "PAPEL" && tentativaDoUser === "PEDRA") {
    console.log(tentativaDoComputador[0])
    alert("o computador ganhou")
}
   
else if(tentativaDoComputador[0] === "TESOURA" && tentativaDoUser === "PEDRA") { 
    console.log(tentativaDoComputador[0])
    alert("Você ganhou")
}

else if(tentativaDoComputador[0] === "PEDRA" && tentativaDoUser === "TESOURA") {
    console.log(tentativaDoComputador[0])
    alert("o computador ganhou")
}

else if(tentativaDoComputador[0] === "TESOURA" && tentativaDoUser === "PAPEL") {
    console.log(tentativaDoComputador[0])
    alert("o computador ganhou")
}

else {
    alert("Passou")
}


console.log(tentativaDoComputador)

// const escolhaDoJogador = prompt("escolha uma das opções: Pedra, Papel, Tesoura, Lagarto, Spock").toUpperCase()


