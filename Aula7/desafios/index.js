// DESAFIO 1 

const grausEmF = Number(prompt("Digite a temperatura: /Fahrenheit: "))

const converterParaK = (grausEmF - 32) * (5/9) + 273.15
alert(`SUA TEMPERATURA PARA KELVIN É {K ${converterParaK.toFixed(3)}}`)

const grausEmC = Number(prompt("Digite a temperatura: /Celcius: "))

const converterParaF = (grausEmC) * (9/5) + 32
alert(`SUA TEMPERATURA PARA Fahrenheit É {F ${converterParaF.toFixed(0)}}`)

// DESAFIO 2

const QuilowattHora = 0.05
const residencia = 280 * QuilowattHora

const descontoResidencia = (residencia * 15) / 100
alert(residencia) 
alert(descontoResidencia)

// DESAFIO 3 

// fORMULA 
// kg =lb  / x

const unidadeEmLibra = Number(prompt("Digite sua unidade: /Libra")) 

const converterLParaQ = unidadeEmLibra / 2.2046 
alert(`Sua unidade em Kg ${converterLParaQ.toFixed(4)}`)

const unidadeEmOz  = Number(prompt("Digite sua unidade: /Onça"))

const converterOzParaKg = unidadeEmOz / 35.274
alert(`Sua unidade em Kg ${converterOzParaKg.toFixed(4)}`)

const unidadeEmMilha =  Number(prompt("Digite sua unidade: /Milha"))

const converterMilhaParaMetro = unidadeEmMilha / 0.00062137
alert(`Sua unidade em metros ${converterMilhaParaMetro.toFixed(4)}`)

const unidadeEmPes =  Number(prompt("Digite sua unidade: /Pes"))

const converterPesParaMetro = unidadeEmPes / 3.2808
alert(`Sua unidade em metros ${converterPesParaMetro.toFixed(4)}`)

const unidadeEmGal =  Number(prompt("Digite sua unidade: /Gal"))

const converterGalParaLitro = unidadeEmGal / 0.26417
alert(`Sua unidade em litros ${converterGalParaLitro.toFixed(4)}`)

const unidadeEmXicara =  Number(prompt("Digite sua unidade: /Xicara"))

const converterXicParaLitro = unidadeEmXicara * 0.24
alert(`Sua unidade em litros${converterXicParaLitro.toFixed(4)}`)






