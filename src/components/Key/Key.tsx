import "./Key.scss";
import { onKeyPress } from "../../utils/functions";
interface Props {
  keyValue: string | number;
}

const Key = ({ keyValue }: Props) => {
  return (
    <button onClick={onKeyPress} className="key">
      <p className="key__label">{keyValue}</p>
    </button>
  );
};

export default Key;
