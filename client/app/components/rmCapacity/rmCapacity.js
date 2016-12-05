import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmCapacityComponent from './rmCapacity.component';

let rmCapacityModule = angular.module('rmCapacity', [
  uiRouter
])

.component('rmCapacity', rmCapacityComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('capacity', {
        url: '/capacity',
        template: '<rm-capacity layout-fill></rm-capacity>'
      });
  })
  .name;

export default rmCapacityModule;
