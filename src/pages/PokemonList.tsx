import PokemonCard from "../components/elements/PokemonCard";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  type PokemonCardProps,
  type PokemonPropsHeader,
} from "../constans/types";
import Header from "../components/elements/Header";
import Loading from "../components/elements/Loading";

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState<PokemonCardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
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

  const handleSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
        );
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon: PokemonPropsHeader) => {
            const detailsResponse = await fetch(pokemon.url);
            return await detailsResponse.json();
          })
        );
        setPokemonData(pokemonDetails);
      } catch (error) {
        console.log("Error during fetching", error);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, offset]);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <div className="py-44 relative max-w-11/12 px-24 mx-auto">
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchQuery}
        isDetails={true}
      />

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <Loading />
        </div>
      ) : (
        <>
          {error && (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="text-red-500 text-center">{error}</div>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-6">
            {searchQuery ? (
              pokemonData.filter((pokemon) =>
                pokemon.name.includes(searchQuery)
              ).length === 0 ? (
                <div className="flex justify-center items-center min-h-[200px] w-full">
                  <p>No pokemon found</p>
                </div>
              ) : (
                pokemonData
                  .filter((pokemon) => pokemon.name.includes(searchQuery))
                  .map((pokemon) => (
                    <button
                      key={pokemon.id}
                      onClick={() => handleCardClick(pokemon.name)}
                    >
                      <PokemonCard pokemon={pokemon} />
                    </button>
                  ))
              )
            ) : (
              pokemonData.map((pokemon) => (
                <button
                  key={pokemon.id}
                  onClick={() => handleCardClick(pokemon.name)}
                >
                  <PokemonCard pokemon={pokemon} />
                </button>
              ))
            )}
          </div>
        </>
      )}

      <div className="fixed bottom-5 right-5 text-white gap-4 bg-slate-950 border border-sky-500 rounded-2xl py-2 flex flex-col w-24 md:w-36 items-center">
        <div className="flex flex-col gap-6 items-center justify-center">
          <button
            onClick={() => {
              setSearchParams({ page: (currentPage - 1).toString() });
            }}
            disabled={currentPage <= 1}
          >
            <IoIosArrowUp
              size={32}
              className={`${
                currentPage <= 1
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-sky-400 hover:scale-110 hover:text-amber-300"
              }`}
            />
          </button>

          <button
            onClick={() =>
              setSearchParams({ page: (currentPage + 1).toString() })
            }
            disabled={currentPage >= 66}
          >
            <IoIosArrowDown
              size={32}
              className={`${
                currentPage >= 66
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-sky-400 hover:scale-110 hover:text-amber-300"
              }`}
            />
          </button>
        </div>
        <div className="flex flex-col items-center gap-1 lg:flex-row text-xs">
          <p>{startItem}</p>
          <span>-</span>
          <p>{endItem}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
