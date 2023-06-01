import "./InputText.scss";

export function InputText(props) {
  const { type, name, placeholder } = props;
  return (
    <div className="form__group field">
      <input
        type={type}
        className="form__field"
        placeholder={placeholder}
        name={name}
        id={name}
        required
      />
      <label htmlFor={name} className="form__label">
        {placeholder}
      </label>
    </div>
  );
}
