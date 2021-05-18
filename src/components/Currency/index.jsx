import React from 'react';

function Card({
  value = 0,
  size = 18
}) {
  const style = {
    color: 'green',
    fontSize: size,
  }

  const formattedValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <p data-testid="currency" style={style}>
      {formattedValue}
    </p>
  );
};

export default Card;