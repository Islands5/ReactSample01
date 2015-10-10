var React = require('react');
var Reflux = require('reflux');
var SampleStore = require('../stores/SampleStore.jsx');

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
        <div>{strs}</div>
      );
    } else {
      return (
        <div>test2</div>
      );
    }
  }
});

module.exports = Main;
