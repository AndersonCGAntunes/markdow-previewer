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

let backtick = "`";

let total = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, ${backtick}<div></div>${backtick}, between 2 backticks. 

${backtick}${backtick}${backtick}
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
${backtick}${backtick}${backtick}

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: total
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
