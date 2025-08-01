import { useEffect, useState } from "react";
import {
  type PokemonAbilitiesProps,
  type PokemonAbilitiesDetails,
} from "../../constants/types";
import { GoEyeClosed } from "react-icons/go";
import { GoArrowSwitch } from "react-icons/go";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Abilities = ({ pokemon }: { pokemon: PokemonAbilitiesProps }) => {
  const [abilitiesDetails, setAbilitiesDetails] = useState<
    PokemonAbilitiesDetails[]
  >([]);
  const [abilitiesArrayIndex, setAbilitiesArrayIndex] = useState(0);

  const handleSwitchClikc = () => {
    if (abilitiesArrayIndex >= abilitiesDetails.length - 1) {
      setAbilitiesArrayIndex(0);
    } else {
      setAbilitiesArrayIndex(abilitiesArrayIndex + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const details = await Promise.all(
        pokemon.abilities.map(async (element) => {
          const response = await fetch(element.ability.url);
          return await response.json();
        })
      );
      setAbilitiesDetails(details);
    };
    fetchData();
  }, [pokemon]);

  return (
    <div className="bg-indigo-300 p-1 rounded-2xl h-full">
      <div className="bg-gradient-to-bl rounded-2xl from-indigo-950 via-slate-900 to-slate-950 h-full relative flex items-center justify-center gap-4 flex-col px-6 py-12">
        <h2 className="absolute top-4 left-4 text-sm md:text-xl text-red-500">
          Abilities
        </h2>

        <div className="flex flex-col items-center gap-4">
          {pokemon.abilities.map((element, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-4 w-48 relative">
                <div className="flex items-center gap-2">
                  <p
                    className={`${
                      abilitiesArrayIndex === index
                        ? "text-blue-500"
                        : "text-amber-400"
                    } text-sm capitalize flex-1 text-center`}
                  >
                    {element.ability.name}
                  </p>
                  {element.is_hidden && (
                    <GoEyeClosed size={20} className="text-indigo-300" />
                  )}
                </div>

                <div className="absolute -right-6">
                  {abilitiesArrayIndex === index && (
                    <FaLongArrowAltLeft size={25} className="text-blue-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-950 px-4 py-3 rounded-2xl border border-slate-400 w-full h-44 overflow-y-auto">
          {abilitiesDetails[abilitiesArrayIndex] && (
            <p className="text-xs text-slate-300 leading-relaxed">
              {
                abilitiesDetails[abilitiesArrayIndex].effect_entries.find(
                  (entry) => entry.language.name === "en"
                )?.effect
              }
            </p>
          )}
        </div>

        <button onClick={() => handleSwitchClikc()}>
          <GoArrowSwitch
            size={35}
            className="text-yellow-400 hover:text-blue-500 hover:cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default Abilities;
