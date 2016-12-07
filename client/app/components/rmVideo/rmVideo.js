import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmVideoComponent from './rmVideo.component';

let rmVideoModule = angular.module('rmVideo', [
  uiRouter
])

.component('rmVideo', rmVideoComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('video', {
        url: '/video',
        template: '<rm-video layout-fill></rm-video>'
      });
  })
.name;

export default rmVideoModule;
