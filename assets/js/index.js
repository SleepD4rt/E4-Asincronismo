const pokemonsContainer = document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");
const error = document.querySelector("#form__error");
const input = document.getElementById("codigo");
const form = document.getElementById("pokemon-form");

const renderizarError = (e) => {
  error.innerHTML = `<p>${e}</p>`;
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
      <p class="height">Height: ${height} Meters</p>
      <p class="weight">Weight: ${weight} KG</p>
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

const changePokemon = () => {
  (codigo_pokemon =
    parseInt(input.value) > 0 && parseInt(input.value) <= 1292
      ? parseInt(input.value)
      : renderizarError("No existe un pokemon asociado al número introducido")),
    (pokemonsContainer.innerHTML = "");
  return `https://pokeapi.co/api/v2/pokemon/${codigo_pokemon}/`;
};

const search_Pokemon = async (e) => {
  e.preventDefault();
  const pokemon_json = await fetchPokemons(changePokemon());
  renderPokemon(pokemon_json);
};

const init = () => {
  form.addEventListener("submit", search_Pokemon);
};

init();
