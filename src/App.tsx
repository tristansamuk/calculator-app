import "./App.scss";
import "./styles/global.scss";
import { useState } from "react";
import { evaluate } from "mathjs";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

// Calculates and converts answer to sting

const calculate = (expression: string): string => {
  const result = evaluate(expression).toString();
  return result;
};
// console.log(calculate("38970 * 439857 / 3"));

function App() {
  // State for display component

  const [display, setDisplay] = useState("");

  return (
    <div className="home">
      <div className="calculator">
        <div className="calculator__container--top">
          <h1 className="calculator__logo">calc</h1>
          <ThemeSwitch />
        </div>
        <Display display={display} />
        <Keypad display={display} setDisplay={setDisplay} />
      </div>
    </div>
  );
}

export default App;
