var React = require('react');
var request = require('superagent');

var Text1 = React.createClass({
  getInitialState() {
    return {
      textValue: "initial value"
    };
  },
  changeText(e) {
    this.setState({textValue: e.target.value});
  },
  render() {
    return (
      <div>
        <p>{this.state.textValue}</p>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
      </div>
    );
  }
});

var Text2 = React.createClass({
  getInitialState() {
    return {
      textValue: "initial value"
    };
  },
  changeText(e) {
    this.setState({ textValue: this.refs.inputText.getDOMNode().value });
  },
  render() {
    return (
      <div>
        <p>{this.state.textValue}</p>
        <input type="text" ref="inputText" defaultValue="initial value" />
        <button onClick={this.changeText}>change</button>
      </div>
    );
  }
});

React.render(<Text2 />, document.getElementById('content'));
