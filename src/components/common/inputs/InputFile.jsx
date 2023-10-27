import "@/styles/Components/inputs/InputFile.css";

export default function InputFile({
  width = "128px",
  height = "144px",
  className = "",
  onChange = () => {},
  name = "",
  id = "",
  disabled = false,
}) {

  return (
    <label className={!disabled ? `inputFile` : `inputFile isDisabled`} style={{ width: width, height: height }}>
      <input
        type="file"
        className={`inputFile-input ${className}`	}
        onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
      />
      <span>
        <p>+</p>
        Upload
      </span>
    </label>
  );
}
