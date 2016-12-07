let UserFactory = function () {
  const user = {};
  let enableNavBar = true;
  let enableNavButton = false;
  let enableCloseButton = false;
  let callbackClose;

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

  let setCloseButton = (value, callback) => {
    enableCloseButton = value;
    if (_.isFunction(callback)) {
      callbackClose = callback;
    }
  };

  let hasCloseButton = () => {
    return enableCloseButton;
  };

  return {
    getUser,
    isSignedIn,
    hasNavBar,
    setNavBar,
    setNavButton,
    hasNavButton,
    setCloseButton,
    hasCloseButton,
    onClose: () => callbackClose()
  };
};

export default UserFactory;
