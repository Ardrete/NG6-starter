import template from './rmDesign.html';
import controller from './rmDesign.controller';
import './rmDesign.scss';

let rmDesignComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default rmDesignComponent;
