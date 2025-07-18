import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProgressBar from "../components/ProgressBar";

interface PokemonType {
  type: {
    name: string;
    url: string;
  };
  slot: number;
}

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokemonSprites {
  front_default: string;
  back_default: string;
  other?: {
    "official-artwork"?: {
      front_default: string;
    };
  };
}

interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  types: PokemonType[];
  sprites: PokemonSprites;
}

const PokemonDetails = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  const navigate = useNavigate();
  const { name } = useParams<{ name: string }>();

  const goHome = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!name) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data: PokemonData = await response.json();
        setPokemonData(data);
        console.log(data.stats);
      } catch (error) {
        console.log("Error during fetching", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [name]);

  if (isLoading) return <div className="mt-36 text-center">Loading...</div>;
  if (!pokemonData)
    return <div className="mt-36 text-center">No Pokemon found</div>;

  return (
    <section className="mt-36 max-w-11/12 px-10 mx-auto">
      <button onClick={() => goHome()}>GO BACK</button>
      <h1>{name}</h1>
      <div className="bg-sky-900">
        {pokemonData.abilities.map((element, index) => (
          <p key={index}>{element.ability.name}</p>
        ))}
      </div>
      <div className="bg-amber-300 p-1 max-w-2xl rounded-2xl">
        <div className="flex flex-col gap-4 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-8 rounded-xl border-2 border-slate-800">
          {pokemonData.stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 items-center justify-between px-2 sm:px-20"
            >
              <p className="text-sm text-yellow-400">{stat.stat.name}</p>
              <div className="mb-4">
                <p className="text-sm text-yellow-200">{stat.base_stat}</p>
                <ProgressBar stat={stat.base_stat} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PokemonDetails;
