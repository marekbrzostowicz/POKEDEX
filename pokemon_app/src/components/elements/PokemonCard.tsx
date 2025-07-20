import { type PokemonCardProps } from "../../constans/types";

const PokemonCard = ({ pokemon }: { pokemon: PokemonCardProps }) => {
  return (
    <div>
      <div className="bg-yellow-300 p-1 rounded-3xl border-2 border-slate-900  transition duration-100 shadow-slate-800 shadow-2xl">
        <div className="flex flex-col justify-center items-center w-60 h-72 bg-gradient-to-tl from-sky-200 via-amber-50 to-yellow-300 gap-6 p-4 rounded-2xl border-2 border-slate-900 hover:bg-gradient-to-tl hover:from-sky-300 hover:via-yellow-200 hover:to amber-100 transition duration-200 hover:cursor-pointer hover:scale-105">
          <h2
            className={`text-slate-800 bg-slate-100 px-2 py-1 rounded-xl font-bold border-2 border-amber-900 ${
              pokemon.name.length > 11 ? "text-xs" : "text-xm"
            }`}
          >
            {pokemon.name}
          </h2>
          <img
            src={pokemon.sprites.front_default}
            alt="Pokomon Photo"
            className="w-36"
          />
          <div className="flex flex-wrap justify-start gap-2 w-full">
            {pokemon.types.map((type) => (
              <p className="text-slate-900 border-2 px-2 rounded-2xl text-xs bg-slate-100">
                {type.type.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
