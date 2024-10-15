import SearchIcon from '../assets/icons/search.svg';
import CloseIcon from '../assets/icons/dagger.svg';
import { useRef, useState } from 'react';

export const Input = () => {
  const [img, setImg] = useState(SearchIcon);
  const [value, setValue] = useState('');
  const ref = useRef(null);

  const handleChange = (evt) => {
    setValue(evt.target.value);
    console.log(evt.target.value);
  };

  const handleBlur = () => {
    if (!value.length) setImg(SearchIcon);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    setValue('');
    setImg(SearchIcon);
  };

  return (
    <form
      id="form"
      className="header__form flex"
      action="#"
      onSubmit={handleSubmit}
    >
      <input
        className="header__form-search family-base"
        id="header-search"
        type="search"
        placeholder="Поиск по городу"
        onFocus={() => {
          setImg(CloseIcon);
        }}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        ref={ref}
      />
      <button
        type="button"
        className="header__form-button"
        onClick={handleClick}
        disabled={img === SearchIcon}
      >
        <img src={img} alt="поиск" />
      </button>
    </form>
  );
};
