import template from './rmAccordionGroup.html';
import controller from './rmAccordionGroup.controller';
import './rmAccordionGroup.scss';

// TODO: IF close accordion, remove dom
class rmAccordionGroupDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.transclude = true;
    this.template = template;
    this.scope = {
      selected: '=',
      closed: '=?',
      onChange: '&?'
    };
    this.controller = controller;
    this.controllerAs = 'vm';
  }

  link(scope, element, attrs, ctrl) {
    scope.$watch(
      'selected',
      newValue => {
        ctrl.open(newValue);
      }
    );

    scope.$watch(
      'closed',
      newValue => {
        !newValue ? ctrl.open(scope.selected) : ctrl.close();
      }
    );
  }

};

export default rmAccordionGroupDirective;
