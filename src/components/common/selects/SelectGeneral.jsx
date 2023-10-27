import "@/styles/Components/selects/SelectGeneral.css"

export default function SelectGeneral({
  children,
  width = "100%",
  height = "auto",
  className = "",
  onChange = () => {},
  value = "",
  name = "",
  id = "",
  disabled = false,
}) {
  return (
    <select
      id={id}
      onChange={onChange}
      name={name}
      value={value}
      disabled={disabled}
      className={`selectGeneral ${className}`}
      style={{ width, height }}
    >
      {children}
    </select>
  );
}
