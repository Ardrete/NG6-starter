const UserFactory = function () {
  const user = {};
  let enableNavBar = true;
  let enableNavButton = false;
  let enableCloseButton = false;
  let callbackClose;
  let enableBackButton = false;
  let callbackBack;


  const getUser = () => {
    return user;
  };

  const isSignedIn = () => {
    return user.isSignedIn;
  };

  const hasNavBar = () => {
    return enableNavBar;
  };

  const setNavBar = (value) => {
    enableNavBar = value;
  };

  const setNavButton = (value) => {
    enableNavButton = value;
  };

  const hasNavButton = () => {
    return enableNavButton;
  };

  const setCloseButton = (value, callback) => {
    enableCloseButton = value;
    if (_.isFunction(callback)) {
      callbackClose = callback;
    }
    if (!value) {
      callbackClose = _.noop();
    }
  };

  const hasCloseButton = () => {
    return enableCloseButton;
  };

  const setBackButton = (value, callback) => {
    enableBackButton = value;
    if (_.isFunction(callback)) {
      callbackBack = callback;
    }
    if (!value) {
      callbackBack = _.noop();
    }
  };

  const hasBackButton = () => {
    return enableBackButton;
  };


  const hasBookOpen = () => Boolean(bookOpen);

  return {
    getUser,
    isSignedIn,
    hasNavBar,
    setNavBar,
    setNavButton,
    hasNavButton,
    setCloseButton,
    hasCloseButton,
    onClose: () => {
      if (callbackClose) {
        callbackClose();
      }
    },
    onBack: () => {
      if (callbackBack) {
        callbackBack();
      }
    },
    hasBookOpen,
    hasBackButton,
    setBackButton
  };
};

export default UserFactory;
