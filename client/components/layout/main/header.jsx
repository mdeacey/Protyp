Header = React.createClass({
  toggleMenu () {
    console.log(Menu.toggleMenu)
  },
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand" href="#">Protyp</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-left">
              <li><a href="#" onClick={this.toggleMenu}>Library</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Home</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});
