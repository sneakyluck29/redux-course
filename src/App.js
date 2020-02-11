import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React with Redux</h2>
        <div className="Todo-App">
          <form>
            <input type="tyext" />
          </form>
          <div className="Todo-List">
            <ul>
              <li>
                <input type="checkbox" /> Create Static UI
              </li>
              <li>
                <input type="checkbox" /> Create Initial State
              </li>
              <li>
                <input type="checkbox" /> Usde State to Render UI
              </li>
            </ul>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
