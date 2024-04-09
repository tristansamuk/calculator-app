// import { useState } from "react";
import "./styles/global.scss";
import Display from "./components/Display/Display";
import Key from "./components/Key/Key";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

import "./App.scss";

function App() {
  const smallKeys = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
  ];
  const bigKeys = ["RESET", "="];
  return (
    <div className="home">
      <div className="calculator">
        <div className="calculator__container--top">
          <h1 className="calculator__logo">calc</h1>
          <ThemeSwitch />
        </div>
        <Display />
        <div className="calculator__keypad">
          <div className="calculator__small-keys">
            {smallKeys.map((key) => {
              return <Key label={key} />;
            })}
          </div>
          <div className="calculator__big-keys">
            {bigKeys.map((key) => {
              return <Key label={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
