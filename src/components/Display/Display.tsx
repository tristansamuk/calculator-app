import "./Display.scss";

interface Props {
  currentOperand: string;
}

const Display = ({ currentOperand }: Props) => {
  return (
    <div className="display">
      <h2 className="display__number">
        {currentOperand ? currentOperand : "0"}
      </h2>
    </div>
  );
};

export default Display;
