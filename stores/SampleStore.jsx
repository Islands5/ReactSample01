var Reflux = require('reflux');
var request = require('superagent');
var SampleActions = require('../actions/SampleActions.jsx');

var SampleStore = Reflux.createStore({
  listenables: [SampleActions],
  somethingList: ['hello0'],
  srcUrl: 'http://localhost:8000/users.json',
  init: function() {
    this.getSomething();
  },
  getSomething: function() {
    request.get(this.srcUrl)
    .set('Accept', 'application/json')
    .end(function(err, res){
      var value = JSON.parse(res.text);
      this.trigger(this.somethingList.concat(value));
    }.bind(this));
  }
});

module.exports = SampleStore;
