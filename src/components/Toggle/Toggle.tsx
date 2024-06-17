import "./Toggle.scss";

const Toggle = () => {
  return (
    <div className="toggle">
      <label htmlFor="checkbox" className="toggle__label">
        THEME
      </label>
      <input type="checkbox" id="checkbox" className="toggle__switch" />
    </div>
  );
};

export default Toggle;
