const largura = parseFloat(prompt("Digite a largura do terreno em metros:"));
const comprimento = parseFloat(prompt("Digite o comprimento do terreno em metros:"));

const area = largura * comprimento;

document.write(`Área do terreno: ${area} m² <br>`);

let classificacao;

if (area < 100) {
  classificacao = "TERRENO POPULAR";
} else if (area >= 100 && area <= 500) {
  classificacao = "TERRENO MASTER";
} else {
  classificacao = "TERRENO VIP";
}

document.write(`Classificação do terreno: ${classificacao}`);
