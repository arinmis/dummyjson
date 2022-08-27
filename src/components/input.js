const Input = ({ label, type, value, readOnly }) => {
  return (
    <label htmlFor="">
      <span>{`${label}:`}</span>
      <input
        type={type}
        className="w-full input-style"
        value={value ? value : null}
        readOnly={readOnly}
      />
    </label>
  );
};

export default Input;
