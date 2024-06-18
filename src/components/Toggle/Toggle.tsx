import useLocalStorage from "use-local-storage";
import "./Toggle.scss";
import { useState } from "react";

// Idea
// make the switch a button with moving dot inside it
// set state for count defaulting to 1
// onClick, increment count
// if count = 2, setTheme("theme-2"), translate x by however many pixels
// if count = 3, setTheme("theme-3"), translate x by however many pixels
// if count < 3, setTheme("theme-1"), reset count to 1, translate back to original position

const Toggle = () => {
  const [theme, setTheme] = useLocalStorage("theme", "theme-1");
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
    if (count >= 3) {
      setCount(1);
    }
    switch (count) {
      case 2:
        setTheme("theme-2");
        break;
      case 3:
        setTheme("theme-3");
        break;
      default:
        setTheme("theme-1");
    }
  };

  return (
    <div className="toggle">
      <div className="toggle__container--left">
        <p className="toggle__label">THEME</p>
      </div>
      <div className="toggle__container--right">
        <div className="toggle__container--numbers">
          <p className="toggle__number">1</p>
          <p className="toggle__number">2</p>
          <p className="toggle__number">3</p>
        </div>
        <div className="toggle__container--switch">
          <button
            onClick={() => handleClick()}
            className="toggle__button"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
