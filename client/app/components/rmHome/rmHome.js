import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './rmHome.component';

let homeModule = angular.module('rmHome', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      component: 'rmHome'
    });
})

.component('rmHome', homeComponent)

.name;

export default homeModule;
