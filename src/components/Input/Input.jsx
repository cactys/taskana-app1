export const Input = (props) => {
  return (
    <input
      className={props.className}
      id="search"
      name="search"
      placeholder="Поиск по городу"
      type="text"
      onChange={props.onChange}
      value={props.value}
    />
  );
};
