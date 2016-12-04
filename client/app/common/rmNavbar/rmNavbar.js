import angular from 'angular';
import rmNavbarComponent from './rmNavbar.component';

let navbarModule = angular.module('navbar', [
])

.component('rmNavbar', rmNavbarComponent)

.name;

export default navbarModule;
