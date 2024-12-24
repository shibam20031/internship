import React from 'react';
import 'D:\intern\App.scss';
import Calendar from 'bpk-component-calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Schedule</h1>
      </header>
      <main>
        <Calendar />
        <button>Continue</button>
      </main>
    </div>
  );
}

export default App;