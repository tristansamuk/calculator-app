import useLocalStorage from "use-local-storage";
import "./Toggle.scss";
import { useEffect, useState } from "react";

const Toggle = () => {
  const [theme, setTheme] = useLocalStorage("theme", "theme-1");
  const [count, setCount] = useState(1);

  useEffect(() => {
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
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
    if (count >= 3) {
      setCount(1);
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
            data-count={count}
            onClick={() => handleClick()}
            className="toggle__button"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
