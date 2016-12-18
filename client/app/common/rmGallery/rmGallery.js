import angular from 'angular';
import rmGalleryComponent from './rmGallery.component';

let rmGalleryModule = angular.module('rmGallery', [
])

.component('rmGallery', rmGalleryComponent)
.name;

export default rmGalleryModule;
