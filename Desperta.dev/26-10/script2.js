//2. Escreva um algoritmo que faça a tabuada de um número e
//apresente o resultado de acordo com o modelo a seguir, sabendo
//que o multiplicando deverá ser fornecido pelo usuário (n) e a
//quantidade de iterações também (i).
//1 * 2 = 2
//2 * 2 = 4
//3 * 2 = 6


let pedroH = 150
let lucasH = 110
let years = 0

while (pedroH > lucasH) {
    pedroH += 2
    lucasH += 3
  years += 1
}

document.write(`Lucas e Pedro alcançaram o mesmo em ${years}</br>`)
document.write(` Lucas será maior que Pedro ${years +1} </br> `)