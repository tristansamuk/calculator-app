import "./Display.scss";

type Props = {
  result: number;
};

const Display = ({ result }: Props) => {
  return (
    <div className="display">
      <div className="display__result">{result}</div>
    </div>
  );
};

export default Display;
