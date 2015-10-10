var React = require('react');
var request = require('superagent');

var User = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
  },
  render() {
    return (
      <div>{this.props.id}:{this.props.name}</div>
    );
  }
});

var Users = React.createClass({
  getInitialState() {
    return {
      users: [ {id: 1, name: "foo"}, {id: 2, name: "bar"} ]
    }
  },
  componentDidMount() {
    request.get('http://localhost:8000/users.json')
    .set('Accept', 'application/json')
    .end(function(err, res){
      var users = this.state.users.concat(JSON.parse(res.text));
      this.setState({users: users});
    }.bind(this));
  },
  render() {
    var users = this.state.users.map(function(user){
      return <User id={user.id} name={user.name} key={user.id} />
    });
    return (
      <div>
        <p>ユーザー一覧</p>
        {users}
      </div>
    );
  }
});

React.render(<Users />, document.getElementById('content'));
