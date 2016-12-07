import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmPacketComponent from './rmPacket.component';

let rmPacketModule = angular.module('rmPacket', [
  uiRouter
])

.component('rmPacket', rmPacketComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('packing', {
        url: '/packing',
        template: '<rm-packet layout-fill></rm-packet>'
      });
  })
.name;

export default rmPacketModule;
