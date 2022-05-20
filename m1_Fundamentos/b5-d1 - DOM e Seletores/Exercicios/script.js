
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
// function mudarP (texto){
//     let paragrafo = document.getElementsByTagName('p');
//     paragrafo[1].innerHTML = texto;
// }
// mudarP('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor unde illo explicabo? Ipsam labore magnam quia! Aliquam facere unde ullam, corporis quas architecto harum consectetur laborum, eos magni maiores cumque?');
// function mudarCor (cor){
//     let qualCor = document.getElementsByClassName('main-content');
//     qualCor[0].style.background = cor; 
// }
// mudarCor('rgb(76,164,109)');
    
// function mudaC(cor){
//     let qualCor = document.querySelector('.center-content');
//     qualCor.style.background = cor;
// }
// mudaC('white');
    

// function mudarh1(){
//     let h1 = document.querySelector('.title');
//     h1.innerHTML = '<em>Exercício 5.1 - JavaScript'

// }
// mudarh1();
// function  upperCase(){
//     let maiusculo = document.getElementsByTagName('p');
//     maiusculo[0].innerHTML = maiusculo[0].innerHTML.toUpperCase();

    
// }
// upperCase();

// const paragrafos = window.document.getElementsByTagName('p')[0];

//     console.log(`paragrafos.innerHTML`);
    
    


function log() {
    let paragraphs = document.getElementsByTagName('p'); 
    for (p of paragraphs) {
      console.log(p.innerText);
    }
  }
log();