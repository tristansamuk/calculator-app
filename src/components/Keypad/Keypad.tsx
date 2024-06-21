import { keyValues } from "../../utils/constants";
import Key from "../Key/Key";
import "./Keypad.scss";

// interface Action {
//   type: string;
//   payload: {};
// }

// interface Props {
//   dispatch: (value: Action) => void;
// }

const Keypad = () => {
  return (
    <div className="keypad">
      <div className="keypad__grid">
        {keyValues.map((keyValue) => {
          return <Key key={keyValue} keyValue={keyValue} />;
        })}
      </div>
    </div>
  );
};

export default Keypad;
