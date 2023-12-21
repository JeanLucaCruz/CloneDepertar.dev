const age = 32
document.write(`Minha idade é ${age} anos <br> <br/>`);

// 2. Crie três variáveis JavaScript. Em duas delas, atribua os valores que você quiser.
// Na terceira, atribua o valor da soma das duas primeiras variáveis.
// Apresente o valor da soma no documento HTML junto da frase "O resultado da soma de x e y é z",
// sendo x o valor armazenado na primeira variável, y o valor armazenado na segunda variável e z o valor armazenado na terceira variável.
const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
document.write(`O resultado da soma de ${num1} e ${num2} é ${sum}<br> <br/>`);

// 3. Crie três variáveis. Na primeira variável, coloque o total de uma compra, por exemplo, 149.90.
// Na segunda variável, coloque a quantidade de parcelas, por exemplo, 2.
// Na terceira variável, coloque o valor da parcela.
// Apresente no documento HTML as seguintes informações:
// "O valor total da compra foi R$ _"
// "Forma de pagamento: _x de R$ _"
const total = 200.50;
const parcelas = 24;
const valorParcela = total / parcelas;
document.write(`O valor total da compra foi R$ ${total.toFixed(2).replace('.', ',')}`);
document.write(`Forma de pagamento: ${parcelas}x de R$ ${valorParcela.toFixed(2).replace('.', ',')} <br> <br/>`);

// 4. Crie duas variáveis. Na primeira, coloque o total de minutos e defina um valor para ela (por exemplo, minutos = 120).
// Na segunda, coloque o total em segundos desses minutos armazenados na primeira variável.
// Apresente no documento HTML a seguinte informação: "_ minutos equivale a _ segundos!"
const totalMinutes = 120;
const totalSeconds = totalMinutes * 60;
document.write(`${totalMinutes} minutos equivale a ${totalSeconds} segundos! <br> <br/>`);

// 5. Crie cinco variáveis. Na primeira, armazene o nome de um aluno.
// Na segunda, terceira e quarta, coloque 3 notas (valores de 0 a 10).
// Calcule a média das notas e armazene na quinta variável criada.
// Apresente no documento HTML a seguinte informação: "O aluno ____ ficou com média __,__"
const nomeAluno = "João";
const nota1 = 7;
const nota2 = 8;
const nota3 = 9;
const media = (nota1 + nota2 + nota3) / 3;
document.write(`O aluno ${nomeAluno} ficou com média ${media.toFixed(2).replace('.', ',')} <br> <br/>`);

// 6. Desenvolva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B.
// A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa.
// Ao final, escreva os valores que ficaram armazenados nas variáveis.
let A = 10;
let B = 20;
let C = A;
A = B;
B = C;
document.write(`Valor do A: ${A} Valor do B: ${B} <br> <br/>`);

// 7. Desenvolva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos.
// Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
let totalEleitores = 1000;
let votosBrancos = 100;
let votosNulos = 50;
let votosValidos = 850;
const percentualBrancos = (votosBrancos / totalEleitores) * 100;
const percentualNulos = (votosNulos / totalEleitores) * 100;
const percentualValidos = (votosValidos / totalEleitores) * 100;
document.write(`Percentual de votos em branco: ${percentualBrancos.toFixed(2)}%`);
document.write(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
document.write(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}% <br> <br/>`);

// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
const valor1 = 200;
const valor2 = 150;
if (valor1 == valor2) {
    document.write('Números iguais');
} else if (valor1 > valor2) { 
    document.write('Primeiro é maior');
} else {    
    document.write('Segundo é maior <br> <br/>');
}

// 9. As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const quantidadeDeMacas = 20; 
let valorTotal;
if (quantidadeDeMacas <= 12) {
    valorTotal = quantidadeDeMacas * 0.30;
} else {
    valorTotal = quantidadeDeMacas * 0.25;
}
document.write(`O valor total da compra é R$ ${valorTotal.toFixed(2).replace('.', ',')} <br> <br/>`);


//10. Escreva um algoritmo que tenha como valores de entradas o nome
//e idade do usuário e imprima no terminal o nome, a idade e o ano
//de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
//em 2000”.
//OBS: Pegue o ano atual como base


const nome = 'Jean Luca';
const idade = 32
document.write(`Nome: ${nome}, Idade: ${idade} anos, nasceu em: ${2023 - idade} <br> <br/>`);

//11. Crie um algoritmo que armazene um número inteiro positivo, e gere
//um alerta com as seguintes mensagens:
//a. “Número é par!”, se o valor armazenado for par;
//b. “Número é impar!”, se o valor armazenado for ímpar;

const numero = 10;
if (numero % 2 == 0) {
    document.write('Número é par!');
} else {
    document.write('Número é impar! <br> <br/>');
}

//12. Escreva um algoritmo que armazene o ano atual e o ano de
//nascimento de uma pessoa. Escrever uma mensagem no console
//que diga se ela poderá ou não votar este ano (não é necessário
//considerar o mês em que a pessoa nasceu).

const anoAtual = 2024;
const anoNascimento = 1990

const idade2 = anoAtual - anoNascimento;

if (idade2 <= 16) {
    document.write('Não é possível votar este ano!');
} 
else {
    document.write('É possível votar este ano!');
} 


