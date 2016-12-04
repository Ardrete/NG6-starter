let rmSidenavService = function ($mdSidenav) {
  "ngInject";
  const id = 'sidebar';

  const toggle = () => {
    return $mdSidenav(id).toggle();
  };

  return {
    toggle
  };
};

export default rmSidenavService;
