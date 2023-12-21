let nota50 = 0 
let nota10 = 0 
let nota5 = 0 
let nota1 = 0 

let saque = parseInt(prompt("Digite o valor do saque em growcoins"))


while(saque >= 50){
      saque = saque - 50
      nota50++
}
while(saque >=10){
      saque = saque -10
      nota10++
}
while(saque >=5){
      saque = saque -5
      nota5++
}
while(saque >=1){
      saque = saque - 1
      nota1++
}

document.write(`Quantidade de notas de 50 GC$ = ${nota50}<br>`)
document.write(`Quantidade de notas de 10 GC$ = ${nota10}<br>`)
document.write(`Quantidade de notas de 5 GC$ = ${nota5}<br>`)
document.write(`Quantidade de notas de 1 GC$ = ${nota1}<br>`)
  