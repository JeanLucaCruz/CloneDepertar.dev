//1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
//programa deverá calcular e mostrar:
//a. A menor altura do grupo;
//b. A maior altura do grupo;

//let menorAltura = Infinity;
//let maiorAltura = -Infinity;

//for (let i = 1; i <= 15; i++) {
    //const altura = parseFloat(prompt('Digite a altura:'));

    //if (!isNaN(altura)) {
        //if (altura < menorAltura) {
            //menorAltura = altura;
        //}

        //if (altura > maiorAltura) {
            //maiorAltura = altura;
        //}
    //} else {
        //alert('Por favor, digite uma altura válida.');
        //i--; // Volta para pedir a altura da mesma pessoa novamente
    //}
//}

//document.write(`A maior altura é ${maiorAltura} <br>`);
//document.write(`A menor altura é ${menorAltura} <br>`);

//3. Escreva um algoritmo que faça a tabuada de um número e
//apresente o resultado de acordo com o modelo a seguir, sabendo
//que o multiplicando deverá ser fornecido pelo usuário (n) e a
//quantidade de iterações também (i).
//1 * 2 = 2
//2 * 2 = 4
//3 * 2 = 6


//let pedroH = 150
//let lucasH = 110
//let years = 0

//while (pedroH > lucasH) {
//    pedroH += 2
//    lucasH += 3
//  years += 1
//}

//document.write(`Lucas e Pedro alcançaram o mesmo em ${years}</br>`)
//document.write(` Lucas será maior que Pedro ${years +1} </br> `)

//3. Escreva um algoritmo que faça a tabuada de um número e
//apresente o resultado de acordo com o modelo a seguir, sabendo
//que o multiplicando deverá ser fornecido pelo usuário (n) e a
//quantidade de iterações também (i).
//1 * 2 = 2
//2 * 2 = 4
//3 * 2 = 6

//const numeroDaTabuada = Number(prompt("Digite um número"));
//const interacoes = Number(prompt("Digite a quantidade de interações:")){
    //for (let i = 1; i <= numeroDaTabuada; i++) {
        //document.write(`${numeroDaTabuada} x ${i} = ${numeroDaTabuada * i} <br>`);
    //}
//}


//4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
//e verifique quais números são múltiplos de 3 e quais são múltiplos
//de 5.

//let multiplo3 = "";
//let multiplo5 = "";

//for (let i = 1; i <= 250; i++) {
  //  if (i % 3 === 0) {
    //    multiplo3 += i + ", ";
    //}

    //if (i % 5 === 0) {
      //  multiplo5 += i + ", ";
    //}
//}

//document.write("Números divisíveis por 3: " + multiplo3 + "<br>");
//document.write("Números divisíveis por 5: " + multiplo5 + "<br>");

//5. Faça um programa usando a estrutura “for” que leia um número
//inteiro positivo e mostre na tela uma contagem de 0 até o valor
//digitado:
//Ex: Digite um valor: 9
//Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

//const numEx5 = Number(prompt("Digite um valor"));
//let mensagem = " Contagem: ";
//for (let i = 0; i <= numEx5; i++) {
  //  console.log(i);
    //mensagem += i + ", ";
//}
//document.write(mensagem)

//6. Desenvolva um algoritmo que mostre uma contagem regressiva de
//30 até 1, marcando os números que forem primos, exatamente
//como mostrado abaixo:
//30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

//for (let i = 30; i >= 1; i--) {
  //  let primo = true;
//
  //  if (i <= 1) {
    //    primo = false;
    //} else if (i <= 3) {
      //  primo = true;
    //} else if (i % 2 === 0 || i % 3 === 0) {
      //  primo = false;
    //} else {
      //  for (let j = 5; j * j <= i; j += 6) {
        //    if (i % j === 0 || i % (j + 2) === 0) {
          //      primo = false;
            //    break;
            //}
        //}
    //}

    //if (primo) {
      //  document.write(`[${i}] `);
    //} else {
        //document.write(`${i} `);
 //   }
//}

//7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
//média aritmética dos valores lidos, a quantidade de valores
//positivos, a quantidade de valores negativos e o percentual de
//valores negativos e positivos.

let soma = 0;
let quantidadePositivos = 0;
let quantidadeNegativos = 0;

for (let i = 1; i <= 10; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i}:`));

    if (numero === numero) { // Verifica se o número não é NaN
        soma += numero;

        if (numero > 0) {
            quantidadePositivos++;
        } else if (numero < 0) {
            quantidadeNegativos++;
        }
    } else {
        alert("Por favor, digite um número válido.");
        i--; 
    }
}

const media = soma / 10;
const percentualPositivos = (quantidadePositivos / 10) * 100;
const percentualNegativos = (quantidadeNegativos / 10) * 100;

document.write(`Média Aritmética: ${media} <br>`);
document.write(`Quantidade de Valores Positivos: ${quantidadePositivos} <br>`);
document.write(`Quantidade de Valores Negativos: ${quantidadeNegativos} <br>`);
document.write(`Percentual de Valores Positivos: ${percentualPositivos}% <br>`);
document.write(`Percentual de Valores Negativos: ${percentualNegativos}% <br>`);

