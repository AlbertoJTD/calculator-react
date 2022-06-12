import './App.css';
import Button from './components/Button'
import Display from './components/Display.jsx'
import ClearButton from './components/ClearButton';
import Logo from './components/Logo'

import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const updateValue = (value) => {
    setInput(input + value)
  }

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('No has seleccionado ningun valor para calcular')
    }
  }

  return (
    <div className="App">
      <Logo 
        image='spiderman.png'
        alt='Spiderman logo'
        content='Spider - Calculator 🕸'
      />
      <div className="calculator-container">
        <Display
          input = { input }
        />
        <div className="row">
          <Button handleClick={updateValue}>7</Button>
          <Button handleClick={updateValue}>8</Button>
          <Button handleClick={updateValue}>9</Button>
          <Button handleClick={updateValue}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={updateValue}>4</Button>
          <Button handleClick={updateValue}>5</Button>
          <Button handleClick={updateValue}>6</Button>
          <Button handleClick={updateValue}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={updateValue}>1</Button>
          <Button handleClick={updateValue}>2</Button>
          <Button handleClick={updateValue}>3</Button>
          <Button handleClick={updateValue}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={updateValue}>0</Button>
          <Button handleClick={updateValue}>.</Button>
          <Button handleClick={updateValue}>/</Button>
        </div>
        <div className="row">
          <ClearButton handleClick={ () => setInput('') }>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
