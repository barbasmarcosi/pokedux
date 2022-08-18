import axios from "axios";

export const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.data.results)
    .catch((e) => console.error(e));
};

export const getPokemonDetail = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((e) => console.error(e));
};
