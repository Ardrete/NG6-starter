import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './rmHeader.component';

let heroModule = angular.module('rmHeader', [
  uiRouter
])

.component('rmHeader', heroComponent)

.name;

export default heroModule;
