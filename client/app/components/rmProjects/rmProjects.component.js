import template from './rmProjects.html';
import controller from './rmProjects.controller';
import './rmProjects.scss';

let rmProjectsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default rmProjectsComponent;
