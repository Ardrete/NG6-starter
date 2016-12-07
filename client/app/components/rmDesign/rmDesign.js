import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmDesignComponent from './rmDesign.component';

let rmDesignModule = angular.module('rmDesign', [
  uiRouter
])

.component('rmDesign', rmDesignComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('design', {
        url: '/design',
        template: '<rm-design layout-fill></rm-design>'
      });
  })
  .name;

export default rmDesignModule;
