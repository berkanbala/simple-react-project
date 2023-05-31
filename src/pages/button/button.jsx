export const Button = (props) => {
  const { onclick, className, img } = props;
  return (
    <button onclick={onclick} className={className}>
      {img}
    </button>
  );
};
