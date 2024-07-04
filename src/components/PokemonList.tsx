"use client";

import React from "react";
import {Pokemon} from "@/types/pokemon";
import Link from "next/link";
import Image from "next/image";

const PokemonList:React.FC = () => {
    const [pokemonData, setPokemonData] = React.useState<Pokemon[]>([]);

    React.useEffect(() => {
        const fetchPokemonsData = async () => {
            const response = await fetch("api/pokemons");
            const data = await response.json();
            setPokemonData(data)
        }
        fetchPokemonsData()
    }, []);

  return (
    <div className="container ms-auto">
        PokemonList
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {pokemonData.length === 0 ? (<div>로딩</div>) : (pokemonData.map((pokemon) => (
                <div key={pokemon.id} className="p-4 border rounded-lg">
                    <Link href={`/pokemon/${pokemon.id}`}>
                        <Image src={pokemon.sprites.front_default} alt={pokemon.korean_name} width={96} height={96} />
                        <p>{pokemon.korean_name}</p>
                        <p>번호 : {pokemon.id}</p>
                    </Link>
                </div>
            )))}
        </div>

    </div>
  )
}


export default PokemonList