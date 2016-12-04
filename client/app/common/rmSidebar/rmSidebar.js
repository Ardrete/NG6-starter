import angular from 'angular';
import rmSidebarDirective from './rmSidebar.directive';
import rmSidenavService from './rmSidebar.service';

let rmSidebarModule = angular.module('rmSidebar', [
])

.factory('rmSidebar', rmSidenavService)
.directive('rmSidebar', () => new rmSidebarDirective())

.name;

export default rmSidebarModule;
