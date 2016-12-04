class RmNavbarController {
  /*@ngInject*/
  constructor(rmSidebar) {
    this.name = 'rmNavbar';
    this.component = {
      sidebar: rmSidebar
    };
  }

  toggle() {
    this.component.sidebar.toggle();
  }
}

export default RmNavbarController;
