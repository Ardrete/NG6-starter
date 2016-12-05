import template from './rmPrices.html';
import controller from './rmPrices.controller';
import './rmPrices.scss';

let rmPricesComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default rmPricesComponent;
