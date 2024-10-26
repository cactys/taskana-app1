import styles from './Search.module.css';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { useState } from 'react';
import { Input } from '../Input/Input';

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
      onFocus={callbacks.handleFocus}
      onBlur={callbacks.handleBlur}
    >
      <Input
        value={value}
        onChange={callbacks.handleChange}
        className={`${styles.input} ${styles.item}`}
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
