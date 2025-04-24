import React from "react";
import "./PokemonDetail.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import StatBar from "../../components/statBar/statBar";

function PokemonDetail() {
    const [pokemon, setPokemon] = useState([]);
    const navigate = useNavigate();
    const loginToken = sessionStorage.getItem("loginToken");
    const { id } = useParams();
  
  
    // only at loading, because of the second param []
    useEffect(() => {
      if (!loginToken) {
        navigate("/");
      }
  
      axios.get('http://localhost:3000/api/pokemons/' + id)
        .then(response => {
          const pokemon = response.data;
          setPokemon(pokemon);
          console.log(pokemon);
        })
        .catch(error => {
          console.error('Error fetching pokemon :', error);
        });
    }, []);

    
    // waiting to load
    if (!pokemon.name) return (<div>Loading...</div>);

    return (
        <div className="pokemon-details-container">
            <div className="pokemon-details-card">
                <img src={pokemon.image} alt={pokemon.name.french} className="pokemon-details-image" />

                <h2 className="pokemon-details-name">{pokemon.name.french}</h2>
                <p className="pokemon-details-names">
                    🇬🇧 {pokemon.name.english} | 🇯🇵 {pokemon.name.japanese} | 🇨🇳 {pokemon.name.chinese}
                </p>

                <div className="pokemon-details-types">
                    {pokemon.type.map((type, index) => (
                        <span key={index} className={`type-details type-${type.toLowerCase()}`}>
                            {type}
                        </span>
                    ))}
                </div>

                <div className="pokemon-details-stats">
                    {Object.entries(pokemon.base).map(([stat, value]) => (
                        <StatBar stat={stat} value={value}></StatBar>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail;