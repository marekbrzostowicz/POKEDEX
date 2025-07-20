import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokemonHeader from "../components/pokemon-details/PokemonHeader";
import Stats from "../components/pokemon-details/Stats";
import Photos from "../components/pokemon-details/Photos";
import Abilities from "../components/pokemon-details/Abilities";
import BasisInfo from "../components/pokemon-details/BasisInfo";
import ReturnToList from "../components/elements/ReturnToList";
import Header from "../components/elements/Header";
import Loading from "../components/elements/Loading";

const PokemonDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);

  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    if (!name) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemonData(data);
        console.log(data);
      } catch (error) {
        console.log("Error during fetching", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [name]);

  if (isLoading) return <Loading />;
  if (!pokemonData)
    return <div className="mt-44 text-center">No Pokemon found</div>;

  return (
    <>
      <Header isDetails={false} />
      <section className="mt-44 mb-28 max-w-10/12 px-10 mx-auto">
        <PokemonHeader pokemon={pokemonData} />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-8">
            <Photos pokemon={pokemonData} />
            <div className="flex-1">
              <Abilities pokemon={pokemonData} />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <Stats pokemon={pokemonData} />
            <BasisInfo pokemon={pokemonData} />
            <ReturnToList />
          </div>
        </div>
      </section>
    </>
  );
};

export default PokemonDetails;
