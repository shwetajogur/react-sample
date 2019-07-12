import React from 'react';
import './App.css';
import Headers from './header';
import Footer from './footer';
import Body from './body';

function App() {
  return (
    <div>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          shwe <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
      <Headers />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
