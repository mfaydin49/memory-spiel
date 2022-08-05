import "./App.css";
import Cards from "./components/Cards";
import { CardProvider } from "./context/CardContext";

function App() {
  return (
    <CardProvider>
      <div className="App">
        <Cards />
      </div>
    </CardProvider>
  );
}

export default App;
