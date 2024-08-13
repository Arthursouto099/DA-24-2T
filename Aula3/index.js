// Descrição, não vai ser executado
const div = document.querySelector("div")
const h1 = document.querySelector("h1")
const button = document.querySelector("button")


// exercicios da aula 3
console.log("Hello World")
console.log("Hello JavaScipt, ainda prefiro tu na versão azul !!!!!")

const nome = 'Arthur'
const sobrenome = 'Tavares'
const idade = 17
const estudante = true
console.log(`Nome: ${nome}, Sobrenome: ${sobrenome}, Idade: ${idade}, Estudante:  ${estudante}`)

const goat =  "Game of Thrones"
const temporadasDeGoat   = "8"
console.log(typeof goat)
console.log(typeof temporadasDeGoat) 

let novaVariavel 
console.log(typeof novaVariavel)
novaVariavel = 2
console.log(typeof novaVariavel)
novaVariavel = undefined
console.log(typeof novaVariavel)

const idadeNumero = 23
const idadeTexto = idadeNumero.toString()
console.log( typeof idadeNumero)
console.log( typeof idadeTexto)

const idadeTexto2 = '23'
const idadeNumero2 = Number(idadeTexto2)
console.log( typeof idadeTexto2)
console.log( typeof idadeNumero2)



// exercicios proprios
const nomeDoUser= prompt("Qual seu nome: ")
const idadeDoUser = Number(prompt("Qual sua idade: "))

console.log(typeof nomeDoUser) 
console.log(typeof idadeDoUser)

h1.innerText = `Olá ${nomeDoUser}, Tenha um ótimo dia!`

button.addEventListener("click", () => { 
    if(div.classList.contains("body-white")) {
        div.classList.remove("body-white")
        div.classList.add("body-black")

    }
    
    else if(div.classList.contains("body-black")) {
        div.classList.remove("body-black")
        div.classList.add("body-white")
    }
})












