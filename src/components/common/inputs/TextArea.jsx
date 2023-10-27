import "@/styles/Components/inputs/TextArea.css";

export default function TextArea({
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
    <textarea
      type="text"
      placeholder={placeholder}
      name={name}
      className={`textArea ${className}`}
      onChange={onChange}
      value={value}
      disabled={disabled}
      id={id}
      style={{ width: width, height: height }}
    />
  );
}
