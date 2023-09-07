import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [templates, setTemplates] = useState()
  
  const fetchTemplates  = async () => {
    const data = await fetch("https://codesandbox.io/api/v1/sandboxes/templates/official")
    const json = await data.json()

    console.log(json[0].sandboxes)
  }

  useEffect(() => {
    fetchTemplates()
  }, [])

  return (
    <div className="App">
      <h2>Console logs are awesome!</h2>
      <div className="card">
      </div>
    </div>
  );
}

export default App;
