import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmCompanyComponent from './rmCompany.component';

let rmCompanyModule = angular.module('rmCompany', [
  uiRouter
])

.component('rmCompany', rmCompanyComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('company', {
        url: '/company',
        // component: 'rmCompany'
        template: '<rm-company layout-fill></rm-company>'
      });
  })
  .name;

export default rmCompanyModule;
