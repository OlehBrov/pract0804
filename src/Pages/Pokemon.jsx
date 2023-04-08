import { Link, useParams } from "react-router-dom";

const Pokemon = () => {

    const {name} = useParams()
    console.log("🚀 ~ file: pokemon.jsx:6 ~ Pokemon ~ name:", name)
    
    return <div>
        <Link>Back</Link>
        Pokemon
    </div>
}

export default Pokemon;