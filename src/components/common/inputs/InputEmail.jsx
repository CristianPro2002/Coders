import "@/styles/Components/inputs/InputEmail.css";

export default function InputEmail({
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
      type="email"
      placeholder={placeholder}
      name={name}
      className={`inputEmail ${className}`}
      onChange={onChange}
      value={value}
      disabled={disabled}
      id={id}
      style={{ width: width, height: height }}
    />
  );
}
