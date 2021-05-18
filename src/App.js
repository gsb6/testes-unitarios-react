import React, { useState } from 'react';

import Button from './components/Button';
import Card from './components/Card'
import Currency from './components/Currency'

function App() {
  const [value, setValue] = useState(0);
  const [isSent, setIsSent] = useState(false);

  const incrementValue = () => {
    setValue(value => value + 10);
  }

  const decrementValue = () => {
    setValue(value => value - 10);
  }

  const sendValue = () => {
    setIsSent(true);
  }

  return (
    <Card>
      {!isSent ? (
        <>
          <Button label="Decrementar" onClick={decrementValue} backgroundColor="red" disabled={value === 0} />
          <Button label="Incrementar" onClick={incrementValue} backgroundColor="green" />
    
          <Currency value={value} size={48} />
    
          <Button label="Enviar" onClick={sendValue} />
        </>
      ) : (
        <p>Valor enviado!</p>
      )}
    </Card>
  );
}

export default App;
