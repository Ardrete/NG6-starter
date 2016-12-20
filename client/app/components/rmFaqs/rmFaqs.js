import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rmFaqsComponent from './rmFaqs.component';

let rmFaqsModule = angular.module('rmFaqs', [
  uiRouter
])

.component('rmFaqs', rmFaqsComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('faq', {
        url: '/faq',
        template: '<rm-faqs layout-fill></rm-faqs>'
      });
  })
  .name;

export default rmFaqsModule;
