import React, { useState } from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import StarButton from "./StarButton";
import { setFavorite } from "../slices/dataSlice";

const PokemonCard = ({ name, imgUrl, types, id, favorite }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name.replace(name[0], name[0].toUpperCase())}
      cover={<img src={imgUrl} alt={name} />}
      extra={
        <StarButton
          isFavorite={favorite}
          onClick={handleOnClick}
        />
      }
    >
      <Meta description={types.replace(types[0], types[0].toUpperCase())} />
    </Card>
  );
};

export default PokemonCard;
