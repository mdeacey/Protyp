FlowRouter.route("/", {
  name: "Home",
  action(params) {
    if (!Meteor.user()) {
      return FlowRouter.go('/signin');
    }
    ReactLayout.render(Home);
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
    ReactLayout.render(Signin);
  }
});

FlowRouter.route("/logout", {
  name: "Logout",
  action(params) {
    Meteor.logout();
    return FlowRouter.go('/signin');
  }
});
