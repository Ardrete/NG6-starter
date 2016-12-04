import template from './rmSection.html';
import controller from './rmSection.controller';
import './rmSection.scss';

class rmSectionDirective {
  /*@ngInject*/
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.transclude = true,
    this.template = template;
    this.controller = controller;
    this.controllerAs = 'vm';
    this.replace = true;
  }
}

export default rmSectionDirective;
