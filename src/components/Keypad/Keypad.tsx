import "./Keypad.scss";
import Key from "../Key/Key";

type Props = {
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  calculate: (expression: string) => string;
};

// Key values
const smallKeyValues = [
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
];
const bigKeyValues = ["RESET", "="];

const Keypad = ({ setDisplay, display, calculate }: Props) => {
  return (
    <div className="keypad">
      <div className="keypad__small-keys">
        {smallKeyValues.map((keyValue) => {
          return (
            <Key
              key={keyValue}
              display={display}
              setDisplay={setDisplay}
              keyValue={keyValue}
              calculate={calculate}
            />
          );
        })}
      </div>
      <div className="keypad__big-keys">
        {bigKeyValues.map((keyValue) => {
          return (
            <Key
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
