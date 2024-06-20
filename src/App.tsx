import { useState } from "react";
import strings from "./strings/strings";
import useLocalStorage from "use-local-storage";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";
import Toggle from "./components/Toggle/Toggle";
import "./App.scss";

function App() {
  // Store key "theme" with default value "theme-1" in local storage

  const [theme, setTheme] = useLocalStorage("theme", "theme-1");

  // Store expression to be calculated in state (turn into context)

  const [expression, setExpression] = useState("");

  // State for display component

  const [display, setDisplay] = useState("");

  return (
    <div data-theme={theme} className="home">
      <div className="calculator">
        <div className="calculator__container--top">
          <h1 className="calculator__logo">{strings.title}</h1>
          <Toggle setTheme={setTheme} />
        </div>
        <Display display={display} />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
