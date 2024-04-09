import "./Key.scss";

type Props = {
  label: string;
};
const Key = ({ label }: Props) => {
  return <button className="key">{label}</button>;
};

export default Key;
