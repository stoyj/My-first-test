import React from 'react';
import './Button.css';

const Button = ({
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
