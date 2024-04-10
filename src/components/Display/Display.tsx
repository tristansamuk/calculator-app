import "./Display.scss";

type Props = {
  display: string;
};

const Display = ({ display }: Props) => {
  return (
    <div className="display">
      <p className="display__number">{display ? display : "0"}</p>
    </div>
  );
};

export default Display;
