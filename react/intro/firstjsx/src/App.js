import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </li>
          <li>
            Climb MT. Everest
          </li>
          <li>
            Run a Marathon
          </li>
          <li>
            Feed my dog
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
