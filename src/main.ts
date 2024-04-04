import "./styles/style.scss";
import pokemonArray from "./data/pokemon";
import { Pokemon } from "./data/types";

const pokeContainer = document.querySelector(".card-container");
const filterInput = document.querySelector<HTMLInputElement>(".search-box");

if (!pokeContainer || !filterInput) {
  throw new Error("Issue with selector");
}

const RenderPokeDeck = () => {
  let pokeCards = "";
  pokemonArray.forEach((pokemon) => {
    pokeCards += `<div class='card'>
      <img class='card__image' src='${pokemon.sprite}'></img>
      <h1 class='card__heading'>${pokemon.name}</heading>
      <p class='card__content'>${pokemon.types}</content>
      <p class='card__text'>${pokemon.text}</text>
     </div>
     `;
  });

  pokeContainer.innerHTML = pokeCards;
};

RenderPokeDeck();




