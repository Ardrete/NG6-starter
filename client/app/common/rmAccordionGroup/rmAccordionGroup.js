import angular from 'angular';
import rmAccordionGroupDirective from './rmAccordionGroup.directive';
import rmAccordion from './rmAccordion/rmAccordion';

const rmAccordionGroupModule = angular.module('rmAccordionGroup', [
  rmAccordion
])

.directive('rmAccordionGroup', () => new rmAccordionGroupDirective())
.name;

export default rmAccordionGroupModule;
