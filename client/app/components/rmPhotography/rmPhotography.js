import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmPhotographyComponent from './rmPhotography.component';

let rmPhotographyModule = angular.module('rmPhotography', [
  uiRouter
])

.component('rmPhotography', rmPhotographyComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('photography', {
        url: '/photography',
        template: '<rm-photography layout-fill></rm-photography>'
      });
  })
.name;

export default rmPhotographyModule;
