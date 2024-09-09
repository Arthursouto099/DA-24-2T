
// function calculoDaArea(largura, altura) {
//  const area = largura * altura
//  return `Sua area e de ${area}`

// }


// console.log(calculoDaArea(400, 600))


// function boasVindas() {
//     console.log("Bem Vindo Turma 24-2T")
// }

// boasVindas()


// const calculo = (a, b) => {
//     return a + b
// }


// console.log(calculo(5, 5))

// const dobreEPasseProProximo = (number) => {console.log(`O dobro de ${number} é ${number * 2}`)}
// dobreEPasseProProximo(5)



// function imc(peso, altura) {
// const calculo = Number((peso / (altura ** 2)).toFixed(2))
// console.log(calculo)

// switch (true) {
//     case calculo < 16:
//      alert("Você está muito magro")
//         break;
//     case calculo > 16 && calculo < 25:
//      alert("Você está no peso ideal")
//         break
//     case calculo > 25 && calculo < 29: 
//      alert("Acima Do Peso")
//         break
//     case calculo > 29 && calculo < 34:
//      alert("Obesidade Grau 1")
//         break
//     case calculo > 34 && calculo < 39:
//      alert("Obesidade Grau 2")
//         break
//     default: 
//  alert("Obesidade Grau 3")
//         break;
// }

// }


// const pesoDoUser = Number(prompt("Digite Seu Peso: "))
// const alturaDoUser = Number(prompt("Digite sua Altura: "))


// imc(pesoDoUser, alturaDoUser)


// const nomes = (nome) => console.log(`Olá ${nome}`)


// nomes("tavares")
// nomes("Arthur")
// nomes("Souto")


// const soma = (num1, num2) => console.log(`A soma dos numeros ${num1} e ${num2} é ${num1 + num2}`)

// soma(3, 3)
// soma(5, 5)


// const vitorMensagem = () => {
// const perguntaNome = prompt("Você é mesmo o Vitor? ").toUpperCase()    
// if(perguntaNome === "SIM") {
//     const perguntaEscola = prompt("Onde Você Estudou? ").toUpperCase()

//     if(perguntaEscola === "HAYDÉE") {
//         alert(`Realmente é você Vitor , você de fato estudou no ${perguntaEscola} que é bem pior que o Caic`)
//     }

//     else {
//         alert("Rala Peito Impostor")
//     }
// }

// else {
//     console.log("Raleeee Peitoooooooo")
// }
 
// }


// vitorMensagem()


// const soma2 = (a, b) => { return  a + b} 
// console.log(soma(5, 5))


// const numeros = [60, 1, 54, 6,8 ,9, 321, 10]


// const newArray = (array) => {
// let fisrtNum = numeros[(numeros.length - 1) - numeros.length + 1] / 2
// let lastNum = numeros[numeros.length - 1] / 2
// return newArrayMaxMin = [fisrtNum, lastNum]
// }

// console.log(newArray(numeros))


// const calculaArea = function(largura, altura) {
//     return largura * altura
// }


// const resultado = calculaArea(2, 5)
// console.log(resultado)

// const soma3 = function(a, b) {return `A soma dos numeros ${a} e ${b} é ${(a + b)}`}


// console.log(soma(4,4)) 


// const dobro = (a) => {return `O dobro do numero ${a} é ${a*2}`}

// console.log(dobro(15)) 


function determinaMonstra(nomeDoPesquisador, experiencia) {
const lobo = ["TRANSFORMA COM A LUA CHEIA"]
const vampiro = ["TEM PELE GELADA"]
const humano = ["NORMAL"]


const numeroSorteado = Math.floor(Math.random() * 9)

function novato(numero) {
    for(let i = 0; i < numero; i++) {
        alert(`você tem ${numero} tentativas`)
        const pergunta = prompt("Você Possui alguma caracteristica da criatura?: ") 

        if(lobo.includes(pergunta)) {
           alert("Sua Criatura é um Lobo")
        }

    }
}



if(experiencia = 1) {
    alert("Como Sua Experiencia É level " + experiencia + " você tera mais dificuldade em acertar acertar a criatura.")
    novato(numeroSorteado)
    
}


    
}


determinaMonstra('TAVARES', 1)