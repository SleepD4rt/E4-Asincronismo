const pokemonsContainer = document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");

const appState = {
  currentURL: "https://pokeapi.co/api/v2/pokemon/1/",
  isFetching: false,
};

//Datos del pokemon
const pokemonTemplate = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name.toUpperCase(),
    image: pokemon.sprites.other.home.front_default,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    types: pokemon.types,
    experiencie: pokemon.base_experience,
  };
};

const createPokemonCard = (pokemon) => {
  const { id, name, image, height, weight, types, experiencie } =
    pokemonTemplate(pokemon);

  return `
  <div class='poke'>
      <img src="${image}"> 
      <h2>${name}</h2>
      <span class="exp">EXP: ${experiencie}</span>
      <div class='tipo-poke'>
          ${createTypeCards(types)}
      </div>
      <p class="id-poke">#${id}</p>
      <p class="height">Height: ${height}</p>
      <p class="weight">Weight: ${weight}</p>
  </div>
  `;
};

const createTypeCards = (types) => {
  return types
    .map((tipo) => {
      return `<span class='${tipo.type.name} poke__type'>${tipo.type.name}</span>`;
    })
    .join("");
};

// Funcion para renderear las cards
const renderPokemon = (pokemon) => {
  pokemonsContainer.innerHTML = createPokemonCard(pokemon);
};

const search_Pokemon = async () => {
  const pokemon_json = await fetchPokemons(appState.currentURL);
  renderPokemon(pokemon_json);
};

const init = () => {
  search_Pokemon();
};

init();
