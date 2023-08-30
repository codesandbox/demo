import reactLogo from "./assets/react.svg";
import "./App.css";
import { CounterFeature } from "./features/counter";

console.log("Hello World!");

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://github.com/christianalfoni/impact"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github.com/christianalfoni/impact/assets/3956929/5279b512-e4d9-4474-92cf-7d06b356e23c"
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>React + Vite + Impact</h1>
      <h2>On CodeSandbox!</h2>
      <div className="card">
        <CounterFeature />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>

        <p>
          Tip: you can use the inspector button next to address bar to click on
          components in the preview and open the code in the editor!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
