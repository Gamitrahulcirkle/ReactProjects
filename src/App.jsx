import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(15);

  const addCounter = () => {
    if (count < 30) {
      setCount(count + 1);
    }
  };

  const removeCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter Project in React + Vite</h1>      
      {count === 0 && <p style={{ color: "red", fontWeight: "bold" }}>Minimum limit reached (0)</p>}
      {count === 30 && <p style={{ color: "green", fontWeight: "bold" }}>Maximum limit reached (30)</p>}
      
      <div>
        <span>Counter is: {count}</span>
      </div>
      <br/>

      <button onClick={addCounter} disabled={count >= 30}>
        Add Counter: {count}
      </button>
      <br/>      
      <br/>      


      <button onClick={removeCounter} disabled={count <= 0}>
        Remove Counter: {count}
      </button>      
    </>
  );
}

export default App;
