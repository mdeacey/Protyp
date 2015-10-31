FlowRouter.route("/", {
  name: "Home",
  action(params) {
    ReactLayout.render(Home);
    if (!Meteor.user()) {
      return FlowRouter.go('/signin');
    }
  }
});

FlowRouter.route("/signup", {
  name: "Signup",
  action(params) {
    ReactLayout.render(Signup);
  }
});

FlowRouter.route("/signin", {
  name: "Signin",
  action(params) {
    ReactLayout.render(Home);
  }
});

FlowRouter.route("/logout", {
  name: "Logout",
  action(params) {
    Meteor.logout();
    return FlowRouter.go('/signin');
  }
});
