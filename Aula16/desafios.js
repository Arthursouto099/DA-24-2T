 const rl = require("readline-sync")


// const imprimeValor = (a) => {
//     console.log(a)
// }



// const imprimeDoisValores = (a, b) => {
//     const soma = a + b
//     return soma
// }


// imprimeValor(imprimeDoisValores(6,6))


// DESAFIO #2
const inventarioPersonagem = []

function adicionarItem(inventario) {
   let condicao = true

   while(condicao) {
    const item = rl.question("Qual Item Deseja adicionar? ")
    inventario.push(item)
    console.log(inventario)

    const continuar = String(rl.question("Deseja continuar? S/N ")).toUpperCase()
    if(continuar === "N") {
        console.log(inventario)
        condicao = false
    }

    else if(inventario.length === 5) {
        console.log("Iventario lotado")
        console.log(inventario)
        condicao = false
    }
   }
}


// adicionarItem(inventarioPersonagem)



function removerItem(iventario) {
    let condicao = true


    const decicao = String(rl.question("Você deseja remover algum item do inventario? S/N: ")).toUpperCase()

    if(decicao === "S") {
        while(condicao) {
            const item = rl.question("Digite o Item a ser removido: ")
            if(iventario.includes(item)) {
                const index = iventario.indexOf(item)
                iventario.splice(index, 1)
                console.log("Item removido com sucesso")
                console.log(inventarioPersonagem)
                condicao = false
            }
            else {
                console.log("Esse item não existe no inventario")
            }
        }
    }

    else {
        console.log("Tudo ok, nenhum item removido")
    }
   

  
    
}

// removerItem(inventarioPersonagem)



function listarInventario(inventario) {
    console.log("Todos os itens")
    inventario.forEach(item => {console.log(`----> ${item}`)});
}


// listarInventario(inventarioPersonagem)



function exbirOpcoes() {
    console.log("INVENTARIO DO USER -->")
    console.log("1. Adicionar item")
    console.log("2. Remover item")
    console.log('3. Listar item')
    console.log("4. sair")
}


function escolherOpcoes() {
    exbirOpcoes()
    let condicao = true

    while(condicao) {
    const escolha = Number(rl.question("Digite Sua Opção: "))
    switch(escolha) {
        case 1:
            console.clear()
            adicionarItem(inventarioPersonagem)
            rl.question()
            console.clear()
            exbirOpcoes()
        break
        case 2: 
            console.clear()
            removerItem(inventarioPersonagem)
            rl.question()
            console.clear()
            exbirOpcoes()
        break
        case 3:
            console.clear()
            listarInventario(inventarioPersonagem)
            rl.question()
            console.clear()
            exbirOpcoes()
        break
        case 4: 
            console.clear()
            condicao = false
            console.clear()
        break

    }
    }
    
}

escolherOpcoes()

exbirOpcoes()


