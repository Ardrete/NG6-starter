class RmNavbarController {
  /*@ngInject*/
  constructor(rmSidebar, User, $timeout) {
    this.name = 'rmNavbar';
    this.$timeout = $timeout;
    this.component = {
      sidebar: rmSidebar
    };

    this.services = {
      user: User
    };
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
