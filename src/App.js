import { useState, useEffect } from "react"

function App() {
  //count, setCount
  const [count, setCount] = useState(
    ()=>{
      const save = localStorage.getItem("value");
      return save ? parseInt(save):0;
    }
  );

  useEffect(
    ()=>{
      localStorage.setItem("value", count)
    }
  );

  const handleMinusCLick = () => {setCount(count - 1)};
  const handlePlusClick = () => {setCount(count + 1)};

  return (
    <div>
      <h1> {count} </h1>
      <div className="buttons">
        <button className="minus" onClick={handleMinusCLick}>-</button>
        <button className="plus" onClick={handlePlusClick}>+</button>
      </div>
    </div>
  );
}

export default App;
