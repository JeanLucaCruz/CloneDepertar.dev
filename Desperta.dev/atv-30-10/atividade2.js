let totalSalariosHomens = 0;
let totalSalariosMulheres = 0;

while (true) {
  const salario = parseFloat(prompt("Digite o salário do funcionário:"));
  const sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):");

  if (sexo === "M" || sexo === "m") {
    totalSalariosHomens += salario;
  } else if (sexo === "F" || sexo === "f") {
    totalSalariosMulheres += salario;
  } else {
    document.write("Sexo não reconhecido. Por favor, insira M ou F. <br>");
  }

  const continuar = prompt("Deseja inserir dados de outro funcionário? (S para Sim, N para Não):");
  if (continuar === "N" || continuar === "n") {
    break; 
  }
}

document.write(`Total de salários pagos aos homens: ${totalSalariosHomens.toFixed(2)}<br>`);
document.write(`Total de salários pagos às mulheres: ${totalSalariosMulheres.toFixed(2)}`);
