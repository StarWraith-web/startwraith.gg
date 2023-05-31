import "./InputText.scss";

export function InputText(props) {
  const { type, name, placeholder } = props;
  return (
    <div class="form__group field">
      <input
        type={type}
        class="form__field"
        placeholder={placeholder}
        name={name}
        id={name}
        required
      />
      <label for={name} class="form__label">
        {placeholder}
      </label>
    </div>
  );
}
