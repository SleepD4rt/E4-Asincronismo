let numero = 25;

fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
  .then((res) => res.json())
  .then((res) => {
    const pokemon = res;

    console.log(pokemon);

    const pokemon_stats = [
      res.sprites,
      res.name,
      res.types,
      res.weight,
      res.height,
    ];
    console.log(pokemon_stats);

    // console.log(pokemon.find((pokemon) => pokemon.name === "pikachu"));
  })
  .catch((err) => console.error(err));
