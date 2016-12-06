let UserFactory = function () {
  const user = {};
  let enableNavBar = true;
  let enableNavButton = false;

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

  let setNavButton = (value) => {
    enableNavButton = value;
  };

  let hasNavButton = () => {
    return enableNavButton;
  };

  return {
    getUser,
    isSignedIn,
    hasNavBar,
    setNavBar,
    setNavButton,
    hasNavButton
  };
};

export default UserFactory;
