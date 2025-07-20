import { GoArrowSwitch } from "react-icons/go";
import { PiStarFour } from "react-icons/pi";
import { type PokemonPhotosProps } from "../../constans/types";
import { useState } from "react";

const Photos = ({ pokemon }: { pokemon: PokemonPhotosProps }) => {
  const [position, setPostition] = useState(0);

  const positionsArray = ["front_default", "back_default", "front_shiny"];

  const handlePhotosUpdate = () => {
    if (position >= positionsArray.length - 1) {
      setPostition(0);
    } else {
      setPostition(position + 1);
    }
  };

  const currentPhoto =
    pokemon.sprites[positionsArray[position] as keyof typeof pokemon.sprites];
  return (
    <div className="bg-indigo-300 p-1  rounded-2xl ">
      <div className="flex flex-col items-center justify-center pb-4 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 rounded-2xl border border-slate-800 relative">
        {currentPhoto ? (
          <img src={currentPhoto} alt="" className="w-64" />
        ) : (
          <div className="w-64 h-64 flex items-center justify-center text-slate-400 text-lg border border-dashed border-slate-500 rounded-2xl bg-slate-900">
            No photo
          </div>
        )}

        <button onClick={() => handlePhotosUpdate()}>
          <GoArrowSwitch
            size={35}
            className="text-yellow-400 hover:text-blue-500 hover:cursor-pointer"
          />
        </button>
        {position === 2 && (
          <div className="absolute bottom-3 right-3 flex flex-col gap-1 items-center">
            <p className="text-xs text-yellow-300">Shiny</p>
            <PiStarFour size={35} className="text-amber-200" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;
