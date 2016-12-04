import angular from 'angular';
import rmSectionDirective from './rmSection.directive';

let rmSectionModule = angular.module('rmSection', [])

.directive('rmSection', () => new rmSectionDirective())
.name;

export default rmSectionModule;
