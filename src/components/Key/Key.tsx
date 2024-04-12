import "./Key.scss";

type Props = {
  keyValue: number | string;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  calculate: (expression: string) => string;
};

// Used in onClick() to test whether displayed number already has a decimal

const hasDecimal = /\.+/;

// Keeps track of the expression to be passed to calculate()

let expression = "";

// Keep track of whether last key pressed was an operator

let justClickedOperator = false;

const Key = ({ keyValue, display, setDisplay, calculate }: Props) => {
  const onClick = () => {
    if (typeof keyValue === "number") {
      if (keyValue === 0 && !display) {
        return;
      } else if (justClickedOperator === true) {
        setDisplay(keyValue.toString());
        justClickedOperator = false;
        // console.log("this ran"); // this is
        return;
      } else {
        setDisplay((display += keyValue.toString()));
        justClickedOperator = false;
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
            setDisplay("0" + keyValue.toString());
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
          if (display === "") {
            break;
          } else if (justClickedOperator === false) {
            justClickedOperator = true;
            setDisplay(calculate(expression));
            console.log("this block ran");
            break;
          } else {
            justClickedOperator = true;
            setDisplay(calculate(expression));
            expression = `${expression} ${display} ${keyValue}`;
            break;
          }
        case "x":
          expression = `${expression} ${display} *`;
          // console.log(expression);
          setDisplay("");
          break;
        case "=": // This got messed up somehow
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
