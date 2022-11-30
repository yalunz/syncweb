import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sync App
        </p>
        <a
          className="App-link"
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Page
        </a>
      </header>
    </div>
  );
}

export default App;
