const Input = ({ label, type }) => {
  return (
    <label htmlFor="">
      <span>{`${label}:`}</span>
      <input type={type} className="w-full input-style" />
    </label>
  );
};

export default Input;
