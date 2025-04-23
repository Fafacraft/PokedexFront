import React from "react";
import "./Login.css";
import PokemonLogo from "../../assets/PokemonLogo.webp"

function Login() {
    return (
        <>
        <form class="login-form">
            <img src={PokemonLogo} alt="Pokemon Logo" className="pokemon-logo"></img>
            <h2>Pokedex</h2>
            <div class="form-group">
            <label for="login">Login:</label>
            <input type="text" id="login" name="login" required />
            </div>
            <div class="form-group">
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" class="login-button">Se connecter</button>
            <span class="debug_info">Faux login, ne pas mettre d'information importantes</span>
        </form>
        </>
    )
}

export default Login;