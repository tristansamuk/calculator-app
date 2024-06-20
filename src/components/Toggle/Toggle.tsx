import strings from "../../strings/strings";
import { useEffect, useState } from "react";
import "./Toggle.scss";

interface Props {
  setTheme: (theme: string) => void;
}

const Toggle = ({ setTheme }: Props) => {
  const [count, setCount] = useState(1);

  // When user clicks the toggle button, update the count

  const handleClickToggle = () => {
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
        <p className="toggle__label">{strings.theme}</p>
      </div>
      <div className="toggle__container--right">
        <div className="toggle__container--numbers">
          {strings.themeNumbers.map((number) => {
            return (
              <p key={number} className="toggle__number">
                {number}
              </p>
            );
          })}
        </div>
        <div className="toggle__container--switch">
          <button
            data-count={count}
            onClick={handleClickToggle}
            className="toggle__button"
            aria-label="toggle theme"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
