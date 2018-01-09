import React, { Component } from 'react';
import './App.css';
import Previewer from './Components/Previewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">MarkDown Previewer</h1>
        </header>
        <Previewer />
      </div>
    );
  }
}

export default App;
