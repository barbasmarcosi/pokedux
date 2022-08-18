import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          imgUrl={pokemon.sprites.front_default}
          types={pokemon.types.map((type) => type.type.name).join(' and ')}
        />
      ))}
    </div>
  );
};

export default PokemonList;

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
