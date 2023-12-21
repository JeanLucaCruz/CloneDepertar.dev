//1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
//programa deverá calcular e mostrar:
//a. A menor altura do grupo;
//b. A maior altura do grupo;

let menorAltura = Infinity;
let maiorAltura = -Infinity;

for (let i = 1; i <= 15; i++) {
    const altura = parseFloat(prompt('Digite a altura:'));

    if (!isNaN(altura)) {
        if (altura < menorAltura) {
            menorAltura = altura;
        }

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
    } else {
        alert('Por favor, digite uma altura válida.');
        i--;
    }
}

document.write(`A maior altura é ${maiorAltura} <br>`);
document.write(`A menor altura é ${menorAltura} <br>`);
