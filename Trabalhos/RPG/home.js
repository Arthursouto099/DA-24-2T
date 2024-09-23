const rl = require("readline-sync")

const model = {
    nome: "",
    classe: "",
    hp: 100,
    ataque: 10,
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
        return 20
    },
    pontuacao: 0
}

const modelMonster = {nome: "", classe: "", hp: 0, ataque: 0, nivel: 0 }

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

const monstros = [
    {...modelMonster, nome: "Curupira", classe: "Lenda", hp: 50, ataque: 7, nivel: 1 },
    {...modelMonster, nome: "Golem", classe: "Guardião", hp: 100, ataque: 9, nivel: 3},
    {...modelMonster, nome: "Vampiro", classe: "Demonio", hp: 100, ataque: 12, nivel: 5}
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

function escolherPersonagem(personagem) {
    for (let personagem of personagens) {
        if (personagem.nome === personagem) {
            const index = personagens.indexOf(personagem)
            console.log(index)
            return personagens[index]
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

function escolherPersonagem(nome) {
    for (let personagem of personagens) {
        if (personagem.nome === nome) {
            const index = personagens.indexOf(personagem)
            console.log(index)
            return personagens[index]
        }
        
    }
}

function atacarMonstro(personagem ,monstro) {
    const p1 = personagem
    console.log("STATUS DO SEU JOGADOR")
    console.log(`NOME: ${p1.nome}, CLASSE: ${p1.classe}, HP: ${p1.hp}, ATQ: ${p1.ataque}, HABILIDADES: ${p1.habilidades.join("<===>")}\n`)

    let condicao = true

    console.log("VOCÊ ENCONTROU UM MONSTRO")
    console.log("STATUS DO MONSTRO")
    console.log(`Nome: ${monstro.nome}, Hp: ${monstro.hp}, Classe: ${monstro.classe}\n`)

    while(condicao) {
        const numAleatorio = Math.floor(Math.random() * 3)
    
        if(numAleatorio === 0) {
            console.log("VEZ DO MONSTRO")
            p1.hp = p1.hp - monstro.ataque
            console.log(`MONSTRO CAUSOU ${monstro.ataque} DE DANO EM VOCÊ`)
            console.log(`SUA VIDA É DE ${p1.hp}\n`)
            rl.question()
            if(p1.hp <= 0) {
                condicao = false
            }
        }

        else {
            console.log("SUA VEZ")

            console.log("1. Atacar")
            console.log("2. Ataque Especial\n")
            

            const escolha = String(rl.question("Ecolha uma das opções: ")).toLowerCase()


            if(escolha === "1") {
                monstro.hp = monstro.hp - p1.ataque
                console.log(`VOCÊ CAUSOU ${p1.ataque} DE DANO NO MONSTRO`)
                console.log(`A VIDA DO MONSTRO É DE ${monstro.hp}HP\n`)
                rl.question()
                if(monstro.hp <= 0) {
                    console.log("Monstro foi derrotado")
                    condicao = false
                }

            }

            else {
                p1.usarHabilidadeEspecial()
                monstro.hp = monstro.hp - 20
                console.log(`VOCÊ CAUSOU ${20} DE DANO NO MONSTRO`)
                console.log(`A VIDA DO MONSTRO É DE ${monstro.hp}HP\n`)
                rl.question()
                if(monstro.hp <= 0) {
                    console.log("Monstro foi derrotado")
                    condicao = false
                }

            }
        }
    }


}





function aumentarPontuação() {
const nome = rl.question("Digite o nome do personagem que você deseja aumentar a pontuação: ")
const p1 = escolherPersonagem(nome)


let condicao = true
let xp = 0


while(condicao) {
    const numAleatorio = Math.floor(Math.random() * monstros.length)
    const monstro = monstros[numAleatorio]
    const hpMonstroOg = monstro.hp
    atacarMonstro(p1, monstro)

    const desejaContinuar = rl.question("Deseja continuar? sim/nao")

    if(desejaContinuar === "nao") {
        condicao = false
    }
    
    p1.hp = p1.hp + 20
    if(monstro.hp <=0) {
        monstro.hp = hpMonstroOg
    } 
    if(p1.hp !== 0) {
        xp = 1000
    }
    console.clear()
  

}

p1.pontuacao = xp


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
                rl.question("Clique para avançar\n")
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

            console.log("SUA VEZ")

            console.log("1. Atacar")
            console.log("2. Defender")
            console.log("3. Ataque Especial\n")
            

            const escolha = String(rl.question("Ecolha uma das opções: ")).toLowerCase()
         
  
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
                rl.question("Clique para avançar\n")
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
    console.log("7. Jogar")
    console.log("8. Sair")
}

function exbirOpcoesDeJogo() {
    console.log("Opções de jogo -->")
    console.log("1. Upar XP")
    console.log("?. Menu Principal")
}

function escolherOpcoesDeJogo() {
    exbirOpcoesDeJogo()
    let condicao = true
    while (condicao) {
        const escolha = Number(rl.question("Digite Sua Opção: "))

        switch(escolha) {
            case 1:
                console.clear()
                aumentarPontuação()
                rl.question("Clique qualuqer tecla")
                console.clear()
                exbirOpcoesDeJogo()
            break

            case 10: 
                console.clear()
                rl.question("Clique qualuqer tecla")
                escolherOpcoes()
                console.clear()
            break

        }

        
    }
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
                escolherOpcoesDeJogo()
                console.clear()
                exbirOpcoes()
            break
             case 8:
                console.clear()
                condicao = false
                console.clear()
                break

        }
    }

}




escolherOpcoes()

exbirOpcoes()



