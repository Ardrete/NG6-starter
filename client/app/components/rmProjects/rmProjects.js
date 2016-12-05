import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmProjectsComponent from './rmProjects.component';

let rmProjectsModule = angular.module('rmProjects', [
  uiRouter
])

.component('rmProjects', rmProjectsComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('projects', {
        url: '/projects',
        template: '<rm-projects layout-fill></rm-projects>'
      });
  })
  .name;

export default rmProjectsModule;
