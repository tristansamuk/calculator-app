import "./Display.scss";

type Props = {
  display: string;
};

const Display = ({ display }: Props) => {
  return (
    <div className="display">
      <h2 className="display__number">{display ? display : "0"}</h2>
    </div>
  );
};

export default Display;
