import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(null);

  const somarNumeros = (e) => {
    e.preventDefault();
    const soma = parseFloat(num1) + parseFloat(num2);
    setResultado(soma);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Somar Números</h1>
      <form onSubmit={somarNumeros}>
        <div>
          <label htmlFor="num1">Número 1:</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="num2">Número 2:</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <button type="submit">Somar</button>
      </form>
      {resultado !== null && (
        <h2>Resultado: {resultado}</h2>
      )}
    </div>
  );
}
