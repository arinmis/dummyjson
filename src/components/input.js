const Input = ({ label, type, value, readOnly, onChange }) => {
  return (
    <label>
      <span>{`${label}:`}</span>
      <input
        onChange={onChange}
        type={type}
        className="w-full input-style"
        value={value ? value : null}
        readOnly={readOnly}
      />
    </label>
  );
};

export default Input;
