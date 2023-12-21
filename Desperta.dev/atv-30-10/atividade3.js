const valorInicial = parseInt(prompt("Digite o primeiro Valor:"));
const valorFinal = parseInt(prompt("Digite o último Valor:"));
const incremento = parseInt(prompt("Digite o incremento:"));

document.write("Contagem:");

for (let i = valorInicial; i <= valorFinal; i += incremento) {
  document.write( (i) + " ");
}

document.write("Acabou!");
