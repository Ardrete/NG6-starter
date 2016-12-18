class RmNavbarController {
  /*@ngInject*/
  constructor(rmSidebar, User, $timeout, $window) {
    this.name = 'rmNavbar';
    this.$timeout = $timeout;
    this.$window = $window;
    this.component = {
      sidebar: rmSidebar
    };

    this.services = {
      user: User
    };
  }

  back() {
    this.services.user.onBack();
  }

  moveDown() {
    const scroller = $('.onepage-wrapper');

    if (!_.isEmpty(scroller)) {
      scroller.moveDown();
    }
  }

  toggle() {
    this.component.sidebar.toggle();
  }
}

export default RmNavbarController;
