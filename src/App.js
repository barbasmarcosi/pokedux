import { useEffect, useState } from "react";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { shallowEqual, useDispatch, useSelector } from "react-redux/es/exports";
import "./App.css";
import { fetchPokemonWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const [search, setSearch] = useState("");
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase())
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher 
        searching={search} onSearch={(event) => setSearch(event.target.value)} />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={filteredPokemons} />
      )}
    </div>
  );
}

export default App;
