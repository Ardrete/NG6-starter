import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmHumanFactorComponent from './rmHumanFactor.component';

let rmHumanFactorModule = angular.module('rmHumanFactor', [
  uiRouter
])

.component('rmHumanFactor', rmHumanFactorComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('human-factor', {
        url: '/human-factor',
        template: '<rm-human-factor layout-fill></rm-human-factor>'
      });
  })
  .name;

export default rmHumanFactorModule;
