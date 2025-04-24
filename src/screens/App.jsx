import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./login/Login.jsx";
import PokemonList from "./pokemonList/PokemonList.jsx";
import Logout from "./Logout/Logout.jsx";
import PokemonDetail from "./pokemonDetail/PokemonDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link> | <Link to="/logout">Logout</Link> | <Link to="/pokemons">Pokemons</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
