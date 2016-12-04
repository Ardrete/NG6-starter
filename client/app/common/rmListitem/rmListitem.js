import angular from 'angular';
import rmListitemDirective from './rmListitem.directive';

let rmListitemModule = angular.module('rmListitem', [])

.directive('rmListitem', () => new rmListitemDirective())
.name;

export default rmListitemModule;
