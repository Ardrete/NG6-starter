import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmInfrastructureComponent from './rmInfrastructure.component';

let rmInfrastructureModule = angular.module('rmInfrastructure', [
  uiRouter
])

.component('rmInfrastructure', rmInfrastructureComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('infrastructure', {
        url: '/infrastructure',
        template: '<rm-infrastructure layout-fill></rm-infrastructure>'
      });
  })

.name;

export default rmInfrastructureModule;
