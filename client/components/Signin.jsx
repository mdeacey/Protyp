Signin = React.createClass({
  refs: {
    email: '',
    password: '',
  },

  onSubmit: function(event){
    event.preventDefault();

    var email = $(React.findDOMNode(this.refs.email)).val();
    var password = $(React.findDOMNode(this.refs.password)).val();

    Meteor.loginWithPassword(
      email,
      password,
      function(error) {
        if (error) {
          return alert(error.reason);
        }

        FlowRouter.go('/');
      }
    );
  },

  render() {
    return (
      <div className="col-sm-4 col-sm-offset-4" style={{marginTop: 50, background: '#ddd', borderRadius: 4, padding: 20}}>
        <h4 className="text-center">Sign In</h4>
        <form onSubmit={this.onSubmit.bind(this)} className="form wall">
          <div className="from-group">
            <label>Email</label>
            <input type="email" ref="email" className="form-control" />
          </div>
          <div className="from-group">
            <label>Password</label>
            <input type="password" ref="password" className="form-control" />
          </div>
          <div className="from-group text-center">
            <button type="submit" className="btn btn-info" style={{marginTop: 20}}>Sign in</button>
          </div>

          <a href="/signup">Not account? Register</a>
        </form>
      </div>
    );
  }
});
