import GameList from "./components/GameList";
import Header from "./components/Header";


function App() {
  const name = "REACT GAMES"

  return (
    <div className="App">
      <Header name={name} />
      <GameList />
    </div>
  );
}

export default App;
