import angular from 'angular';
import rmHome from './rmHome/rmHome';
import rmCompany from './rmCompany/rmCompany';
import rmCapacity from './rmCapacity/rmCapacity';
import rmContact from './rmContact/rmContact';
import rmFaq from './rmFaqs/rmFaqs';
import rmInfrastructure from './rmInfrastructure/rmInfrastructure';
import rmProjects from './rmProjects/rmProjects';
import rmHumanFactor from './rmHumanFactor/rmHumanFactor';
import rmPrices from './rmPrices/rmPrices';

let componentModule = angular.module('app.components', [
  rmHome,
  rmCompany,
  rmContact,
  rmCapacity,
  rmInfrastructure,
  rmProjects,
  rmHumanFactor,
  rmPrices,
  rmFaq
])

.name;

export default componentModule;
