const form_container = document.querySelector("#pokemon-form");

const errorForm = document.querySelector(".form__error");

const input_codigo = document.querySelector("#codigo");

const pokemon_container = document.querySelector(".container--pokemon");

const pokemon_card = document.querySelector(".pokemon--card");

const search_Pokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/2`)
    .then((res) => res.json())
    .then((res) => {
      const pokemon_stats = [
        res.sprites,
        res.name,
        res.types.flat(),
        res.weight,
        res.height,
      ];
      console.log(pokemon_stats);
      renderizarPokemon(pokemon_stats);
    })
    .catch((err) => console.error(err));
};

const renderizarPokemon = (pokemon) => {
  console.log(pokemon[2]);
  // console.log(pokemon[2].find((type) => type.slot == 1));
  pokemon_container.innerHTML = `<div class="pokemon--card">
  <img src="" alt="" class="pokemon--img" />
  <div class="h1 pokemon--title">${pokemon[1]}</div>
  <h2 class="pokemon--type">${
    pokemon[2]
  }</h2> <!--.filter((tipo) => tipo.name) --> 
  <p class="weight">Peso: ${pokemon[3] / 10} Kilogramos</p>
  <p class="height">Altura: ${pokemon[4] / 10} Metros</p>
</div>`;
};

const init = () => {
  search_Pokemon();
};

init();
