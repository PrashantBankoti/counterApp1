import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // we can put random date like this directly into Date() method
  //and to change the date on the basis of count we use date.setDate(date.getDate()+count) as shown below
  const date = new Date("tue dec 17 2024");
  date.setDate(date.getDate() + count);

  function handleStepDec() {
    setStep((step) => step - 1);
  }

  function handleStepInc() {
    setStep((step) => step + 1);
  }

  function handleCountInc() {
    setCount((count) => count + step);
  }
  function handleCountDec() {
    setCount((count) => count - step);
  }
  return (
    <div>
      <div>
        <button onClick={handleStepDec}>-</button>
        <span>Step:{step}</span>
        <button onClick={handleStepInc}>+</button>
      </div>
      <div>
        <button onClick={handleCountDec}>-</button>
        <span>Count:{count}</span>
        <button onClick={handleCountInc}>+</button>
      </div>
      <span>
        {/* here to format the date into a clean looking date we used toDateString() */}
        {count === 0
          ? `Today is ${date.toDateString()}`
          : count >= 1
          ? `${count} days from today is ${date.toDateString()}`
          : `${-1 * count} days ago was ${date.toDateString()}`}
      </span>
    </div>
  );
}
