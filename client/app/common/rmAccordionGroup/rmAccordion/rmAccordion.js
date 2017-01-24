import angular from 'angular';
import rmAccordionDirective from './rmAccordion.directive';

let rmAccordionModule = angular.module('rmAccordion', [])

.directive('rmAccordion', () => new rmAccordionDirective())
.name;

export default rmAccordionModule;


