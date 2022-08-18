import React, { useState } from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";
import StarButton from "./StarButton";

const PokemonCard = ({ name, imgUrl, types }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <Card
      title={name.replace(name[0], name[0].toUpperCase())}
      cover={<img src={imgUrl} alt={name} />}
      extra={
        <StarButton
          isFavorite={favorite}
          onClick={() => setFavorite(!favorite)}
        />
      }
    >
      <Meta description={types.replace(types[0], types[0].toUpperCase())} />
    </Card>
  );
};

export default PokemonCard;
