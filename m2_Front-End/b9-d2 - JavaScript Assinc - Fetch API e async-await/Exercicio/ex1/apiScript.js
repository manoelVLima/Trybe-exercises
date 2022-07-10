// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const getId = document.querySelector('#jokeContainer')
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
   await fetch(API_URL, myObject)
    .then(response => response.json())
    .then(result => getId.innerHTML = result.joke);
};


window.onload = () => fetchJoke();