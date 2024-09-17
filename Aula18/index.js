const rl = require("readline-sync")


// const filme = {
//     nome: "Auto da Compadecida",
//     ano: 2000,
//     elenco: ["Mathesu Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia CAVENDISH"],
//     transmissoesHoje: [
//         {canal: "Telecine", horario: "21h"},
//         {canal: "Canal Brasils", horario: "19h"},
//         {canal: "Globo", horario: "14h"}

//     ]
// }

// console.log(filme.elenco[0])
// // Vai exibir o primeiro indice[0] da propriedade elenco , cujo é um array de strings

// console.log(filme.elenco[filme.elenco.length - 1])
// // Exibe o ultimo indice da propriedade elenco

// console.log(filme.transmissoesHoje[2])
// //exibe o ultimo objeto da propriedade tranmissoes hoje

// const cahorro = {
//     nome: "Juca",
//     idade: 3,
//     raca: "SRD"
// }

// const gato = {...cahorro, nome: "juba"}
// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "b")}

// console.log(cahorro)
// // Objeto Cahorro
// console.log(gato)
// // Objeto Gato
// console.log(tartaruga)
// // Objeto Tartaruga

// // a sintaxe dos três pontos e para indicar que o objeto que vem depois dos 3 pontos está sendo copiado, usado como base de um novo

// function minhaFuncao(objeto, propriedade) {
//     return objeto[propriedade]
// }

// const pessoa = {
//     nome: "Caio", 
//     idade: 23,
//     backhender: false
// }

// console.log(minhaFuncao(pessoa, "backhender"))
// // vai exibir o atributo backhender que é igual a false
// console.log(minhaFuncao(pessoa, "altura"))
// // esse atributo não existe no obj pessoa



// const pessoa = {nome: "Arthur", apelidos: ["tata", "tutu", "tui"]}


// function imprimeMsg(objeto) {
//     console.log(`Ola meu nome é ${objeto.nome} mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
// }

// imprimeMsg(pessoa)

// const pessoa2 = {...pessoa, apelidos: ["Lindo", "Gostoso", "Perfeito"]}


// imprimeMsg(pessoa2)


// function funcionario(nome, idade, profissao) {
//     const newObject = {nome: nome, idade: idade, profissao: profissao}
//     return newObject
// }

// const f1 = funcionario("Tavares", 17, "Dev Junior")
// const f2 = funcionario("Arthur", 18, "Dev pleno")


// function arrayDeFuncionarios(f1, f2) {
//     const arrayF1 = [f1.nome, f1.nome.length, f1.idade, f1.profissao, f1.profissao.length]
//     const arrayF2 = [f2.nome, f2.nome.length, f2.idade, f2.profissao, f2.profissao.length]

//     return {
//         arrayF1,
//         arrayF2
//     }
// }

// console.log(arrayDeFuncionarios(f1, f2))


// const carrinho = []

// const fruta1 = {nome: "Maça", disponibilidade: true}
// const fruta2 = {...fruta1, nome: "Pera"}
// const fruta3 = {...fruta2, nome: "Banana"}

// function feira(fruta) {
//     carrinho.push(fruta)
// }

// feira(fruta1)
// feira(fruta2)
// feira(fruta3)

// console.table(carrinho)

// function controleDeCarrinho(fruta) {
//   fruta.disponibilidade = false
//   console.log(fruta)
// }

// controleDeCarrinho(fruta1)

// console.table(carrinho)





// Desafio 1

// const nome = rl.question("Digite seu nome: ")
// const idade = rl.question("Digite sua idade: ")
// const profissao = rl.question("Digite sua profissão: ")

// function funcionario(nome, idade, profissao) {
//     const newObject = {nome: nome, idade: idade, profissao: profissao}
//     return newObject
// }



// const f1 = funcionario(nome, idade, profissao)
// console.log(f1)
// console.log(typeof f1)

// Desafio 2

// const firstMovie = {nome: "Dracula", anoDeLancamento: 2003}
// const secondMovie = {...firstMovie, nome: "Meninas Malvadas", anoDeLancamento: 2006}

// function dataDeLanamento(filme1, filme2) {
//  if(filme1.anoDeLancamento < filme2.anoDeLancamento) {
//     console.log(filme1.nome + " foi lançado antes de " + filme2.nome)
//     console.log(filme1)
//  }

//  else if(filme1.anoDeLancamento === filme2.anoDeLancamento) {
//     console.log("Os filmes foram lançados na mesma data")
//  }
//  else {
//     console.log(filme2.nome + " foi lançado antes de " + filme1.nome)
//     console.log(filme2)
//  }


// }


// dataDeLanamento(firstMovie, secondMovie)



// Desafio 3


// const t1 = {nome: "Churrasco", tipo: "Tradição", anoDeInicio: "século XVII", descricao: "Talvez a tradição mais conhecida dos gaúchos. É também a principal culinária típica. O churrasco – de preferência assado em espetos – tem origem indígena. Antes da chegada dos colonizadores, os povos guaranis já tinham o costume de abrir buracos no chão e assar carnes com o auxílio de pedras e grelhas de madeira verde.", saudar: () => console.log(`${t1.nome}, Masssss bahhhh tche`)}

// const t2 = {nome: "Chimarrão", tipo: "Tradição", anoDeInicio: "século XVI,", descricao: 
//    " Dia do chimarrão: de onde surgiu a bebida, benefícios e como O chimarrão é uma bebida à base de erva-mate, originária do sul do Brasil, transmitida pelos jesuítas que a incentivaram visando afastar o consumo do álcool. Originária dos índios Guaranis, a bebida possui diversos benefícios e é consumido quente em uma cuia, com erva-mate moída e água morna.", saudar: () => console.log(`${t2.nome}, Chimarrão bem bagual`)}  

// const t3 = {nome: "Bento Gonçalves da Silva", tipo: "Personagem", anoDeInicio: 1788, descricao: "Bento Gonçalves da Silva (Triunfo, 23 de setembro de 1788 – Pedras Brancas, 18 de julho de 1847) foi um militar brasileiro, um dos líderes da Revolução Farroupilha, que buscava a independência da província do Rio Grande do Sul do Império do Brasil. Ele foi o primeiro presidente da República Rio-Grandense e uma das figuras mais importantes da história do Rio Grande do Sul.", saudar: () => console.log(`${t3.nome}, (Triunfo, 23 de setembro de 1788 – Pedras Brancas, 18 de julho de 1847) foi um militar brasileiro, um dos líderes da Revolução Farroupilha, que buscava a independência da província do Rio Grande do Sul do Império do Brasil.`) }

// const rioGrande = [t1, t2, t3]

// function exibirTradicao(arrayDeTradicoes) {
//     arrayDeTradicoes.forEach(tradicao => tradicao.saudar())
// }


// exibirTradicao(rioGrande)