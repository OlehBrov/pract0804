import axios from 'axios';

export const APIPokemon = async pokemonName => {
  try {
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    return pokemon;
  } catch (error) {}
};

export const APIAllPokemons = async () => {
  try {
    const allPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    const pokArray = allPokemons.data.results;
    //   console.log('pokArray', pokArray)
     const mapped = pokArray.map(el => 
        APIPokemon(el.name)
      );

    //   console.log('mapped', mapped)
      
      const promAll = Promise.all(mapped)
    //   console.log("🚀 ~ file: fetchPokemon.js:25 ~ APIAllPokemons ~ promAll:", promAll)
      

      return promAll;

  } catch (error) {}
};
