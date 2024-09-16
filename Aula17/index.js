

// const professor = {
//     nome: "Maria",
//     idade: 28,
//     tarefas: ["Dar Aula", "Responder duvidas"],
//     contarPiada: () => {
//         console.log("é pra ver ou pra comer")
//     }
// }



// const spiderMan = {
//     atorPrincipal: "Tom Holand",
//     elenco: ["Maria", "Tia Mey", "Doutor Estranho"],
//     ano: 2023,
//     jaViu: (resposta) => {
//         if(resposta.toUpperCase() === "SIM") console.log("Que legal, veja novamente")
//         else console.log("Você precisa ver esse filme")
//     }
// }


// spiderMan.jaViu("não")
// console.log(spiderMan['atorPrincipal'])
// spiderMan.elenco.forEach(nome => console.log(`Nome --> ${nome}`))
// console.log(spiderMan['ano'])




// console.log(`O nome da pessoa é ${pessoa['nome']}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.genereroMusical}`)


// const {nome, idade, genereroMusical} = pessoa


// console.log(idade)


// const donoDoPet = {nome: "Tavares", pet: {nomeDoPet: "flokinho", raca: "shitzu", idade: 5}}


// console.table(donoDoPet['pet'].nomeDoPet)


// const nomes =  [{nome: "Arthur", idade: 17}]

// function adicionarNome  (nome, idade)  {
// const newName = {nome: nome, idade: idade}
// nomes.push(newName)
// }

// const {nome} = nomes[0]
// console.log(nome)
// adicionarNome("joao", 17)
// adicionarNome("julia", 17)
// adicionarNome("sara", 17)
// adicionarNome("nego", 17)
// console.table(nomes)

// function exibirPrimeiroNome() {
//    for(let i =0; i < nomes.length; i++) { 
//     const {nome} = nomes[i]
//     const colocados = ["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto"]
//     console.log(`${colocados[i]} nome ---> ${nome}`)
//    }
// }


// exibirPrimeiroNome()


// const professores = [
//     {nome: 'lucas', idade: 32, modulo: 1},
//     {nome: 'leo', idade: 29, modulo: 2},
//     {nome: 'Mika', idade: 29, modulo: 3}
// ]



// professores.forEach(professor => console.table(professor))


// for(let professor of professores) {
//     if(professor.idade > 29) {
//         console.log(professor.nome)
//     }
// }




// const curso = {nome: "Noturno Frontend BIG3", linguagens: ["JS", "CSS", "HTML"]}


// curso.linguagens.forEach(linguagen => console.log(`------> ${linguagen}`))


// curso.numeroDeEstdantes = 50
// curso.numeroDeProfessores = professores.length



// console.table(curso)

// const spiderMan = {
//         atorPrincipal: "Tom Holland",
//         elenco: ["Maria(nome que eu inventei)", "Jacob Batalon", "Tony Revolori", "Zendaya"],
//         ano: 2023,
//         jaViu: (resposta) => {
//             if(resposta.toUpperCase() === "SIM") console.log("Que legal, veja novamente")
//             else console.log("Você precisa ver esse filme")
//         }
//     }


// spiderMan.personagens = ["Figurante", "Ned", "Flash", "Mj"]
// spiderMan.personagemPrincipal = "SpiderMan"



// const atoresHomemAranha = []

// const {elenco, atorPrincipal, personagens, personagemPrincipal} = spiderMan

// elenco[0] = "xuxa"
// const papelPrincipal = {nomeDoAtor: atorPrincipal, personagem: personagemPrincipal}
// atoresHomemAranha.push(papelPrincipal)
// for(let i = 0; i < elenco.length; i ++ ) {
//     const atores = {nomeDoAtor: elenco[i], personagem: personagens[i]}
//     atoresHomemAranha.push(atores)
// }


// console.table(atoresHomemAranha)
// console.log(elenco)
// console.log(personagemPrincipal)
// console.log(personagens)



// const usuario = {nome: "tavares", idade: 17, email: "arthurtavres@gmail.com", cidade: "São leopoldo" }


// const newUsuario = {...usuario, nome: "joao", idade: 17, email: "joao@gmail.com", cidade: "nh"}


// console.log(newUsuario)
// console.log(usuario)

// const pessoa = { nome: "Arthur", idade: 17, genereroMusical: "Boombap"}

// function copiaDoObjeto(pessoa) {
// const newObject = {...pessoa, comidasPreferidas: ["panqueca", "lasanha", "frango"], melhorAmigo: {
//     nome: "flores",
//     idade: 18
// }}

// return newObject

// }

// const pessoa2 = copiaDoObjeto(pessoa) 


// console.log(pessoa2.melhorAmigo)

// const {nome, idade} = pessoa2.melhorAmigo


// console.log(`O nome da pessoa é ${pessoa2.nome} e suas comidas preferidas são ${pessoa2.comidasPreferidas}. Seu amelhor amigo se chama ${nome} e tem ${idade}  anos`)


const personagens = [{nome: "Naruto", idade: 17, estilo: "vento", jutsus: ["Rasengan", "Rasengan shuriken", "Bijudama", "Jinjuriki"]}]



function adicionarPersonagem( objeto, nome, idade, estilo, jutsus) {
    const newObject = {...objeto, nome: nome, idade: idade, estilo: estilo, jutsus: jutsus}
    personagens.push(newObject)

}


adicionarPersonagem(personagens[0], "Kakashi", 22, "sharingan", ['Copiar Justsus', 'chidori', 'rinegan'])
adicionarPersonagem(personagens[0], "Itachi", 20, "sharingan", ['Genjustu', 'Mangekio sharingan', 'Traumatizar o proprio irmão'])



function buscarPersonagem(nome) {


personagens.forEach(personagem => {
    if(personagem.nome === nome) {
        console.log(personagem)
    }
    else if(personagem.nome !== nome)  {
        console.log("personagem não encontrado")
       
    }
})



}

buscarPersonagem("Naruto")