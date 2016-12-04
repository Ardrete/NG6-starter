import angular from 'angular';
import rmHome from './rmHome/rmHome';
import rmCompany from './rmCompany/rmCompany';

let componentModule = angular.module('app.components', [
  rmHome,
  rmCompany
])

.name;

export default componentModule;
