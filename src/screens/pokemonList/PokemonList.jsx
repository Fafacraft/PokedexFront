import { useState } from 'react'
import { useEffect } from 'react';
import React from 'react';
import axios from "axios";
import './PokemonList.css'
import PokemonCard from "../../components/pokemonCard/pokemonCard";
import { useNavigate } from 'react-router';

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();
  const loginToken = sessionStorage.getItem("loginToken");


  // only at loading, because of the second param []
  useEffect(() => {
    if (!loginToken) {
      navigate("/");
    }

    axios.get('http://localhost:3000/api/pokemons')
      .then(response => {
        const pokemonArray = response.data.pokemons; // get all pokemons
        setPokemons(pokemonArray);
      })
      .catch(error => {
        console.error('Error fetching pokemons:', error);
      });
  }, []);

  // else it crash as it does the useEffect in a second time
  if (!pokemons.length) return (<div>Loading...</div>);

  return (
    <>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index}
          nameEnglish={pokemon.name.english}
          nameFrench={pokemon.name.french}
          HP={pokemon.base.HP}
          ATK={pokemon.base.Attack}
          DEF={pokemon.base.Defense}
          SPEATK={pokemon.base["Sp. Attack"]}
          SPEDEF={pokemon.base["Sp. Defense"]}
          SPEED={pokemon.base.Speed}
          image={pokemon.image}
          types={pokemon.type} />
      ))}
    </>
  )
}

export default PokemonList
