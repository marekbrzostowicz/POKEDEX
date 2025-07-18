import PokemonCard from "../components/PokemonCard";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";

const CardList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 20;

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1");

  const offset = (currentPage - 1) * itemsPerPage;
  const startItem = offset + 1;
  const endItem = currentPage * itemsPerPage;

  const handleCardClick = (pokemonName: string) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
        );
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url);
            return await detailsResponse.json();
          })
        );
        setPokemonData(pokemonDetails);
      } catch (error) {
        console.log("Error during fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, offset]);

  return (
    <div className="flex flex-wrap justify-center gap-6 py-44 relative max-w-11/12 px-24 mx-auto">
      {/* {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="text-white text-xl">Loading Pokemon...</div>
        </div>
      )} */}

      <div className="fixed bottom-5 right-5 text-white gap-4 bg-slate-950 border border-sky-500 rounded-2xl py-2 flex flex-col w-44 items-center">
        <div className="flex gap-6 items-center justify-center">
          <button
            onClick={() =>
              setSearchParams({ page: (currentPage - 1).toString() })
            }
            disabled={currentPage <= 1 || loading}
          >
            <IoIosArrowBack
              size={35}
              className={`${
                currentPage <= 1 || loading
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-sky-400 hover:scale-110 hover:text-amber-300"
              }`}
            />
          </button>

          <button
            onClick={() =>
              setSearchParams({ page: (currentPage + 1).toString() })
            }
            disabled={currentPage >= 50 || loading}
          >
            <IoIosArrowForward
              size={35}
              className={`${
                currentPage >= 50 || loading
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-sky-400 hover:scale-110 hover:text-amber-300"
              }`}
            />
          </button>
        </div>
        <div>
          <p className="text-xs">
            {startItem} - {endItem}
          </p>
        </div>
      </div>

      {pokemonData.map((pokemon) => (
        <button key={pokemon.id} onClick={() => handleCardClick(pokemon.name)}>
          <PokemonCard pokemonDetails={pokemon} />
        </button>
      ))}
    </div>
  );
};

export default CardList;
