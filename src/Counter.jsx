import React, { useState } from 'react';
import './styles.css';
import { CounterDisplay } from './CounterDisplay';

export function Counter({ initialValue = 0, incrementBy = 1 }) {
  const [count, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter(c => c + incrementBy);
  }

  function handleDecrement() {
    setCounter(c => c - incrementBy);
  }

  function handleReset() {
    setCounter(initialValue);
  }

  return (
    <div className="counter-wrapper">
      <CounterDisplay count={count} />
      <button className="counter-button" onClick={handleIncrement}>
        Incrementa
      </button>
      <button className="counter-button" onClick={handleDecrement}>
        Decrementa
      </button>
      <button className="counter-button" onClick={handleReset}>
        Resetta
      </button>
    </div>
  );
}
