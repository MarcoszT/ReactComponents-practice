import { useState } from 'react';

const Counter = () => {
  const [cont, setCont] = useState(0);

  const rest = () => {
    if (cont > 0) setCont(cont - 1);
  };
  const sum = () => {
    if (cont < 10) setCont(cont + 1);
  };

  return (
    <div className="container">
      <div>
        <button onClick={rest}>-</button>
      </div>

      <div>
        <p>{cont}</p>
      </div>

      <div>
        <button onClick={sum}>+</button>
      </div>
    </div>
  );
};

export default Counter;
