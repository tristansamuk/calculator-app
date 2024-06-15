import "./Display.scss";

interface Props {
  display: string;
  theme: string;
}

const Display = ({ display, theme }: Props) => {
  return (
    <div data-theme={theme} className="display">
      <h2 className="display__number">{display ? display : "0"}</h2>
    </div>
  );
};

export default Display;
