import React from "react";
import { useState } from "react";
import "./Login.css";
import PokemonLogo from "../../assets/PokemonLogo.webp"
import { useNavigate } from "react-router";


function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [badLogin, setBadLogin] = useState(false);
    const [badPassword, setBadPassword] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // else submitting refresh the page and error message disappear

        const isBadLogin = login.length < 3;
        const isBadPassword = password.length < 8;

        setBadLogin(isBadLogin);
        setBadPassword(isBadPassword);

        if (isBadLogin || isBadPassword) return;

        navigate("/pokemons");
    }

    return (
        <>
        <form class="login-form" onSubmit={handleSubmit}>
            <img src={PokemonLogo} alt="Pokemon Logo" className="pokemon-logo"></img>
            <h2>Pokedex</h2>
            <div class="form-group">
            <label for="login">Login:</label>
            <input type="text" id="login" name="login" value={login} onChange={(e) => {setLogin(e.target.value)}} />
            {badLogin && (<span class="loginError">Le login doit faire au moins 3 caractères.</span>)}
            </div>
            <div class="form-group">
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            {badPassword && (<span class="loginError">Le mot de passe doit faire au moins 8 caractères.</span>)}
            </div>
            <button type="submit" class="login-button">Se connecter</button>
            <span class="debug_info">Faux login, ne pas mettre d'information importantes</span>
        </form>
        </>
    )
}

export default Login;