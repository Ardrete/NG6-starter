import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmImpressionComponent from './rmImpression.component';

let rmImpressionModule = angular.module('rmImpression', [
  uiRouter
])

.component('rmImpression', rmImpressionComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('printing', {
        url: '/printing',
        template: '<rm-impression layout-fill></rm-impression>'
      });
  })
.name;

export default rmImpressionModule;
