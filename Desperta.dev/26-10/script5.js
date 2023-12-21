//5. Faça um programa usando a estrutura “for” que leia um número
//nteiro positivo e mostre na tela uma contagem de 0 até o valor
//digitado:
//Ex: Digite um valor: 9
//Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

const numEx5 = Number(prompt("Digite um valor"));
let mensagem = " Contagem: ";
for (let i = 0; i <= numEx5; i++) {
    console.log(i);
    mensagem += i + ", ";
}
document.write(mensagem)