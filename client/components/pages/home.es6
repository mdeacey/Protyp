Home = React.createClass({
  render() {
    if( !Meteor.user() ){
      FlowRouter.go('/signin');
    }

    return (
      <div>
        <Header />
        <MainLayout />
      </div>
    );
  }
});

this.Home = Home
