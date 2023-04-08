import { useSearchParams } from "react-router-dom";
import {APIPokemon} from "services/fetchPokemon";

const Search = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();    
    const query = searchParams.get('query');
    // console.log(query)

    
    const handleSubmit = (e) => {
        APIPokemon(searchParams);
        setSearchParams('')
    }

    return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text"  value={query ? query : ''}  onChange={e => setSearchParams({ query: e.target.value })}/>
      <button type="submit">Search</button>
    </form>
  );
};


export default Search;