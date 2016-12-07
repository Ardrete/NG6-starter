import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmPremediaComponent from './rmPremedia.component';

let rmPremediaModule = angular.module('rmPremedia', [
  uiRouter
])

.component('rmPremedia', rmPremediaComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('premedia', {
        url: '/premedia',
        template: '<rm-premedia layout-fill></rm-premedia>'
      });
  })
.name;

export default rmPremediaModule;
