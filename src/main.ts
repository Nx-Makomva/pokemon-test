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
    pokeCards += 
    `<div class="card">
      <img class="card__image" src='${pokemon.sprite}'></img>
      <div class="card__content">${pokemon.types}
        <h1 class="card__heading">${pokemon.name}</h1>
        <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types} type pokemon </text>
      </div>
     </div>`;
  });

  pokeContainer.innerHTML = pokeCards;
};

RenderPokeDeck();

const handleInputValue = (event: Event) => {
  const searchTerm: string = (event.target as HTMLInputElement).value.toLowerCase();
  if (searchTerm !== "") {
    const filteredResults = pokemonArray.filter((pokemon) => {
      return pokemon.name.includes(searchTerm) || pokemon.types.includes(searchTerm);
    })
    renderFilteredPokemon(filteredResults);
    
  } else {
    RenderPokeDeck();
  }
}

filterInput.addEventListener('input', handleInputValue);

const renderFilteredPokemon = (filteredPokemon: Pokemon[]) => {
  pokeContainer.innerHTML = "";

  filteredPokemon.forEach((pokemon) => {
   const filteredPokeCard =
     `<div class="card">
        <img class="card__image" src='${pokemon.sprite}'></img>
        <div class="card__content">${pokemon.types}
          <h1 class="card__heading">${pokemon.name}</h1>
          <p class="card__text">hello, what we saying</text>
        </div>
      </div>`
       pokeContainer.innerHTML += filteredPokeCard;
  }); 
  
}


