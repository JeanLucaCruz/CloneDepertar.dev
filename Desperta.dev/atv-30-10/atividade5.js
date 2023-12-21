const distancia = parseFloat(prompt("Digite a distância que o passageiro deseja percorrer em Km:"));

let precoPassagem;

if (distancia <= 200) {
  precoPassagem = distancia * 0.50;  // R$0.50 por Km para viagens até 200Km
} else {
  precoPassagem = distancia * 0.45;  // R$0.45 por Km para viagens mais longas
}

document.write(`O preço da passagem é R$ ${precoPassagem.toFixed(2)}`);
