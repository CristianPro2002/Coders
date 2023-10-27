import "@/styles/Components/inputs/InputNumber.css";

export default function InputNumber({
  width = "100%",
  height = "auto",
  className = "",
  onChange = () => {},
  placeholder = "",
  value = "",
  name = "",
  id = "",
  disabled = false,
}) {
  return (
    <input
      type="number"
      placeholder={placeholder}
      name={name}
      className={`inputNumber ${className}`}
      onChange={onChange}
      value={value}
      disabled={disabled}
      id={id}
      style={{ width: width, height: height }}
    />
  );
}
