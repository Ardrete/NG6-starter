import template from './rmInfoSection.html';
import controller from './rmInfoSection.controller';
import './rmInfoSection.scss';

class rmInfoSectionDirective {
  /*@ngInject*/
  constructor(){
    this.restrict= 'E';
    this.scope= {};
    this.template= template;
    this.replace = true;
    this.transclude= {
      name: 'name',
      infoContent: 'infoContent',
      infoText: '?infoText'
    };
    this.controller= controller;
    this.controllerAs= 'vm';
  }
}

export default rmInfoSectionDirective;
