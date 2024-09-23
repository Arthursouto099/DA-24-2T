const rl = require("readline-sync")

const model = {
    nome: "",
    classe: "",
    hp: 100,
    habilidades: [],
    acoes: [],
    // método  para atacar
    atacar: function () {
        console.log(`ESTÁ ATACANDO`)
        this.acoes.push(`${this.nome} está atacando`)
    },
    // método  para defender
    defender: function () {
        console.log(`ESTÁ DEFEDENDO`)
        this.acoes.push(`${this.nome} está defendendo`)
    },
    // método  para usar ataque especial
    // uma constante e criada a partir do método random que gera um numero "semi aleatorio"
    // com base nisso, usa de indice para escolher umas da habilidades especiais aleatoriamente 
    usarHabilidadeEspecial: function () {
        const numeroAleatorio = Math.floor(Math.random() * this.habilidades.length)
        console.log(`USOU A HABILIDADE ESPECIAL  ${this.habilidades[numeroAleatorio]}`)
        this.acoes.push(`${this.nome} usou a habilidade ${this.habilidades[numeroAleatorio]}`)
    }
}

// array de objtos para guardar os personagens
const personagens = [
    //Objeto padrão para ser copiado
    // {
    //     nome: "Tavares",
    //     classe: "Guerreiro",
    //     hp: 100,
    //     habilidades: ["Força Suprema", "Magia", "Voar"],
    //     acoes: ["Personagem Defendeu"],
    //     // método  para atacar
    //     atacar: function () {
    //         console.log(`VOCÊ ESTÁ ATACANDO`)
    //         this.acoes.push(`${this.nome} está atacando`)
    //     },
    //     // método  para defender
    //     defender: function () {
    //         console.log(`VOCÊ ESTÁ DEFEDENDO`)
    //         this.acoes.push(`${this.nome} está defendendo`)
    //     },
    //     // método  para usar ataque especial
    //     // uma constante e criada a partir do método random que gera um numero "semi aleatorio"
    //     // com base nisso, usa de indice para escolher umas da habilidades especiais aleatoriamente 
    //     usarHabilidadeEspecial: function () {
    //         const numeroAleatorio = Math.floor(Math.random() * this.habilidades.length)
    //         console.log(`VOCÊ USOU A HABILIDADE ESPECIAL  ${this.habilidades[numeroAleatorio]}`)
    //         this.acoes.push(`${this.nome} usou a habilidade ${this.habilidades[numeroAleatorio]}`)
    //     }


    // },

    {...model, nome: "Tavares", class: "Guerreiro", hp: 100, habilidades: ["Força Suprema", "Magia", "Voar"], acoes: [] },

    {...model, nome: "Java", classe: "Mago", hp: 100, habilidades: ["magia", "fogo"], acoes: []}

    
]
// Array para armazenar os objetos de personagens



// Função para deletar usuario
function deletarPersonagem() {
    console.log("____Personagens Disponíveis____\n")
    personagens.forEach(personagem => console.log(`------->  Nome: ${personagem.nome}, Classe: ${personagem.classe}, HP: ${personagem.hp}`))
    console.log("-------------------------------------------------------------")
    const nomeDoPersonagem = rl.question("Digite o nome do personagem que você deseja deletar: ")
    for (let personagem of personagens) {
        if (personagem.nome === nomeDoPersonagem) {
            const index = personagens.indexOf(personagem)
            console.log(index)
            personagens.splice(index, 1)
        }
    }
}

// Função para buscar um personagem especifico
function buscarPersonagem() {
    console.log("____Personagens Disponíveis____\n")
    personagens.forEach(personagem => console.log(`------->  Nome: ${personagem.nome}, Classe: ${personagem.classe}, HP: ${personagem.hp}`))
    console.log("-------------------------------------------------------------")
    const nomeDoPersonagem = rl.question("Digite o nome do personagem que você deseja encontrar: ")
    for (let personagem of personagens) {
        if (personagem.nome === nomeDoPersonagem) {
            const index = personagens.indexOf(personagem)
            console.log(index)
            console.log(personagens[index])
        }
    }
}

// Função para listar o nome de todos os perosnagens
function listarPersonagens() {
    console.log("Personagens ")
    personagens.forEach(personagem => console.log(`------->  ${personagem.nome}`))
    const desejaBuscarPersonagem = String(rl.question("Deseja buscar as caracteristicas de um personagem especifico? ")).toLowerCase()
    console.clear()
    if (desejaBuscarPersonagem === "sim") {
        buscarPersonagem()
    }
    else {
        console.log("Clique qualquer tecla")
    }

}

