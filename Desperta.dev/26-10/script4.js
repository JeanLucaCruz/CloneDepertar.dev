//4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
//e verifique quais números são múltiplos de 3 e quais são múltiplos
//de 

let multiplo3 = "";
let multiplo5 = "";

for (let i = 1; i <= 250; i++) {
    if (i % 3 === 0) {
        multiplo3 += i + ", ";
    }

    if (i % 5 === 0) {
        multiplo5 += i + ", ";
    }
}

document.write("Números divisíveis por 3: " + multiplo3 + "<br>");
document.write("Números divisíveis por 5: " + multiplo5 + "<br>");