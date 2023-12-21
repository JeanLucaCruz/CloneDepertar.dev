//3. Escreva um algoritmo que faça a tabuada de um número e
//apresente o resultado de acordo com o modelo a seguir, sabendo
//que o multiplicando deverá ser fornecido pelo usuário (n) e a
//quantidade de iterações também (i).
//1 * 2 = 2
//2 * 2 = 4
// * 2 = 6

const numeroDaTabuada = Number(prompt("Digite um número"));
const interacoes = Number(prompt("Digite a quantidade de interações"));

for (let i = 1; i <= interacoes; i++) {
    document.write(`${numeroDaTabuada} x ${i} = ${numeroDaTabuada * i} <br>`);
}
