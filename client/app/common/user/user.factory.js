let UserFactory = function () {
  const user = {};
  let enableNavBar = true;

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  let hasNavBar = () => {
    return enableNavBar;
  };

  let setNavBar = (value) => {
    enableNavBar = value;
  };

  return {
    getUser,
    isSignedIn,
    hasNavBar,
    setNavBar
  };
};

export default UserFactory;
