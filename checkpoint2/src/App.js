import { BrowserRouter, Routes, Route } from "react-router-dom"
import GameDetails from "./components/GameDetails";
import GameList from "./components/GameList";
import Header from "./components/Header";


function App() {
  const name = "REACT GAMES"

  return (
    <div className="App">
      <BrowserRouter>²
        <Header name={name} />
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
