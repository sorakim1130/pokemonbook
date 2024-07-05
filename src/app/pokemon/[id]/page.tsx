import {fetchPokemonData} from "@/apis/pokemon";
import Link from "next/link";
import Image from "next/image";

const PokemonDetailPage = async ({params}: {params: {id:string}}) => {

 const pokemonData = await fetchPokemonData(params.id);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-black">
        <div className="flex flex-col gap-3 justify-center items-center shadow-lg rounded-lg overflow-hidden bg-white w-3/4 p-12">
            <h1>{pokemonData.korean_name}</h1>
            <Image src={pokemonData.sprites.front_default} alt={pokemonData.korean_name} width={96} height={96} />
            <p>키 : {pokemonData.height}</p>
            <p>몸무게 : {pokemonData.weight}</p>
            <p>타입 : {pokemonData.types.map((type) => type.type.korean_name).join(", ")}</p>
            <p>특성 : {pokemonData.abilities.map((ability) => ability.ability.korean_name).join(", ")}</p>
            <p>기술 : {pokemonData.moves.map((move) => move.move.korean_name).join(", ")}</p>
            <Link href="/" className="p-3 rounded-xl bg-amber-600 w-full text-center font-bold">뒤로가기</Link>
        </div>
    </div>
  )
}


export default PokemonDetailPage