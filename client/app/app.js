import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import './vendors/onepage-scroll/jquery.onepage-scroll';
import './vendors/onepage-scroll/jquery.onepage-scroll.css';
import 'slick-carousel';

import 'normalize.css';
import './app.scss';

angular.module('app', [
    uiRouter,
    ngMaterial,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
