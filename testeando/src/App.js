import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editame esta pija <code>src/App.js</code> y guardalaaaaaa no seas gil.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React, es el lenguaje/motor que impulsa Facebook.
        </a>
      </header>
    </div>
  );
}

export default App;
