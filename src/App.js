import { useEffect } from "react";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { shallowEqual, useDispatch, useSelector } from "react-redux/es/exports";
import "./App.css";
import { fetchPokemonWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher pokemons={pokemons} />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
