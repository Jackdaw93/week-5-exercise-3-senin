import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 150px;
  border: 1px solid green;
  border-radius: 5px;
  margin: 5px;
  & img {
    width: 100%;
  }
  & a {
    text-decoration: none;
  }
`;

const Title = styled.h4`
  text-align: center;
`;

function Pokemons() {
  const [pokemons, setPokemon] = useState({});

  async function fetchPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=100";

    let response = await fetch(url);
    let results = await response.json();

    await setPokemon(results);
  }

  useEffect(() => {
    fetchPokemon();

    // disable-next-line
  }, []);

  console.log(pokemons.results);
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Kartu Pokemon</h3>
      <CardList>
        {pokemons.results !== undefined &&
          pokemons.results.map((pokemon) => {
            const id = pokemon.url.split("/")[6];

            return (
              <Card key={id}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt="pokeimage"
                />
                <hr />
                <Link to={`/pokemons/${pokemon.name}`}>
                  {" "}
                  <Title>{pokemon.name}</Title>
                </Link>
              </Card>
            );
          })}
      </CardList>
    </div>
  );
}

export default Pokemons;
