// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
    const frase = document.getElementById('jokeContainer');
    frase.innerText = data.joke;
  })
  };

window.onload = () => fetchJoke();

// .then(data => document.getElementById('jokeContainer').innerText = data.joke);