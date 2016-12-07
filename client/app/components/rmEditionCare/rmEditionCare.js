import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmEditionCareComponent from './rmEditionCare.component';

let rmEditionCareModule = angular.module('rmEditionCare', [
  uiRouter
])

.component('rmEditionCare', rmEditionCareComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('editionCare', {
        url: '/editionCare',
        template: '<rm-edition-care layout-fill></rm-edition-care>'
      });
  })
.name;

export default rmEditionCareModule;