// Função para ver as ações de determinado personagem
function verAcoesPersonagem() {
    console.log("____Personagens Disponíveis____\n")
    personagens.forEach(personagem => console.log(`------->  Nome: ${personagem.nome}, Classe: ${personagem.classe}, HP: ${personagem.hp}`))
    console.log("-------------------------------------------------------------")

    const nomeDoPersonagem = rl.question("Digite o nome do seu personagem: ")
    const personagem = () => {
        let personagemEscolhido = undefined
        for (let personagem of personagens) {
            if (personagem.nome === nomeDoPersonagem) {
                const index = personagens.indexOf(personagem)
                personagemEscolhido = personagens[index]
            }
        }

        return personagemEscolhido
    }

    console.log(personagem().acoes)


}



// função que cria um Personagem novo
function criarPersonagem() {
    const nomeDoPersonagem = rl.question("Digite o nome do seu Personagem: ")
    const classeDoPersonagem = rl.question("Digite a classe do seu Personagem: ")
    const hpDoPersonagem = Number(rl.question("Digite os pontos de HP do seu Personagem: "))
    const habilidades = []
    const historicoDeAcoes = []
    let condicao = true

    while (condicao) {
        const habilidade = rl.question("Digite uma habilidade do seu Personagem: ")
        console.log(`${habilidade} foi adicionada com sucesso`)
        habilidades.push(habilidade)
        const desejaContinuar = String(rl.question("Você deseja continuar adicionando habilidades?  sim/nao ")).toLowerCase()
        if (desejaContinuar === "nao") {
            condicao = false
            console.log(habilidades)
        }

        else console.log(habilidades)
    }


    const newObj = { ...model, nome: nomeDoPersonagem, classe: classeDoPersonagem, hp: hpDoPersonagem, habilidades: habilidades, acoes: historicoDeAcoes }
    personagens.push(newObj)
    console.log("Personagem Adicionado com Sucesso!")
    return newObj

}

