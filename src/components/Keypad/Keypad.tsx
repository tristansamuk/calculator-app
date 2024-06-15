import "./Keypad.scss";
import Key from "../Key/Key";

interface Props {
  theme: string;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  calculate: (expression: string) => string;
}

// Key values
const keyValues = [
  7,
  8,
  9,
  "DEL",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "-",
  ".",
  0,
  "/",
  "x",
  "RESET",
  "=",
];

const Keypad = ({ theme, setDisplay, display, calculate }: Props) => {
  return (
    <div data-theme={theme} className="keypad">
      <div className="keypad__grid">
        {keyValues.map((keyValue) => {
          return (
            <Key
              theme={theme}
              key={keyValue}
              display={display}
              setDisplay={setDisplay}
              keyValue={keyValue}
              calculate={calculate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Keypad;
