import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngTouch from 'angular-touch';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import './vendors/onepage-scroll/jquery.onepage-scroll';
import './vendors/onepage-scroll/jquery.onepage-scroll.css';
import 'slick-carousel';
import videoJs from 'video.js';
import 'video.js/dist/video-js.min.css';
import vjsVideo from 'vjs-video';

import 'normalize.css';
import './app.scss';
import './app.styl';

angular.module('app', [
    uiRouter,
    'vjs.video',
    ngMaterial,
    ngTouch,
    Common,
    Components
  ])
  .config(($locationProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    // $locationProvider.html5Mode(true).hashPrefix('!');

    $urlRouterProvider.otherwise('/home');
  })

  .component('app', AppComponent);
