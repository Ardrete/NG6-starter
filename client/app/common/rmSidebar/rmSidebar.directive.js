import template from './rmSidebar.html';
import controller from './rmSidebar.controller';
import './rmSidebar.scss';

class rmSidebarComponent {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.bindings = {};
    this.template = template;
    this.controller = controller;
  }

  link($scope, elem, attr, ctrl) {
    $scope.nav = (url) => {
      ctrl.component.sidebar.toggle();
      ctrl.$state.go(url);
    };
  }
}

export default rmSidebarComponent;
