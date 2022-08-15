import React from 'react';
import Markdown from 'marked-react';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <section id='secao'>
        <ControlledInput></ControlledInput>
      </section>
    </div>
  );
}

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <textarea rows="25" cols="80" id='editor' value={this.state.input} onChange={this.handleChange}></textarea>
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        {/*<div id='preview'>{this.state.input}</div>*/}
        <div id='preview'>
          <Markdown>
            {this.state.input}
          </Markdown>
        </div>
      </div>
    );
  }
};

export default App;
