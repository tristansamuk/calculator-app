import "./Key.scss";

type Props = {
  keyValue: number | string;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  calculate: (expression: string) => string;
};

// Used in onClick() to test whether displayed number already has a decimal

const hasDecimal = /\.+/;

// Keeps track of expression to be passed to calculate()

let expression = "";

const Key = ({ keyValue, display, setDisplay, calculate }: Props) => {
  const onClick = () => {
    if (typeof keyValue === "number") {
      if (keyValue === 0 && !display) {
        return;
      } else {
        setDisplay((display += keyValue.toString()));
        return;
      }
    } else {
      switch (keyValue) {
        case "DEL":
          setDisplay(display.slice(0, -1));
          break;
        case "RESET":
          expression = "";
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
        case "+":
        case "-":
        case "/":
          if (!display) {
            break;
          } else {
            expression = `${expression} ${display} ${keyValue}`;
            console.log(expression);
            setDisplay("");
          }
          break;
        case "x":
          expression = `${expression} ${display} *`;
          console.log(expression);
          setDisplay("");
          break;
        case "=":
          expression = `${expression} ${display}`;
          console.log(expression);
          setDisplay(calculate(expression));
          expression = "";
          break;
      }
    }
  };
  return (
    <button onClick={onClick} className="key">
      {keyValue}
    </button>
  );
};

export default Key;
