import styles from './Search.module.css';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { useState } from 'react';

export const Search = () => {
  const [showResetButton, setShowResetButton] = useState(false);
  const [value, setValue] = useState('');

  const callbacks = {
    handleFocus() {
      setShowResetButton(true);
    },
    handleBlur() {
      if (!value) {
        setShowResetButton(false);
      }
    },
    handleChange(evt) {
      setValue(evt.target.value);
      console.log(evt.target.value);
    },
    handleReset(evt) {
      evt.preventDefault();
      setValue('');
      setShowResetButton(false);
    },
    handleSubmit(evt) {
      evt.preventDefault();
    },
  };

  return (
    <form
      className={styles.search}
      onReset={callbacks.handleReset}
      onSubmit={callbacks.handleSubmit}
    >
      <input
        className={`${styles.input} ${styles.item}`}
        id="search"
        name="search"
        placeholder="Поиск по городу"
        type="text"
        onFocus={callbacks.handleFocus}
        onBlur={callbacks.handleBlur}
        onChange={callbacks.handleChange}
        value={value}
      />
      {showResetButton ? (
        <button className={`${styles.button} ${styles.item}`} type="reset">
          <SvgIcon id={'delete-icon'} className={styles.icon}></SvgIcon>
        </button>
      ) : (
        <div className={`${styles.icon} ${styles.item}`}>
          <SvgIcon id={'search-icon'} className={styles.iconSearch}></SvgIcon>
        </div>
      )}
    </form>
  );
};
