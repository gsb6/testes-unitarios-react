import React from 'react';

function Card({
  children,
  padding = 24,
  borderRadius = 8
}) {
  const style = {
    padding: padding,
    backgroundColor: 'white',
    borderRadius: borderRadius,
    boxShadow: '4px 4px 16px 0px rgba(0,0,0,0.5)',
  }

  return (
    <div data-testid="card" style={style}>
      {children}
    </div>
  );
};

export default Card;
