const nome = prompt("Digite o nome do cliente:");
const sexo = prompt("Digite o sexo do cliente (M para mulher, H para homem):");
const valorCompras = parseFloat(prompt("Digite o valor das compras do cliente:"));

let desconto = 0;

if (sexo === "M" || sexo === "m") {
  // Mulheres ganham 13% de desconto
  desconto = valorCompras * 0.13;
} else if (sexo === "H" || sexo === "h") {
  // Homens ganham 5% de desconto
  desconto = valorCompras * 0.05;
} else {
  document.write("Sexo não reconhecido. Por favor, insira M ou H.");
}

const precoComDesconto = valorCompras - desconto;

if (desconto > 0) {
  document.write(`Cliente: ${nome}<br>`);
  document.write(`Valor das compras: R$ ${valorCompras.toFixed(2)}<br>`);
  document.write(`Desconto: R$ ${desconto.toFixed(2)}<br>`);
  document.write(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}<br>`);
} else {
  document.write("Desculpe, não é possível aplicar desconto.");
}
