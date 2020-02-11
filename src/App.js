import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{
      height: 800,
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',

    }}>
      {/* <header className="App-header">
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
      </header> */}
      <div style={{ backgroundColor: 'red', flex: 0.2 }}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div style={{ backgroundColor: 'green', flex: 10 }}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    </div>
  );
}

export default App;
