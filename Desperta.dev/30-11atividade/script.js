/* Utilize os arquivos de base disponibilizados para realizar os exercícios
propostos. Manipule os elementos HTML utilizando o querySelectorAll e o
setAttribute, aplicando as alterações necessárias para que fique
semelhante a imagem abaixo. */



/* 1. Capture, armazene e manipule todos os elementos de classe "card".
Modifique os estilos necessários nesses elementos para que fique
semelhante a imagem. */

const cardsHTML = document.querySelectorAll('.card')

cardsHTML.forEach(card =>{
  card.style.backgroundColor = '#E7843A'
})

/* 2. Capture, armazene e manipule todos os elementos de classe
"titulo-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem. */

const titulosCardsHTML = document.querySelectorAll('.titulo-card')

titulosCardsHTML.forEach(card=>{
  card.style.color = '#2B385B'
})

/* 3. Modifique o texto dos títulos nos cards para "Meu card". */

titulosCardsHTML.forEach(card =>{
  card.textContent = 'Meu Card'
})

/* 4. Capture, armazene e manipule todos os elementos de classe
"descricao-card". Modifique os estilos necessários nesses elementos
para que fique semelhante a imagem. */

const descricaoCardsHTML = document.querySelectorAll('.descricao-card')

descricaoCardsHTML.forEach(card=>{
  card.style.fontFamily = 'Arial'
  card.style.color = 'white'
  card.style.padding = '30px 0 30px 0'
  card.style.width = '155px'

})

/* 5. Modifique o texto das descrições nos cards para "Descrição
modificada pelo JavaScript". */

descricaoCardsHTML.forEach(card => {
  card.textContent = "Descrição modificada pelo JavaScript"
})

/* 6. Capture, armazene e manipule todos os elementos de classe
"botao-editar". Modifique o estilo desses elementos para que fique
semelhante a imagem. */

const buttonsCardEditarHTML = document.querySelectorAll('.botao-editar')

buttonsCardEditarHTML.forEach(button => {
  button.style.backgroundColor = 'green'
  button.style.color = 'white'
  button.style.borderRadius = '15px'
  button.style.padding = '10px 13px'

  button.setAttribute('onclick', 'botaoEditar()')
})


/* 7. Capture, armazene e manipule todos os elementos de classe
"botao-apagar". Modifique o estilo desses elementos para que fique
semelhante a imagem. */

const buttonsCardApagarHTML = document.querySelectorAll('.botao-apagar')

buttonsCardApagarHTML.forEach(button => {
  button.style.backgroundColor = 'red'
  button.style.color = 'white'
  button.style.borderRadius = '15px'
  button.style.padding = '10px 13px'

  button.setAttribute('onclick', 'botaoApagar()')
})

/* 8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
Essa função deve mostrar um alerta com a mensagem "Clicou em
Editar!". */

function botaoEditar(){
  alert("Clicou em Editar!")
}
/* 9. Adicione o atributo 'onclick' nos elementos de classe
“botão-apagar”. Ao clicar nesses elementos deve chamar a função
'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
certeza da exclusão do card. Se o usuário confirmar a exclusão deve
mostrar um alerta com a mensagem "Confirmado!", se não deve
mostrar a mensagem "Cancelou!". */

function botaoApagar(){
  const confirma = confirm('Voce está certo da exclusão?')
  confirma ? alert('Confirmou!') : alert('Cancelou!')
}

