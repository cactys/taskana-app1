import React from 'react';
import styles from './Button.module.css';

/**
 *
 * @param {string} children - Text to be displayed on the button.
 * @param {string} variant - Type of button to be displayed. Can be 'primary'-default, or 'secondary' color.
 * @param {string} size - Size of the button. Can be 'medium'-default, or 'large'.
 * @param {string} className - Additional CSS classes to be added to the button.
 * @param {object} settings - Additional settings for the button.
 * @returns
 */
const Button = ({ children, variant = 'primary', size = 'medium', className, ...settings }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`}
      {...settings}
    >
      {children}
    </button>
  );
};

export default Button;
