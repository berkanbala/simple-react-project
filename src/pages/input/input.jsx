export const Input = (props) => {
  const { type, className, placeholder, onChange, value } = props;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
