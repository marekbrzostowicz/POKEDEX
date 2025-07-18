import CardList from "./pages/CardList";
import Header from "./components/Header";
import PokemonDetails from "./pages/PokemonDetails";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
