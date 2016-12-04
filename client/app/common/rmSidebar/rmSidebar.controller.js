class RmSidebarController {
  /*@ngInject*/
  constructor($state,
    rmSidebar) {
    this.name = 'rmSidebar';
    this.component = {
      sidebar: rmSidebar
    };
    this.$state = $state;
  }

}

export default RmSidebarController;
