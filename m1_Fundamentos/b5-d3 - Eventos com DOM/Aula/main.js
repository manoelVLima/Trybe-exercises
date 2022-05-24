const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
  
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function clickClass(event){
  const classTech = document.querySelector('.tech');
  classTech.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = "";

}
firstLi.addEventListener("click",clickClass)
secondLi.addEventListener("click",clickClass)
thirdLi.addEventListener("click",clickClass)

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function textBox(event){
  let classTech = document.querySelector('.tech')
  
  classTech.innerHTML = event.target.value;
  
}
input.addEventListener('input',textBox);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
  function mainPage(event){
    
     window.open('https://www.linkedin.com/in/manoel-vieira-lima-junior-589838127/','_blank')
  }
  function cursor(){
    const logo = document.querySelector('#my-spotrybefy');
    logo.style.cursor = 'pointer';
  }
  myWebpage.addEventListener('dblclick',mainPage)
  myWebpage.addEventListener('mouseover',cursor) 

  //   window.location.href returns the href (URL) of the current page
  //   window.location.hostname returns the domain name of the web host
  //   window.location.pathname returns the path and filename of the current page
  //   window.location.protocol returns the web protocol used (http: or https:)
  //   window.location.assign() loads a new document 
  // 
 

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function mouseonTop(){
  const top3 = document.querySelector('#my-spotrybefy')
  top3.style.color = 'red';
}
function mouseOut(){
  const top3 = document.querySelector('#my-spotrybefy')
  top3.style.color = 'white'
}
  myWebpage.addEventListener('mouseover',mouseonTop);
  myWebpage.addEventListener('mouseout',mouseOut)


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.