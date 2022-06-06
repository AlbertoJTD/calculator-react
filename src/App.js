import './App.css';
import logo from './images/spiderman.png'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
        Spider - Calculator 🕸
      </div>
      <div className="calculator-container">
        <div className="row">
          <Button />
        </div>
        <div className="row"> </div>
        <div className="row"> </div>
        <div className="row"> </div>
        <div className="row"> </div>
      </div>
    </div>
  );
}

export default App;
