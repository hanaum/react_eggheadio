import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    // allow constructor to know what 'this' is.
    super();
    this.state = { 
      red: 0
    };
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    })
  }
  render() {
    // updating state.txt of the parent component
    return (
        <div>
          <NumInput 
            ref="red" 
            min={0}
            max={255}
            step={1}
            val={+this.state.red}
            label="Red"
            update={this.update} />
          {this.state.red}
        </div>
      );
  }
}

class NumInput extends React.Component {
  render() {
    let label = this.props.label !== '' ?
      <label>{this.props.label} - {this.props.val}</label> : '';
    return (
        <div>
          <input ref="inp" type="range" 
            type={this.props.type}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            defaultValue={this.props.val}
            onChange={this.props.update} />
            {label}
        </div>
      ); 
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.srting,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])

}


NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'

}
// a stateless component
// const Widget = (props) => {
//     return (
//         <div>
//           <input type="text" 
//             onChange={props.update} />
//           <h1>{props.txt}</h1>
//         </div>
//       );
// }

export default App