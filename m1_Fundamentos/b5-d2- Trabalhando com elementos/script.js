//crie um irmão para ElementoOndeVoceEsta
// let pai = document.getElementById("pai");
// let irmaoElementoOndeVoceEsta = document.createElement("section");
// irmaoElementoOndeVoceEsta.innerHTML = "QUERO TIRAR";
// irmaoElementoOndeVoceEsta.className = "filhoDoPai";
// pai.appendChild(irmaoElementoOndeVoceEsta);
// //crie um filho para elementoOndeVoceEsta
// let paiElementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
// let filhoElementoOndeVoceEsta = document.createElement("section");
// filhoElementoOndeVoceEsta.innerHTML = "QUERO TIRAR";
// filhoElementoOndeVoceEsta.className = "neto1";
// paiElementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
// // crie um filho para o PrimeiroFilho
// let primeiroFilho = document.getElementById("primeiroFilhoDoFilho");
// let neto1 = document.createElement("section");
// neto1.innerHTML = "Quero ficar vivo";
// neto1.className = "bisneto";
// primeiroFilho.appendChild(neto1);
// A partir desse filho criado, acesse terceiro filho

//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

    let removePai = document.getElementById("pai");

    for (let index = 0; index < removePai.children.length; index++) {
      const elemento = removePai.children[index];
      if (elemento.id !== "elementoOndeVoceEsta") {
        elemento.remove();
      }
    }


// parentNode: retorna o nó pai.
// parentElement: retorna o elemento pai.
// childNodes: retorna um NodeList com todos os nós filhos.
// children: retorna um HTMLCollection com todos os elementos filhos.
// firstChild: retorna o primeiro nó filho.
// firstElementChild: retorna o primeiro elemento filho.
// lastChild: retorna o último nó filho.
// lastElementChild: retorna o último elemento filho.
// nextSibling: retorna o próximo nó.
// nextElementSibling: retorna o próximo elemento.
// previousSibling: retorna o nó anterior.
// previousElementSibling: retorna o elemento anterior.