//Função que simula uma batalha
function batalha() {
    console.log("____Personagens Disponíveis____\n")
    personagens.forEach(personagem => console.log(`------->  Nome: ${personagem.nome}, Classe: ${personagem.classe}, HP: ${personagem.hp}`))
    console.log("-------------------------------------------------------------")

    const escolhaDoUsuario = rl.question("Digite o nome do seu personagem: ")
    const personagem1 = () => {
        let personagemEscolhido = undefined
        for (let personagem of personagens) {
            if (personagem.nome === escolhaDoUsuario) {
                const index = personagens.indexOf(personagem)
                personagemEscolhido = personagens[index]
            }
        }

        return personagemEscolhido
    }

    console.log("STATUS DO SEU PERSONAGEM")
    console.log(`Nome: ${personagem1().nome}, Classe: ${personagem1().classe}, HP: ${personagem1().hp}, HABILIDADES: ${personagem1().habilidades.join(" --> ")} \n`)
    const personagemAleatorio = () => {
        let numeroAleatorio = Math.floor(Math.random() * personagens.length)
        let escolhaDoComputador = personagens[numeroAleatorio]

        while (escolhaDoComputador.nome === personagem1().nome) {
            numeroAleatorio = Math.floor(Math.random() * personagens.length)
            escolhaDoComputador = personagens[numeroAleatorio]
        }


        return escolhaDoComputador
    }


    console.log("STATUS DO PERSONAGEM DA MAQUINA")
    console.log(`Nome: ${personagemAleatorio().nome}, Classe: ${personagemAleatorio().classe}, HP: ${personagemAleatorio().hp}, HABILIDADES: ${personagemAleatorio().habilidades.join(" --> ")}\n`)


    rl.question("Clique qualquer tecla para iniciar: ")
    console.clear()


    while (personagem1().hp && personagemAleatorio().hp > 0) {
        const dadoDeBatalha = Math.floor(Math.random() * 2)


        if (dadoDeBatalha === 0) {
            // let dano = 20
            // console.log(`VEZ DO ${personagemAleatorio().nome}`)
            // personagemAleatorio().usarHabilidadeEspecial()
            // console.log(`e causou ${dano} de dano no ${personagem1().nome}`)
            // console.log(`A vida de ${personagem1().nome} é igual a ${personagem1().hp = personagem1().hp - dano}HP\n`)
            // rl.question("Clique para avançar\n")

            const escolha = Math.floor(Math.random() * 3)
             console.log("VEZ DA MAQUINA")

            if (escolha === 2) {
                let dano = 20
                personagemAleatorio().usarHabilidadeEspecial()
                console.log(`A MAQUINA CAUSOU ${dano} DE DANO EM VOCÊ`)
                console.log(`SUA VIDA É DE ${personagem1().hp = personagem1().hp - dano}HP\n`)
                rl.question("Clique para avançar\n")
                if (personagem1().hp <= 0) {
                    console.log(`VOCÊ FOI DERROTADO !`)
                    console.log("VOCÊ PERDEU")
                }
            }
            else if (escolha === 1) {
                personagemAleatorio().defender
                console.log(`A MAQUINA DEFENDEU O ATAQUE`)
                console.log(`A MAQUINA NÃO SOFREU DANO\n`)
            }

            else {
                let dano = 10
                personagemAleatorio().atacar()
                console.log(`A MAQUINA ATACOU VOCÊ E CAUSOU ${dano} DE DANO BRUTO`)
                console.log(`SUA VIDA É DE ${personagem1().hp = personagem1().hp - dano}HP`)
                rl.question("Clique para avançar\n")
                if (personagem1().hp <= 0) {
                    console.log(`VOCÊ FOI DERROTADO !`)
                    console.log("VOCÊ PERDEU")
                }
            }
        }

        else {

            console.log("1. Atacar")
            console.log("2. Defender")
            console.log("3. Ataque Especial\n")
            

            const escolha = String(rl.question("Ecolha uma das opções: ")).toLowerCase()
         
            console.log("SUA VEZ")
            if (escolha === "3") {
                let dano = 20
                personagem1().usarHabilidadeEspecial()
                console.log(`VOCÊ CAUSOU ${dano} DE DANO NA MAQUINA`)
                console.log(`A VIDA DA MAQUINA É IGUAL A ${personagemAleatorio().hp = personagemAleatorio().hp - dano}HP\n`)
                rl.question("Clique para avançar\n")
                if (personagemAleatorio().hp <= 0) {
                    console.log(`A MAQUINA FOI DERROTADA!`)
                    console.log("VOCÊ GANHOU")
                }
            }
            else if (escolha === "2") {
                personagem1().defender
                console.log(`VOCÊ DEFENDEU O ATAQUE`)
                console.log(`VOCÊ NÃO SOFREU DANO\n`)
            }

            else {
                let dano = 10
                personagem1().atacar()
                console.log(`VOCÊ ATACOU A MAQUINA E CAUSOU ${dano} DE DANO`)
                console.log(`A VIDA DA MAQUINA É DE ${personagemAleatorio().hp = personagemAleatorio().hp - dano}HP`)
                rl.question("Clique para avançar\n")
                if (personagemAleatorio().hp <= 0) {
                    console.log(`A MAQUINA FOI DERROTADA !`)
                    console.log("VOCÊ GANHOU")
                }
            }



        }
    }

    personagem1().hp = 100
    personagemAleatorio().hp = 100


}







function exbirOpcoes() {
    console.log("Gerenciamento De Personagens -->")
    console.log("1. Criar Personagem")
    console.log("2. Procurar Personagem")
    console.log('3. Listar Personagens')
    console.log("4. Batalha")
    console.log("5. Deletar Personagem")
    console.log("6: Ver Historico de ações do personagem")
    console.log("7. Sair")
}


function escolherOpcoes() {
    exbirOpcoes()
    let condicao = true

    while (condicao) {
        const escolha = Number(rl.question("Digite Sua Opção: "))
        switch (escolha) {
            case 1:
                console.clear()
                criarPersonagem()
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 2:
                console.clear()
                if(personagens.length > 0) {
                    buscarPersonagem()
                }
                else {
                    console.log("Não existe nenhum personagem na lista")
                }
                
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 3:
                console.clear()
                if(personagens.length > 0) {
                    listarPersonagens()
                }
                else {
                    console.log("Não existe nenhum personagem na lista")
                }
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 4:
                console.clear()
                batalha()
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 5:
                console.clear()
                deletarPersonagem()
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 6: 
                console.clear()
                verAcoesPersonagem()
                rl.question()
                console.clear()
                exbirOpcoes()
                break
             case 7:
                console.clear()
                condicao = false
                console.clear()
                break

        }
    }

}




escolherOpcoes()

exbirOpcoes()