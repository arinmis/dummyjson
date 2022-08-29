const Input = ({ label, type, value, readOnly, onChange }) => {
  return (
    <label>
      <span>{`${label}:`}</span>
      <input
        onChange={onChange}
        type={type}
        className={
          (readOnly ? "hover:cursor-not-allowed" : null) +
          " w-full  input-style  focus:border"
        }
        value={value ? value : null}
        readOnly={readOnly}
      />
    </label>
  );
};

export default Input;
