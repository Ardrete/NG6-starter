import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmInfoSectionComponent from './rmInfoSection.component';

let rmInfoSectionModule = angular.module('rmInfoSection', [
  uiRouter
])

.component('rmInfoSection', rmInfoSectionComponent)

.name;

export default rmInfoSectionModule;
