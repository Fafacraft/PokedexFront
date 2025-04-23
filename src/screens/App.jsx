import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./login/Login.jsx";
import PokemonList from "./pokemonList/PokemonList.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link> | <Link to="/pokemons">Pokemons</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pokemons" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
