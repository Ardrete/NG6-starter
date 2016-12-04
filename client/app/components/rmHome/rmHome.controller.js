import logo from '../../common/img/logo.png';

class RmHomeController {
  /*@ngInject*/
  constructor($element, $timeout) {
    this.name = 'rmHome';
    this.$element = $element;
    this.$timeout = $timeout;
    this.logo = logo;
    this.oneScrollOptions = {
      sectionContainer: 'section',
      easing: 'cubic-bezier(0.175, 0.885, 0.420, 1.310)'
    };
  }
  $onDestroy() {
    this.$timeout(() => {
      $('.main', this.$element).destroy_onepage_scroll(this.oneScrollOptions);
    });
  }

  $postLink() {
    this.$timeout(() => {
      $('.main', this.$element).onepage_scroll(this.oneScrollOptions);
    });
  }
}

export default RmHomeController;
