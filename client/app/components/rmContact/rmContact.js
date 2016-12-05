import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmContactComponent from './rmContact.component';

let rmContactModule = angular.module('rmContact', [
  uiRouter
])

.component('rmContact', rmContactComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('contact', {
        url: '/contact',
        template: '<rm-contact layout-fill></rm-contact>'
      });
  })
  .name;

export default rmContactModule;
