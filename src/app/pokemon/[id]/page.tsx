import {fetchPokemonData} from "@/apis/pokemon";
import Link from "next/link";

const PokemonDetailPage = async ({params}: {params: {id:string}}) => {

 const pokemonData = await fetchPokemonData(params.id);

  return (
    <div>
        <h1>{pokemonData.korean_name}</h1>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.korean_name} />
        <p>키 : {pokemonData.height}</p>
        <p>몸무게 : {pokemonData.weight}</p>
        <p>타입 : {pokemonData.types.map((type) => type.type.korean_name).join(", ")}</p>
        <p>특성 : {pokemonData.abilities.map((ability) => ability.ability.korean_name).join(", ")}</p>
        <p>기술 : {pokemonData.moves.map((move) => move.move.korean_name).join(", ")}</p>
        <Link href="/">뒤로가기</Link>
    </div>
  )
}


export default PokemonDetailPage