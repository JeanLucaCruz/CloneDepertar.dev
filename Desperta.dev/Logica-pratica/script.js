//Exercício 01
const celsius = parseFloat(prompt("Digite a temperatura em Graus Celcius:"))

const celsiusParaFaren = (celsius * 9 / 5) + 32
document.write("A temperatura em Celcius: ", celsius, " °C em Fahrenheit é: ", celsiusParaFaren, " °F")


document.write("<br>");

//Exercício 02
const diaDaSemana = parseInt(prompt("Digite o Dia da Semana:"))
let nomeDia

switch (diaDaSemana) {
    case 1:
        nomeDia = "Domingo"
        break
    case 2:
        nomeDia = "Segunda"
        break
    case 3:
        nomeDia = "Terça"
        break
    case 4:
        nomeDia = "Quarta"
        break
    case 5:
        nomeDia = "Quinta"
        break
    case 6:
        nomeDia = "Sexta"
        break
    case 7:
        nomeDia = "Sábado"
        break
    default:
        nomeDia = "Você deve digitar um valor entre 1 e 7."
}
document.write(`Hoje é: ${nomeDia}`)


document.write("<br>")

//Exercício 03
const numero = parseFloat(prompt("Digite um número:"))

if (numero > 0) {
    document.write("O número: ", numero, " é POSITIVO")
} else if (numero < 0) {
    document.write("O número: ", numero, " é NEGATIVO")
} else {
    document.write("O número: ", numero, " é ZERO")
}


document.write("<br>")

//Exercício 04
const custoDeFabrica = parseFloat(prompt("Qual o custo de fabrica do carro?"))


document.write("<br>")

  //Definir Porcentagens
const porcentagemDistribuidor = custoDeFabrica / 28
const porcentagemImposto = custoDeFabrica / 45

const valorFinal = custoDeFabrica + porcentagemDistribuidor + porcentagemImposto
document.write("O valor final do carro será de: ", valorFinal.toFixed(2))


document.write("<br>");

//Exercício 05
const alturaUsuario = parseFloat(prompt("Digite a sua altura em METROS?").replace(",", "."))
const pesoUsuário = parseFloat(prompt("Digite o seu peso em KG?"))

const imc = pesoUsuário / (alturaUsuario * alturaUsuario)

if (imc < 18.5) {
    document.write("Você está ABAIXO da faixa de peso ideal")
} else if (imc > 24.99) {
    document.write("Você está ACIMA da faixa de peso ideal")
} else {
    document.write("Você está DENTRO da faixa de peso ideal")
}


document.write("<br>")

//Exercício 06
const num1 = parseFloat(prompt("Digite o primeiro número:"))
const num2 = parseFloat(prompt("Digite o segundo número:"))

let operador = Number(prompt("Escolha a operação matemática \n1. Soma \n2. Subtração\n3. Multiplicação\n4. Divisão"))
let resultado
switch (operador) {
    case 1:
        resultado = num1 + num2
        break
    case 2:
        resultado = num1 - num2
        break
    case 3:
        resultado = num1 * num2
        break
    case 4:
        resultado = num1 / num2
        break
    default:
        resultado = "Operador Inválido"
        break
}
document.write("Resultado:", resultado)


document.write("<br>")

//Exercício 07
let saldoCliente = 1000

const valorSaque = Number(prompt("Digite o valor que deseja sacar:"))


document.write("<br>")

//MODELO 01

if (valorSaque % 5 === 0) {
    if (valorSaque > 0) {
        const taxaSaque = valorSaque + 4.5
        if (taxaSaque < saldoCliente) {
            const valorRetirado = saldoCliente + taxaSaque
            document.write("Você retirou: R$", valorRetirado, " Seu novo saldo é: R$", valorRetirado)
        } else {
            document.write("Saldo insuficiente (Lembre-se da taxa de R$4.50")
        }
    } else {
        document.write("O valor digitado é inválido")
    }
}

// Espaço
document.write("<br>")

//MODELO 02

if (valorSaque > 0 && valorSaque % 5 === 0 && ((valorSaque + 4.50) <= saldoCliente)) {
    document.write("Você retirou: R$", (valorSaque + 4.50), " Seu novo saldo é: R$", saldoCliente)
    saldoCliente -= (valorSaque + 4.50);
} else if ((valorSaque + 4.50) > saldoCliente) {
    document.write("Saldo insuficiente (Lembre-se da taxa de R$4.50)")
} else {
    document.write("O valor digitado é inválido")
}


document.write("<br>");

//Exercício 08
const idadeAtleta = Number(prompt("Digite a sua idade?"))
const pesoAtleta = parseInt(prompt("Digite o seu peso em KG?"))

let categoria

if (idadeAtleta <= 12) {
    categoria = "Sua categoria é Infantil"
} else if (idadeAtleta >= 13 && idadeAtleta <= 16) {
    if (pesoAtleta >= 40) {
        categoria = "Sua categoria é Juvenil leve"
    } else {
        categoria = "Sua categoria é Juvenil pesado"
    }
} else if (idadeAtleta >= 17 && idadeAtleta <= 24) {
    if (pesoAtleta <= 45) {
        categoria = "Sua categoria é Sênior Leve"
    } else if (pesoAtleta > 45 && pesoAtleta <= 60) {
        categoria = "Sua categoria é Sênior médio"
    } else if (pesoAtleta > 60) {
        categoria = "Sua categoria é Sênior pesado"
    }
} else if (idadeAtleta > 24) {
    categoria = "Sua categoria é Veterano"
}

document.write(categoria)


document.write("<br>");

//Exercício 09
const velocidade = parseFloat(prompt("Digite a velocidade em km/h:"))

const velocidadeMaxima = 80

if (velocidade > velocidadeMaxima) {
    const multa = velocidade - velocidade}
