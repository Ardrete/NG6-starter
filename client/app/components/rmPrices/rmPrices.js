import angular from 'angular';
import rmPricesComponent from './rmPrices.component';

let rmPricesModule = angular.module('rmPrices', [
])

.component('rmPrices', rmPricesComponent)
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('prices', {
        url: '/prices',
        template: '<rm-prices layout-fill></rm-prices>'
      });
  })
  .name;

export default rmPricesModule;
