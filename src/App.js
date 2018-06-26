import React, { Component } from 'react';
import Articles from './articles'
import Input from './input'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Northcoders News</h1>
        </header>

        
          < Articles/>
         <Input/>
      </div>
    );
  }
}

export default App;
