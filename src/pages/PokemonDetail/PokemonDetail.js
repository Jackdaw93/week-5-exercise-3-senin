import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  border: 1px solid green;
  border-radius: 5px;
  margin: 5px;
  & img {
    width: 100%;
  }
`;

const CardDesc = styled.div`
  width: 300px;

  margin: 5px;
  & img {
    width: 100%;
  }
`;

const Avatar = styled.div`
  & img {
    height: 300px;
    width: 300px;
    border-radius: 100%;
    margin: 0 auto;
  }
`;

function PokemonDetail() {
  let { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  function fetchSinglePokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => setPokemon(result));
  }

  useEffect(() => {
    fetchSinglePokemon();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Detail Pokemon</h3>
      <hr />
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Card>
          <Avatar>
            {pokemon.sprites !== undefined && (
              <img src={pokemon.sprites.front_default} alt="pokemon" />
            )}
          </Avatar>
        </Card>
        <CardDesc>
          <p>Name: {pokemon.name}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
          <p>
            Ability:
            {pokemon.abilities !== undefined && (
              <span>{pokemon.abilities[0].ability.name}</span>
            )}
          </p>
          <p>
            Moves:
            {pokemon.moves !== undefined && (
              <span>{pokemon.moves[0].move.name}</span>
            )}
          </p>
          <p>
            Base Stat:
            {pokemon.stats !== undefined && (
              <span>{pokemon.stats[0].base_stat}</span>
            )}
          </p>
        </CardDesc>
      </div>
    </div>
  );
}

export default PokemonDetail;
