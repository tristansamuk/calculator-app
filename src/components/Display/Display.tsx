import "./Display.scss";

type Props = {
  result: string;
};

const Display = ({ result }: Props) => {
  return (
    <div className="display">
      <div className="display__result">{result ? result : "0"}</div>
    </div>
  );
};

export default Display;
