// fetch.js
const urlList = "https://pokeapi.co/api/v2/pokemon";
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  const info = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`
  document.querySelector("#output").innerHTML = info;
}

function doStuffList(data) {
    console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  const pokeList = data.results;
  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
    // note the += here...
    pokeListElement.innerHTML += html;
  });
}



async function getPokemonList(urlList) {
    const response = await fetch(urlList);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuffList(data);
    }
}
getPokemon(url);
console.log("second: ", results);
getPokemonList(urlList);