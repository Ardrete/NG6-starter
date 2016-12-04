import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';

import rmNavbar from './rmNavbar/rmNavbar';
import rmListItem from './rmListitem/rmListitem';
import rmInfoSection from './rmInfoSection/rmInfoSection';
import rmSidebar from './rmSidebar/rmSidebar';
import rmHeader from './rmHeader/rmHeader';
import rmSection from './rmSection/rmSection';
import User from './user/user';

let commonModule = angular.module('app.common', [
    rmNavbar,
    rmSidebar,
    rmListItem,
    rmInfoSection,
    rmHeader,
    rmSection,
    User
  ])
  .config(($mdThemingProvider, $mdIconProvider) => {
    "ngInject";

    // http://www.google.com/design/spec/style/color.html#color-color-palette
    $mdThemingProvider.definePalette('primary', {
      '50': '#c0ddf4',
      '100': '#8cbfea',
      '200': '#62a9e3',
      '300': '#3271b1',
      '400': '#0a3d66',
      '500': '#002244', // DEFAULT
      '600': '#0a3d66', // HOVER
      '700': '#3271b1',
      '800': '#62a9e3',
      '900': '#8cbfea',
      'A100': '#82b1ff',
      'A200': '#448aff',
      'A400': '#2979ff',
      'A700': '#cd202c',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 A100',
      'contrastStrongLightColors': '500 600 700 A200 A400 A700'
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('primary');

  })
  .config(($mdInkRippleProvider) => {
    "ngInject";

    $mdInkRippleProvider.disableInkRipple();
  })
  .name;

export default commonModule;
