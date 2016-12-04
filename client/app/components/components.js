import angular from 'angular';
import rmHome from './rmHome/rmHome';
import About from './about/about';

let componentModule = angular.module('app.components', [
  rmHome,
  About
])

.name;

export default componentModule;
