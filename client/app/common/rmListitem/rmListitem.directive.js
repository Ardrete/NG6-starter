import template from './rmListitem.html';
import controller from './rmListitem.controller';
import './rmListitem.scss';


class rmListitemDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.transclude = true;
    this.template = template;
    this.controller = controller;
    this.scope = {
      icon: '@?rmListitemIcon'
    };
  }

}

export default rmListitemDirective;
