const num1 = document.getElementById("1")
const num2 = document.getElementById("2")
const resultado = document.querySelector("h1")
const buttonSoma = document.getElementById("somar")
const buttonSubtrair = document.getElementById("subtrair")
const buttonDividir = document.getElementById("dividir")
const buttonMultiplicar = document.getElementById("multiplicar")
const buttonArea = document.querySelector(".button")


buttonSoma.addEventListener("click", () => {
   const result = Number(num1.value) + Number(num2.value)
    resultado.innerText = result 
    if(resultado.innerText == result) {
        criaButton()
    }
})

buttonSubtrair.addEventListener("click", () => {
    const result = Number(num1.value) - Number(num2.value)
     resultado.innerText = result 
     if(resultado.innerText == result) {
         criaButton()
     }
 })

buttonDividir.addEventListener("click", () => {
    if(num1.value === '' || num2.value === '') {
        alert("Divisão por zero não foi possivel")
        num1.value = null
        num2.value = null
       
    } 
    else {
        const result = Number(num1.value) / Number(num2.value)
        resultado.innerText = result 
        if(resultado.innerText == result) {
            criaButton()
        }
    }
   
 })

 
buttonMultiplicar.addEventListener("click", () => {
    const result = Number(num1.value) * Number(num2.value)
     resultado.innerText = result 
     if(resultado.innerText == result) {
         criaButton()
     }
 })



function criaButton() {
   const newButton = document.createElement("button")
   newButton.innerText = 'RESETAR'
   newButton.style.marginTop = "10px"
   buttonArea.appendChild(newButton)   
   newButton.addEventListener("click", () => {
    reset()
     buttonArea.removeChild(newButton)
   })
}



function reset() {
    num1.value = null
    num2.value = null
    resultado.innerText = ''
}