import "./App.css";
import Cards from "./components/Cards";
import WinnersBoard from "./components/WinnersBoard";
import { CardProvider } from "./context/CardContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <CardProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Cards />}></Route>
          <Route path="/winners" element={<WinnersBoard />}></Route>
        </Routes>
      </div>
    </CardProvider>
  );
}

export default App;
