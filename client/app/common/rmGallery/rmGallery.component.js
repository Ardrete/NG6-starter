import template from './rmGallery.html';
import controller from './rmGallery.controller';
import './rmGallery.scss';

const rmGalleryComponent = {
  restrict: 'E',
  bindings: {
    images: '<',
    ngShow: '<?'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default rmGalleryComponent;
