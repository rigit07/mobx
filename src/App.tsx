import logo from "./logo.svg";
import "./App.css";
import { multipleCounter, counter } from "./store/Store";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter store={counter} />
        <hr />
        <Counter store={multipleCounter} />
      </header>
    </div>
  );
}

export default App;
