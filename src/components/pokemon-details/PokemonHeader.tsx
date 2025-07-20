import { type PokemonPropsHeader } from "../../constans/types";
import { getColor } from "../../constans/colors";
import { MdOutlineGrass } from "react-icons/md";
import { MdLocalFireDepartment } from "react-icons/md";
import { FiSquare } from "react-icons/fi";
import { IoWaterSharp } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";
import { PiBirdBold } from "react-icons/pi";
import {
  FaHillRockslide,
  FaDragon,
  FaGhost,
  FaHandBackFist,
} from "react-icons/fa6";

import {
  GiSteelClaws,
  GiFairyWings,
  GiSwamp,
  GiGroundbreaker,
  GiPoisonBottle,
  GiBouncingSword,
} from "react-icons/gi";

const PokemonHeader = ({ pokemon }: { pokemon: PokemonPropsHeader }) => {
  const getIcon = (statName: string) => {
    const iconMapTypes = {
      grass: <MdOutlineGrass className="text-green-500" size={20} />,
      fire: <MdLocalFireDepartment className="text-red-500" size={20} />,
      normal: <FiSquare className="text-gray-400" size={20} />,
      water: <IoWaterSharp className="text-blue-500" size={20} />,
      electric: <BsLightningChargeFill className="text-yellow-500" size={20} />,
      ice: <FaRegSnowflake className="text-cyan-400" size={20} />,
      fighting: <GiBouncingSword className="text-red-700" size={20} />,
      poison: <GiPoisonBottle className="text-purple-700" size={20} />,
      ground: <GiGroundbreaker className="text-yellow-600" size={20} />,
      flying: <PiBirdBold className="text-blue-300" size={20} />,
      psychic: <FaHandBackFist className="text-purple-500" size={20} />,
      bug: <GiSwamp className="text-yellow-900" size={20} />,
      rock: <FaHillRockslide className="text-yellow-800" size={20} />,
      ghost: <FaGhost className="text-purple-800" size={20} />,
      dragon: <FaDragon className="text-indigo-600" size={20} />,
      dark: <PiBirdBold className="text-gray-800" size={20} />,
      steel: <GiSteelClaws className="text-gray-500" size={20} />,
      fairy: <GiFairyWings className="text-pink-400" size={20} />,
    };
    return iconMapTypes[statName as keyof typeof iconMapTypes];
  };
  return (
    <div className="bg-indigo-300 p-1 rounded-2xl mb-8">
      <div
        className="flex flex-col lg:flex-row justify-between px-4 md:px-12 py-4 bg-gradient-to-tl from-slate-950 
            via-slate-900 to-slate-950 rounded-2xl gap-4"
      >
        <div className="flex items-center justify-between gap-2 md:gap-12">
          <span className="text-xm text-blue-500">{pokemon.id}</span>
          <h1 className="text-xm sm:text-2xl font-bold text-yellow-300">
            {pokemon.name}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {pokemon.types.map((type, index) => (
            <div
              className={`flex items-center gap-2  px-2 ${getColor(
                type.type.name
              )} border-4 rounded-2xl`}
            >
              {getIcon(type.type.name)}
              <span
                key={index}
                className={`px-3 py-1 rounded-xl w-fit text-slate-300 capitalize b`}
              >
                {type.type.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonHeader;
