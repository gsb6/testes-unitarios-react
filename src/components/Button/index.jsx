import React from 'react';

function Button({
  onClick,
  label = '',
  backgroundColor = '#333',
  ...props
}) {
  const style = {
    padding: '16px 48px',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 0,
    borderRadius: 12,
    backgroundColor: backgroundColor,
    cursor: 'pointer',
  }

  return (
    <button data-testid="button" onClick={onClick} style={style} {...props}>
      {label}
    </button>
  );
};

export default Button;