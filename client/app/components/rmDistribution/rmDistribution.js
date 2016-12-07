import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmDistributionComponent from './rmDistribution.component';

let rmDistributionModule = angular.module('rmDistribution', [
  uiRouter
])

.component('rmDistribution', rmDistributionComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('distribution', {
        url: '/distribution',
        template: '<rm-distribution layout-fill></rm-distribution>'
      });
  })
.name;

export default rmDistributionModule;
