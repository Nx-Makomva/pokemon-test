import "./styles/style.scss";
import pokemonArray from "./data/pokemon";
import { Pokemon } from "./data/types";

const pokeContainer = document.querySelector(".card-container");
const filterInput = document.querySelector<HTMLInputElement>("#search-box");

if (!pokeContainer || !filterInput) {
  throw new Error("Issue with selector");
}



// First render the entire PokeDeck
const renderPokeDeck = () => {
  let pokeCards = "";
  pokemonArray.forEach((pokemon) => {
    pokeCards += `<div class="card">
      <img class="card__image" src='${pokemon.sprite}'></img>
      <div class="card__content">${pokemon.types.join(", ")}
        <h1 class="card__heading">${pokemon.name}</h1>
        <p class="card__text">${pokemon.name} (#${pokemon.id}) 
          is a ${pokemon.types.join(", ")} type pokemon </p>
      </div>
     </div>`;
  });

  pokeContainer.innerHTML = pokeCards;
};

renderPokeDeck();


// result of filtering through pokedeck via input field
const renderFilteredPokemon = (filteredPokemon: Pokemon[]) => {
  pokeContainer.innerHTML = "";

  filteredPokemon.forEach((pokemon) => {
    const filteredPokeCard = `<div class="card">
    <img class="card__image" src='${pokemon.sprite}'></img>
    <div class="card__content">${pokemon.types.join(", ")}
      <h1 class="card__heading">${pokemon.name}</h1>
      <p class="card__text">${pokemon.name} (#${pokemon.id}) 
        is a ${pokemon.types.join(", ")} type pokemon </p>
    </div>
   </div>`;
    pokeContainer.innerHTML += filteredPokeCard;
  });
};


// Search function that matches input value to pokedeck and returns filtered results
const handleInputValue = (event: Event) => {
  const searchTerm: string = (
    event.target as HTMLInputElement
  ).value.toLowerCase();
  if (searchTerm !== "") {
    const filteredPokeCard = pokemonArray.filter((pokemon) => {
      return (
        pokemon.name.includes(searchTerm) || pokemon.types.includes(searchTerm)
      );
    });
    renderFilteredPokemon(filteredPokeCard);
  } else {
    renderPokeDeck();
  }
};


filterInput.addEventListener("input", handleInputValue);
