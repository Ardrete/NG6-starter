import template from './rmAccordion.html';
import './rmAccordion.scss';

class rmAccordionDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.transclude = {
      'title': 'rmAccordionTitle',
      'content': 'rmAccordionContent'
    };
    this.replace = true;
    this.template = template;
    this.require = '^rmAccordionGroup';
    this.bindings = {};
  }

  link(scope, element, attrs, ctrl) {
    scope.accordion = {
      status: 'close', // 'open', 'close', 'disable'
      render: attrs.render
    };

    scope.vm = {
      toggle: () => {
        if (!ctrl.shouldToggle(attrs.id)) {
          return false;
        }

        if (scope.accordion.status == 'open') {
          ctrl.close();
        } else if (scope.accordion.status == 'close') {
          ctrl.open(attrs.id);
        }
      }
    }

    scope.$watch(
      () => element.attr('disabled'),
      newValue => {
        if (newValue) {
          if (scope.accordion.status === 'open') { // IF THIS IS OPEN, THEN CLOSE
            ctrl.close();
          }
          scope.accordion.status = 'disable';
        } else {
          if (scope.accordion.status === 'disable') {
            scope.accordion.status = 'close';
          }
        }
      }
    );

    ctrl.add(attrs.id, scope.accordion);
  }
}

export default rmAccordionDirective;
