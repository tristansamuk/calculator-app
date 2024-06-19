import "./Toggle.scss";
import { useEffect, useState } from "react";

interface Props {
  setTheme: (theme: string) => void;
}

const Toggle = ({ setTheme }: Props) => {
  const [count, setCount] = useState(1);

  // When user clicks the toggle button, update the count

  const handleClick = () => {
    setCount(count + 1);
    if (count >= 3) {
      setCount(1);
    }
  };

  // When count changes, change the theme

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
            onClick={handleClick}
            className="toggle__button"
            aria-label="toggle theme"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
