const rl = require("readline-sync")

const objectPersonagemModel = { nome: "", coracoes: 6, forca: 1, defesa: 3, inventario: [] }
const objectArmasModel = { nome: "", dano: 1, alcance: 0, efeito: function (personagem) { return personagem.forca += this.dano } }
const objectItensModelTypeCura = { nome: "", efeito: function () { } }
const objectItensModelTypeDano = { nome: "", efeito: function () { }, dano: 0 }



const personagens = [{ ...objectPersonagemModel, nome: "Link" }, { ...objectPersonagemModel, nome: "Ganondorf" }]

const armas = [{ ...objectArmasModel, nome: "Master Sword", alcance: 1 }, { objectArmasModel, nome: "Arco", alcance: 3, dano: 1.5 }]

const itens = [
    { ...objectItensModelTypeDano, nome: "Bomba", dano: 4, efeito: function (inimigo) { return inimigo.coracoes -= this.dano } },
    { ...objectItensModelTypeCura, nome: "Cura", efeito: function (personagem) { if (personagem.coracoes != 6) { return personagem.coracoes += 2 } } }
]


function verificarPersonagens() {
    for (let i = 0; i < personagens.length; i++) {
        if (personagens.length > 0) {
            if (personagens[i].hasOwnProperty("nome") === false ) {
                console.log("Personagem não possui a caracteristica nome")
            }
            else if (personagens[i].hasOwnProperty("coracoes") === false ) {
                console.log("Personagem não possui a caracteristica coracoes")
            }
            else if (personagens[i].hasOwnProperty("forca") === false ) {
                console.log("Personagem não possui a caracteristica forca")
            }
            else if (personagens[i].hasOwnProperty("defesa") === false ) {
                console.log("Personagem não possui a caracteristica defesa")
            }
            else if (personagens[i].hasOwnProperty("inventario") === false ) {
                console.log("Personagem não possui a caracteristica inventario")
            }
            else {
                console.log(personagens[i])
            }
        }
       
    }
}

verificarPersonagens()


// console.log(objectPersonagemModel.hasOwnProperty('date'))