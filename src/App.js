import { useState } from "react"

function App() {
  //count, setCount
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> {count} </h1>
      <div className="buttons">
        <button className="minus" onClick={() => { setCount(count - 1) }}>-</button>
        <button className="plus" onClick={() => { setCount(count + 1) }}>+</button>
      </div>
    </div>
  );
}

export default App;
