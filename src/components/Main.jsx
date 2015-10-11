var React = require('react');
var Reflux = require('reflux');
var SampleStore = require('../stores/SampleStore.jsx');
var SampleActions = require('../actions/SampleActions.jsx');

var Main = React.createClass({
  mixins: [Reflux.connect(SampleStore, 'samplestore')],
  render: function() {
    if (this.state.samplestore) {
      var strs = this.state.samplestore.map(function(str, index) {
        return (
          <div key={index}>{str}</div>
        );
      });
      return (
        <div>
          {strs}
          <button onClick={SampleActions.getSomething} >reload</button>
        </div>
      );
    } else {
      return (
        <div>test2</div>
      );
    }
  }
});

module.exports = Main;
