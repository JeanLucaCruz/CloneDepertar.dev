let idade;
let totalIdades = 0;
let quantidadeAlunos = 0;

while (true) {
  idade = parseInt(prompt("Digite a idade do aluno (ou 999 para encerrar):"));

  if (idade === 999) {
    break; 
  }

  totalIdades += idade;
  quantidadeAlunos++;
}

if (quantidadeAlunos === 0) {
  document.write("Nenhum aluno inserido.");
} else {
  const mediaIdades = totalIdades / quantidadeAlunos;
  document.write(`Total de alunos: ${quantidadeAlunos} <br>`);
  document.write(`Média de idade: ${mediaIdades.toFixed(2)}`);
}
