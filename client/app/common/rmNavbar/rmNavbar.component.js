import template from './rmNavbar.html';
import controller from './rmNavbar.controller';
import './rmNavbar.scss';

let rmNavbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default rmNavbarComponent;
