const rl = require("readline-sync")
const numerosNaturais = ["1", "2", "3", '4","5","6","7","8', "9"]

const objectPersonagemModel = { nome: "", coracoes: 6, forca: 1, defesa: 3, inventario: [] }
const objectArmasModel = { nome: "", dano: 1, alcance: 0, efeito: function (personagem) { return personagem.forca += this.dano } }
const objectItensModelTypeCura = { nome: "", efeito: function () { } }
const objectItensModelTypeDano = { nome: "", efeito: function () { }, dano: 0 }


const armas = [{ ...objectArmasModel, nome: "Master Sword", alcance: 1 }, { ...objectArmasModel, nome: "Arco", alcance: 3, dano: 1.5 }]
const itens = [
    { ...objectItensModelTypeDano, nome: "Bomba", dano: 4, efeito: function (inimigo) { return inimigo.coracoes -= this.dano } },
    { ...objectItensModelTypeCura, nome: "Cura", efeito: function (personagem) { if (personagem.coracoes != 6) { return personagem.coracoes += 2 } } }
]
const personagens = [{ ...objectPersonagemModel, nome: "Link", inventario: [armas[0], armas[1]] }, { ...objectPersonagemModel, nome: "Ganondorf" }]



// Um cuidado, caso algum personagem não poossua alguma propriedade
function verificarPropriedadesPersonagem() {
    let verificador = 0
    for (let i = 0; i < personagens.length; i++) {
        if (personagens.length > 0) {
            if (personagens[i].hasOwnProperty("nome") === false) {
                console.log("Personagem não possui a {propriedade} nome")
                verificador += 1
            }
            else if (personagens[i].hasOwnProperty("coracoes") === false) {
                console.log("Personagem não possui a {propriedade} coracoes")
                verificador += 1
            }
            else if (personagens[i].hasOwnProperty("forca") === false) {
                console.log("Personagem não possui a {propriedade} forca")
                verificador += 1
            }
            else if (personagens[i].hasOwnProperty("defesa") === false) {
                console.log("Personagem não possui a {propriedade} defesa")
                verificador += 1
            }
            else if (personagens[i].hasOwnProperty("inventario") === false) {
                console.log("Personagem não possui a {propriedade} inventario")
                verificador += 1
            }
            else {
                console.log(personagens[i])

            }
        }

        else {
            console.log("A lista de personagens está vazia> ")
        }

    }


    if (verificador != 0) return false
    else return true
}

// verificar propriedas das armas
function verificarPropriedadesArmas() {
    let verificador = 0
    for (let i = 0; i < armas.length; i++) {
        if (personagens.length > 0) {
            if (armas[i].hasOwnProperty("nome") === false) {
                console.log("A arma não possui a propriedade {nome} ")
                verificador += 1
            }
            else if (armas[i].hasOwnProperty("dano") === false) {
                console.log("A arma não possui a propriedade {dano}")
                verificador += 1
            }
            else if (armas[i].hasOwnProperty("alcance") === false) {
                console.log("A arma não possui a propriedade {alcance}")
                verificador += 1
            }

            else if (armas[i].hasOwnProperty("efeito") === false) {
                console.log("A arma não possui a propriedade {efeito}")
                verificador += 1
            }

            else {
                console.log(armas[i])
            }
        }

        else {
            console.log("A lista de armas está vazia")
        }
    }


    if (verificador != 0) return false
    else return true
}



