import "./Key.scss";

type Props = {
  keyValue: number | string;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
};

const Key = ({ keyValue, result, setResult }: Props) => {
  const onClick = () => {
    if (typeof keyValue === "number") {
      setResult((result += keyValue.toString()));
    } else if (keyValue === "RESET") {
      setResult("");
    } else if (keyValue === "DEL") {
      setResult(result.slice(0, -1));
    }
  };

  return (
    <button onClick={onClick} className="key">
      {keyValue}
    </button>
  );
};

export default Key;
