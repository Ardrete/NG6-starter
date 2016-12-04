import template from './rmHome.html';
import controller from './rmHome.controller';
import './rmHome.scss';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default homeComponent;
