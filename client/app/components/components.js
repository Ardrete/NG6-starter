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
import rmDistribution from './rmDistribution/rmDistribution';
import rmDesign from './rmDesign/rmDesign';
import rmPhotography from './rmPhotography/rmPhotography';
import rmImpression from './rmImpression/rmImpression';
import rmPacket from './rmPacket/rmPacket';
import rmVideo from './rmVideo/rmVideo';
import rmPremedia from './rmPremedia/rmPremedia';
import rmEditionCare from './rmEditionCare/rmEditionCare';

let componentModule = angular.module('app.components', [
    rmHome,
    rmCompany,
    rmContact,
    rmCapacity,
    rmInfrastructure,
    rmProjects,
    rmHumanFactor,
    rmPrices,
    rmFaq,
    rmDistribution,
    rmDesign,
    rmPhotography,
    rmImpression,
    rmPacket,
    rmVideo,
    rmPremedia,
    rmEditionCare
  ])
  .run(($transitions, User, $location, $state) => {
    'ngInject';

    $transitions.onStart({},
      (trans) => {
        const scroller = $('.onepage-wrapper');

        if (!_.isEmpty(scroller)) {
          User.setNavButton(false);
        }
        User.setCloseButton(false);
      });
    $transitions.onStart({
      to: (state) => state.name !== 'home'
    }, (trans) => {
      const key = 'backTo';
      const bookKey = parseInt(window.sessionStorage.getItem(key));

      if (bookKey >= 0 && !User.hasBackButton()) {
        User.setBackButton(true, () => {
          window.sessionStorage.removeItem(key);
          User.setBackButton(false);
          $state.go('home', {
            key: bookKey
          });
        });
      }
    })

    $transitions.onSuccess({}, ($transitions) => {});
  })

  .name;

export default componentModule;
