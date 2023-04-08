import { useEffect, useState } from 'react';
// import { useParams, useSearchParams } from "react-router-dom"
import { APIAllPokemons, APIPokemon } from 'services/fetchPokemon';

const { default: PokemonList } = require('components/PokemonList/PokemonList');
const { default: Search } = require('components/Search/Search');

const HomePage = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  useEffect(() => {
    console.log('useEffect fires');
      APIAllPokemons().then(allPokemons => {
      setAllPokemons(allPokemons);
    });
  }, []);
    
    
//   useEffect(() => {
//     console.log('useEffect fires');
//     APIAllPokemons().then(allPokemons => {
//       setAllPokemons(allPokemons);
//     });
//   }, []);

//     useEffect(() => {
//      allPokemons.forEach(el => APIPokemon(el.name).then(pok => console.log(pok)));

//   }, [allPokemons]);
//   console.log(allPokemons);
    
    
    
  return (
    <>
      <Search />
      {allPokemons.length ? (
        <PokemonList allPokemons={allPokemons} />
      ) : (
        'Loading'
      )}
    </>
  );
};

export default HomePage;
