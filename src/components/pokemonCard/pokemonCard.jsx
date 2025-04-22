import React from "react";
import "./pokemonCard.css"

const PokemonCard = (props) => {
    return (
        <div className="pokemon-card">
        <img src={props.image} alt="Bulbasaur" className="pokemon-image" />
        <h2 className="pokemon-name">{props.nameFrench} <span className="pokemon-en">({props.nameEnglish})</span></h2>
        <div className="pokemon-types">
            {props.types?.map((type) => (
                <span key={type} className={`type type-${type.toLowerCase()}`}>
                {type}
                </span>
            ))}
        </div>
        <div className="pokemon-stats">
            <div><strong>HP:</strong> {props.HP}</div>
            <div><strong>ATK:</strong> {props.ATK}</div>
            <div><strong>DEF:</strong> {props.DEF}</div>
            <div><strong>Sp. ATK:</strong> {props.SPEATK}</div>
            <div><strong>Sp. DEF:</strong> {props.SPEDEF}</div>
            <div><strong>Speed:</strong> {props.SPEED}</div>
        </div>
        </div>
    )
}

export default PokemonCard;