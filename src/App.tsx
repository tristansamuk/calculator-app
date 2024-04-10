import { useState } from "react";
import "./styles/global.scss";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

import "./App.scss";
import { evaluate } from "mathjs";

const calculate = (expression: string) => {
  const result = evaluate(expression).toString();
  return result;
};
console.log(calculate("38970 * 439857 / 3"));

function App() {
  // State for display component

  const [result, setResult] = useState("");

  return (
    <div className="home">
      <div className="calculator">
        <div className="calculator__container--top">
          <h1 className="calculator__logo">calc</h1>
          <ThemeSwitch />
        </div>
        <Display result={result} />
        <Keypad result={result} setResult={setResult} />
      </div>
    </div>
  );
}

export default App;
