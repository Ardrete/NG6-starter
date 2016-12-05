import angular from 'angular';
import rmInfoSectionDirective from './rmInfoSection.directive';

let rmInfoSectionModule = angular.module('rmInfoSection', [
])

.directive('rmInfoSection', () => new rmInfoSectionDirective())

.name;

export default rmInfoSectionModule;
