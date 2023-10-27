import "@/styles/Components/inputs/InputText.css";

export default function InputText({
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
      type="text"
      placeholder={placeholder}
      name={name}
      className={`inputText ${className}`}
      onChange={onChange}
      value={value}
      disabled={disabled}
      id={id}
      style={{ width: width, height: height }}
    />
  );
}
