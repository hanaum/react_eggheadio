import React from 'react';
class App extends React.Component {
  constructor() {
    // allow constructor to know what 'this' is.
    super();
    this.state = { 
      txt: 'this is the state text',
      cat: 0
    };
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      txt: e.target.value
    })
  }
  render() {
    // updating state.txt of the parent component
    return (
        <div>
          <Widget txt={this.state.txt} update={this.update} />
          <Widget txt={this.state.txt} update={this.update} />
          <Widget txt={this.state.txt} update={this.update} />
        </div>
      );
  }
}

// a stateless component
const Widget = (props) => {
    return (
        <div>
          <input type="text" 
            onChange={props.update} />
          <h1>{props.txt}</h1>
        </div>
      );
}

export default App