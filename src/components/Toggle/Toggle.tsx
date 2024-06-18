import useLocalStorage from "use-local-storage";
import "./Toggle.scss";

const Toggle = () => {
  const [theme, setTheme] = useLocalStorage("theme", "theme-1");
  const handleClick = (themeName: string) => {
    setTheme(themeName);
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
            onClick={() => handleClick("theme-1")}
            className="toggle__button"
          ></button>
          <button
            onClick={() => handleClick("theme-2")}
            className="toggle__button"
          ></button>
          <button
            onClick={() => handleClick("theme-3")}
            className="toggle__button"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
