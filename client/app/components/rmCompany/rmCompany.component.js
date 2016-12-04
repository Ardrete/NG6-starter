import template from './rmCompany.html';
import controller from './rmCompany.controller';
import './rmCompany.scss';

let rmCompanyComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default rmCompanyComponent;