// verificar propriedadades de itens/ no caso nome/efeito pois dano é opicional dependo do tipo do item
function verificarPropriedadesItens() {
    let verificador = 0
    for (let i = 0; i < itens.length; i++) {
        if (itens.length > 0) {
            if (itens[i].hasOwnProperty("nome") === false) {
                console.log("Item não possui a {propriedade} nome")
                verificador += 1
            }
            else if (itens[i].hasOwnProperty("efeito") === false) {
                console.log("Item nãoi possui a {propriedade} efeito")
                verificador += 1
            }

            else {
                console.log(itens[i])
            }
        }

        else {
            console.log("A lista está vazia")
        }
    }

    if (verificador != 0) return false
    else return true

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function criarPersonagem() {
    let nome = rl.question("Digite o nome do seu personagem: ")
    while (nome === '') {
        console.log("É necessario colocar um nome ao personagem!")
        console.log("...")
        nome = rl.question("Digite o nome do seu personagem: ")
        console.clear()
    }
    let coracoes = Number(rl.question("Digite quantos corações o personagem " + nome + " possui: "))
    if (coracoes < 1 || coracoes > 10 || isNaN(coracoes) === true) {
        console.log(coracoes)
        while (true) {
            if (isNaN(coracoes) === true) {
                console.log("O numero de corações do personagem precisa ser um número")
            }
            else {
                console.log("É necessario que o personagem tenha entre 1 e 10 corações")
            }
            console.log("...")
            coracoes = Number(rl.question("Digite quantos corações o personagem " + nome + " possui: "))
            if (coracoes >= 1 && coracoes <= 10 && isNaN(coracoes) === false) {
                break
            }
            console.clear()
        }
    }
    let forca = Number(rl.question("Digite a força do personagem " + nome + ": "))
    if (forca < 1 || forca > 4 || isNaN(forca) === true) {
        while (true) {
            if (isNaN(forca) === true) {
                console.log("É necessario que a força do personagem seja um número")
            }
            else {
                console.log("É nessesario que o personagem tenha entre 1 e 4 de força")
            }

            console.log("...")
            forca = Number(rl.question("Digite a força do personagem " + nome + ": "))
            if (forca >= 1 && forca <= 4 && isNaN(forca) === false) {
                break
            }
            console.clear()
        }
    }

    let defesa = Number(rl.question("Digite a defesa do personagem " + nome + ": "))
    if (defesa < 1 || defesa > 5 || isNaN(defesa) === true) {
        while (true) {
            if (isNaN(defesa) === true) {
                console.log("É necessario que a defesa do personagem seja um número")
            }
            else {
                console.log("É nessesario que o personagem tenha entre 1 e 5 de defesa")
            }

            console.log("...")
            defesa = Number(rl.question("Digite a força do personagem " + nome + ": "))
            if (defesa >= 1 && defesa <= 5 && isNaN(defesa) === false) {
                break
            }
            console.clear()
        }
    }
    const inventario = []

    const p1 = { nome: nome, coracoes: coracoes, forca: forca, defesa: defesa, inventario: inventario }
    personagens.push(p1)
    console.log(p1)
    rl.question("Clique para avançar: ")
    console.clear()




    if (verificarPropriedadesPersonagem() === true) {
        console.log("Personagem adicionado com sucesso")
    }
    else {
        console.log("Algo deu errado")
        const index = personagens.indexOf(p1)
        personagens.splice(index, 1)
    }


}




criarPersonagem()


function criarArma() {
    let nome = rl.question("Digite o nome da sua arma: ")
    while (nome === '') {
        console.log("É necessario colocar um nome a sua arma!")
        console.log("...")
        nome = rl.question("Digite o nome da sua arma ")
        console.clear()
    }
    let dano = Number(rl.question("Digite o dano da sua arma: "))
    if (dano < 1 || isNaN(dano) === true) {
        while (true) {
            if (isNaN(dano) === true) {
                console.log("É necessario que o dano seja um numero> ")
            }
            else {
                console.log("O dano precisa ser maior que 0")
            }

            console.log("...")
            dano = Number(rl.question("Digite o dano da sua arma: "))
            if (dano > 1 && isNaN(dano) === false) {
                break
            }
            console.clear()
        }

    }

    let alcance = Number(rl.question("Digite o alcance da sua arma: "))
    if (alcance < 1 || isNaN(alcance) === true) {
        while (true) {
            if (isNaN(alcance) === true) {
                console.log("É necessario que o alcance seja um numero> ")
            }
            else {
                console.log("O alcance precisa ser maior que 0")
            }

            console.log("...")
            alcance = Number(rl.question("Digite o alcance da sua arma: "))
            if (alcance > 1 && isNaN(alcance) === false) {
                break
            }
            console.clear()
        }

    }


    const newObject = {...objectArmasModel, nome: nome, dano: dano, alcance: alcance}
    armas.push(newObject)
    console.log(newObject)
    console.clear()

    if(verificarPropriedadesArmas() === true) {
        console.log("Arma adicionado com sucesso")
    }
    else {
        console.log("Ocorreu um erro")
        const index = armas.indexOf(newObject)
        armas.slice(index, 1)
    }
}


criarArma()


function criarItem() {
    let nome = rl.question("Digite o nome do seu item: ")
    while (nome === '') {
        console.log("É necessario colocar um nome no seu item!")
        console.log("...")
        nome = rl.question("Digite o nome do seu item ")
        console.clear()
    }

    let item = undefined
    
    const question = rl.question("Qual o tipo do seu item cura/dano: ")
    
    if(question.toLowerCase() === "cura") {
        item = {...objectItensModelTypeCura, nome: nome}
    }
    else {
        let dano = Number(rl.question("Digite o dano do seu item: "))
        if (dano < 1 || isNaN(dano) === true) {
            while (true) {
                if (isNaN(dano) === true) {
                    console.log("É necessario que o dano seja um numero> ")
                }
                else {
                    console.log("O dano precisa ser maior que 0")
                }
    
                console.log("...")
                dano = Number(rl.question("Digite o dano do seu item: "))
                if (dano > 1 && isNaN(dano) === false) {
                    break
                }
                console.clear()
            }
    
        }

        item = {...objectItensModelTypeDano, nome: nome, dano: dano}
    }

    itens.push(item)
    console.log(item)
    console.clear()

    if(verificarPropriedadesItens() === true) {
        console.log("Item adicionado com sucesso")
    }
    else {
        console.log("Ocorreu um erro")
        const index = itens.indexOf(item)
        itens.slice(index, 1)
    }

   
}

criarItem()