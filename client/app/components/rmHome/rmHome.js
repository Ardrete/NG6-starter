import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './rmHome.component';
import bookSections from './bookSections';

const homeModule = angular.module('rmHome', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/home?key',
      component: 'rmHome'
    });
})

.component('rmHome', homeComponent)
.constant('bookSections', bookSections)

.name;

export default homeModule;
