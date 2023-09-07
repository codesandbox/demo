import reactLogo from "./assets/react.svg";
import "./App.css";
import { CounterFeature } from "./features/counter";

console.log("Hello World!");

function App() {
  return (
    <div className="App">
      <h1>Console logs are awesome!</h1>
      <div className="card">
        <CounterFeature />
      </div>
    </div>
  );
}

export default App;
