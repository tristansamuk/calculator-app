import "./App.scss";
import { useState } from "react";
import { evaluate } from "mathjs";
import useLocalStorage from "use-local-storage";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

// Calculates and converts answer to sting

const calculate = (expression: string): string => {
  const result = evaluate(expression).toString();
  return result;
};

function App() {
  // Store key "theme" with default value "theme-1" in local storage

  const [theme, setTheme] = useLocalStorage("theme", "theme-1");

  // State for display component

  const [display, setDisplay] = useState("");

  return (
    <div data-theme={theme} className="home">
      <div className="calculator">
        <div className="calculator__container--top">
          <h1 className="calculator__logo">calc</h1>
          <ThemeSwitch />
        </div>
        <Display display={display} />
        <Keypad
          display={display}
          setDisplay={setDisplay}
          calculate={calculate}
        />
      </div>
    </div>
  );
}

export default App;
