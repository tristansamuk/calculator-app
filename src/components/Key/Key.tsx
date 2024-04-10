import "./Key.scss";

type Props = {
  keyValue: number | string;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
};

const hasDecimal = /\.+/;

const Key = ({ keyValue, display, setDisplay }: Props) => {
  const onClick = () => {
    if (typeof keyValue === "number") {
      setDisplay((display += keyValue.toString()));
    } else {
      switch (keyValue) {
        case "DEL":
          setDisplay(display.slice(0, -1));
          break;
        case "RESET":
          setDisplay("");
          break;
        case ".":
          if (!display) {
            break;
          } else if (hasDecimal.test(display)) {
            break;
          } else {
            setDisplay((display += keyValue.toString()));
            break;
          }
      }

      // case "+":
      // case "-":
      // case "-":
      // case "/":
      //   // setExpression(`${display} ${KeyValue.toString()} `)
      //   // setDisplay("")
      //   break;
      // case "x":
      //   // setExpression(`${display} * `)
      //   // setDisplay("")
      //   break;
    }
  };
  return (
    <button onClick={onClick} className="key">
      {keyValue}
    </button>
  );
};

export default Key;
