import template from './rmInfoSection.html';
import controller from './rmInfoSection.controller';
import './rmInfoSection.scss';

let rmInfoSectionComponent = {
  restrict: 'E',
  bindings: {},
  template,
  transclude: {
    name: 'name',
    infoContent: 'infoContent',
    infoText: 'infoText'
  },
  controller,
  controllerAs: 'vm'
};

export default rmInfoSectionComponent;
