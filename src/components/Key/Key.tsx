import "./Key.scss";
import { onKeyPress } from "../../utils/functions";

// interface Action {
//   type: string;
//   payload: {};
// }
interface Props {
  keyValue: string | number;
  // dispatch: (value: Action) => void;
}

const Key = ({ keyValue }: Props) => {
  return (
    <button onClick={onKeyPress} className="key">
      <p className="key__label">{keyValue}</p>
    </button>
  );
};

export default Key;
