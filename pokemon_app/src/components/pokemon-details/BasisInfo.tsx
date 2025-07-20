interface PokemonBasisInfoProps {
  base_experience: string;
  weight: string;
  height: string;
}

const BasisInfo = ({ pokemon }: { pokemon: PokemonBasisInfoProps }) => {
  return (
    <div className="bg-indigo-300 p-1 rounded-2xl">
      <div className="flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 rounded-2xl relative">
        <h3 className="absolute text-red-500 text-xl top-3 right-3">
          Basis Info
        </h3>
        <div className="flex flex-col md:flex-row gap-8 pt-20 pb-12 text-sm">
          <div className="flex flex-col gap-4 items-center ">
            <p className="text-amber-400">base experience</p>
            <p className="text-yellow-200">{pokemon.base_experience}</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-amber-400">weight</p>
            <p className="text-yellow-200">{pokemon.weight}</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-amber-400">height</p>
            <p className="text-yellow-200">{pokemon.height}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasisInfo;
