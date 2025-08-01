import ProgressBar from "../elements/ProgressBar";
import { type PokemonStatsProps } from "../../constants/types";
import { IoIosHeart } from "react-icons/io";
import { LuSword } from "react-icons/lu";
import { FaShield } from "react-icons/fa6";
import { TbSwords } from "react-icons/tb";
import { BsShieldFillPlus } from "react-icons/bs";
import { PiLightningBold } from "react-icons/pi";

const Stats = ({ pokemon }: { pokemon: PokemonStatsProps }) => {
  const getIcon = (statName: string) => {
    const iconMap = {
      hp: <IoIosHeart className="text-red-500" />,
      attack: <LuSword className="text-orange-400 " />,
      defense: <FaShield className="text-blue-400" />,
      "special-attack": <TbSwords className="text-rose-700" />,
      "special-defense": <BsShieldFillPlus className="text-green-500" />,
      speed: <PiLightningBold className="text-amber-200" />,
    };
    return iconMap[statName as keyof typeof iconMap];
  };

  return (
    <div className="bg-indigo-300 p-1  rounded-2xl">
      <div className="flex flex-col gap-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-12 rounded-xl border-2  border-slate-800 relative">
        <h2 className="absolute left-4 top-4 text-xl text-red-500">Stats</h2>
        {pokemon.stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 items-center justify-between px-2 sm:px-20"
          >
            <div className="flex items-center gap-2">
              {getIcon(stat.stat.name)}
              <p className="text-sm text-yellow-400">{stat.stat.name}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-yellow-200">{stat.base_stat}</p>
              <ProgressBar stat={stat.base_stat} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
