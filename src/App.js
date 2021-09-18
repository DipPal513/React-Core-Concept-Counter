import logo from './logo.svg';
import './App.css';

function App() {

  const singer = {
    name : 'mafuz',
    age:'40'
  }
  return (
    <div className="App">
      <header className="App-header">
      <h3>hello from react</h3>
      <div className="container">
        
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div>
  );
}

export default App;
