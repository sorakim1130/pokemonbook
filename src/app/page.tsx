import PokemonList from "@/components/PokemonList";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <PokemonList/>
    </main>
  );
}
