const rl = require("readline-sync")


// array de objtos para guardar os personagens
const personagens = [
    //Objeto padrão para ser copiado
    {
        nome: "Tavares",
        classe: "Guerreiro",
        hp: 100,
        habilidades: ["Força Suprema", "Magia", "Voar"],
        acoes: ["Personagem Defendeu"],
        // método  para atacar
        atacar: function () {
            console.log(`${this.nome} está atacando`)
            this.acoes.push(`${this.nome} está atacando`)
        },
        // método  para defender
        defender: function () {
            console.log(`${this.nome} está defendendo`)
            this.acoes.push(`${this.nome} está defendendo`)
        },
        // método  para usar ataque especial
        // uma constante e criada a partir do método random que gera um numero "semi aleatorio"
        // com base nisso, usa de indice para escolher umas da habilidades especiais aleatoriamente 
        usarHabilidadeEspecial: function () {
            const numeroAleatorio = Math.floor(Math.random() * this.habilidades.length)
            console.log(`${this.nome} usou a habilidade especial ${this.habilidades[numeroAleatorio]}`)
            this.acoes.push(`${this.nome} usou a habilidade ${this.habilidades[numeroAleatorio]}`)
        }


    },

    {
        nome: "Java",
        classe: "Mago",
        hp: 100,
        habilidades: ["Controle da força", "Magia", "Magias de mago muito louca"],
        acoes: ["Personagem Defendeu"],
        atacar: function () {
            console.log(`${this.nome} está atacando`)
            this.acoes.push(`${this.nome} está atacando`)
        },
        defender: function () {
            console.log(`${this.nome} está defendendo`)
            this.acoes.push(`${this.nome} está defendendo`)
        },
        usarHabilidadeEspecial: function () {
            const numeroAleatorio = Math.floor(Math.random() * this.habilidades.length)
            console.log(`${this.nome} usou a habilidade especial ${this.habilidades[numeroAleatorio]}`)
            this.acoes.push(`${this.nome} usou a habilidade ${this.habilidades[numeroAleatorio]}`)

        }


    }
]
// Array para armazenar os objetos de personagens


// funcão que encontra o index do Personagem que o usuario insere o nome, e usa o método atacar
function atacar() {
    console.log("____Personagens Disponíveis____\n")
    personagens.forEach(personagem => console.log(`------->  Nome: ${personagem.nome}, Classe: ${personagem.classe}, HP: ${personagem.hp}`))
    console.log("-------------------------------------------------------------")
    const escolha = rl.question("Escolha o personagem no qual você deseja usar o ataque: ")
    for (let personagem of personagens) {
        if (personagem.nome === escolha) {
            const index = personagens.indexOf(personagem)
            personagens[index].atacar()
        }
    }
}

// funcão que encontra o index do Personagem que o usuario insere o nome, e usa o método usarHablidadeEspecial
function atacarEspecial() {
    console.log("____Personagens Disponíveis____\n")
    personagens.forEach(personagem => console.log(`------->  Nome: ${personagem.nome}, Classe: ${personagem.classe}, HP: ${personagem.hp}`))
    console.log("-------------------------------------------------------------")
    const escolha = rl.question("Escolha o personagem no qual você deseja usar o ataque: ")
    for (let personagem of personagens) {
        if (personagem.nome === escolha) {
            const index = personagens.indexOf(personagem)
            personagens[index].usarHabilidadeEspecial()
        }
    }
}

// funcão que encontra o index do Personagem que o usuario insere o nome, e usa o método defender
function defender() {
    console.log("____Personagens Disponíveis____\n")
    personagens.forEach(personagem => console.log(`------->  Nome: ${personagem.nome}, Classe: ${personagem.classe}, HP: ${personagem.hp}`))
    console.log("-------------------------------------------------------------")
    const escolha = rl.question("Escolha o personagem que vai usar a defesa: ")
    for (let personagem of personagens) {
        if (personagem.nome === escolha) {
            const index = personagens.indexOf(personagem)
            personagens[index].defender()
        }
    }
}




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
        const desejaContinuar = String(rl.question("Você deseja continuar adicionando habilidades? ")).toLowerCase()
        if (desejaContinuar === "nao") {
            condicao = false
            console.log(habilidades)
        }

        else console.log(habilidades)
    }


    const newObj = { ...personagens[0], nome: nomeDoPersonagem, classe: classeDoPersonagem, hp: hpDoPersonagem, habilidades: habilidades, acoes: historicoDeAcoes }
    personagens.push(newObj)
    console.log("Personagem Adicionado com Sucesso!")
    return newObj

}

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

            console.log("1. Atacar")
            console.log("2. Defender\n")

            const escolha = String(rl.question("Ecolha uma das opções: ")).toLowerCase()

            if (escolha === "atacar") {
                let dano = 20
                personagem1().usarHabilidadeEspecial()
                console.log(`e causou ${dano} de dano no ${personagemAleatorio().nome}`)
                console.log(`A vida de ${personagemAleatorio().nome} é igual a ${personagemAleatorio().hp = personagemAleatorio().hp - dano}HP\n`)
                rl.question("Clique para avançar")
                if (personagemAleatorio().hp <= 0) {
                    console.log(`${personagemAleatorio().nome} FOI DERROTADO !`)
                    console.log("VOCÊ GANHOU")
                }
            }
            else if (escolha === "defender") {
                personagem1().defender
                console.log(`${personagem1().nome} Defendeu o Ataque`)
                console.log(`A vida de ${personagem1().nome} é de ${personagem1().hp} HP\n`)
            }



        }
        else {
            let dano = 20
            console.log(`VEZ DO ${personagemAleatorio().nome}`)
            personagemAleatorio().usarHabilidadeEspecial()
            console.log(`e causou ${dano} de dano no ${personagem1().nome}`)
            console.log(`A vida de ${personagem1().nome} é igual a ${personagem1().hp = personagem1().hp - dano}HP\n`)
            rl.question("Clique para avançar")
            if (personagem1().hp <= 0) {
                console.log(`${personagem1().nome} FOI DERROTADO !`)
                console.log("VOCÊ PERDEU")
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
    console.log("4. Atacar")
    console.log("5. Defender")
    console.log("6. Ataque Especial")
    console.log("7. Deletar Personagem")
    console.log("8. Sair")
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
                buscarPersonagem()
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 3:
                console.clear()
                listarPersonagens()
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 4:
                console.clear()
                atacar()
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 5:
                console.clear()
                batalha()
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 6:
                console.clear()
                atacarEspecial()
                rl.question()
                console.clear()
                exbirOpcoes()
                break
            case 7:
                console.clear()
                deletarPersonagem()
                rl.question()
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