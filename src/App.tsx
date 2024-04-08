// import { useState } from "react";
import Display from "./components/Display/Display";
import Key from "./components/Key/Key";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

import "./App.scss";

function App() {
  return (
    <div className="home">
      <div className="calculator">
        <div className="calculator__container--top">
          <h1 className="calculator__logo">calc</h1>
          <ThemeSwitch />
        </div>
        <Display />
        <div className="calculator__keypad">
          {/* Row 1 */}
          <Key />
          <Key />
          <Key />
          <Key />
          {/* Row 2 */}
          <Key />
          <Key />
          <Key />
          <Key />
          {/* Row 3 */}
          <Key />
          <Key />
          <Key />
          <Key />
          {/* Row 4 */}
          <Key />
          <Key />
          <Key />
          <Key />
          {/* Row 5 */}
          <Key />
          <Key />
        </div>
      </div>
    </div>
  );
}

export default App;
