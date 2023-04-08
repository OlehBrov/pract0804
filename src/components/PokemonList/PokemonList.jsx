import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PokemonList = ({ allPokemons }) => {
  //   console.log('allPokemon', allPokemons);
  return (
    <ListStyles>
      {allPokemons.map(el => (
        <ListItem key={el.data.name}>
          <Link to={`pokemon/${el.data.name}`} >
            <h4>{el.data.name}</h4>

            <StyledImg
              src={el.data.sprites.other.dream_world.front_default}
              alt={el.data.name}
            />
          </Link>
        </ListItem>
      ))}
    </ListStyles>
  );
};

export default PokemonList;

const ListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
`;

const ListItem = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.img`
  display: block;
  width: 100px;
`;
