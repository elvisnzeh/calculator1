import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Calculator = () => {
  const [result, setResult] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    setCurrentValue(currentValue + number);
    setResult(currentValue + number);
  };

  const handleOperatorClick = (op) => {
    if (operator !== null) {
      calculate();
    }
    setOperator(op);
    setCurrentValue('');
  };

  const calculate = () => {
    const num1 = parseFloat(result);
    const num2 = parseFloat(currentValue);
    switch (operator) {
      case '+':
        setResult((num1 + num2).toString());
        break;
      case '-':
        setResult((num1 - num2).toString());
        break;
      case '*':
        setResult((num1 * num2).toString());
        break;
      case '/':
        setResult((num1 / num2).toString());
        break;
      default:
        break;
    }
  };

  const handleEqualsClick = () => {
    calculate();
    setOperator(null);
    setCurrentValue('');
  };

  const handleClearClick = () => {
    setResult('0');
    setCurrentValue('');
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{result}</div>
      <div className="calculator-buttons">
        <button onClick={handleNumberClick.bind(null, '7')}>7</button>
        <button onClick={handleNumberClick.bind(null, '8')}>8</button>
        <button onClick={handleNumberClick.bind(null, '9')}>9</button>
        <button onClick={handleOperatorClick.bind(null, '/')}>/</button>
        <button onClick={handleNumberClick.bind(null, '4')}>4</button>
        <button onClick={handleNumberClick.bind(null, '5')}>5</button>
        <button onClick={handleNumberClick.bind(null, '6')}>6</button>
        <button onClick={handleOperatorClick.bind(null, '*')}>*</button>
        <button onClick={handleNumberClick.bind(null, '1')}>1</button>
        <button onClick={handleNumberClick.bind(null, '2')}>2</button>
        <button onClick={handleNumberClick.bind(null, '3')}>3</button>
        <button onClick={handleOperatorClick.bind(null, '-')}>-</button>
        <button onClick={handleNumberClick.bind(null, '0')}>0</button>
        <button onClick={handleOperatorClick.bind(null, '.')}>.</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={handleOperatorClick.bind(null, '+')}>+</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
