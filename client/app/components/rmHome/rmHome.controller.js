import logo from '../../common/img/logo.png';

class RmHomeController {
  /*@ngInject*/
  constructor($element) {
    this.name = 'rmHome';
    this.$element = $element;
    this.logo = logo;
  }

  $postLink() {
    $('.main', this.$element).onepage_scroll({
	      sectionContainer: 'section',
	      easing: 'cubic-bezier(0.175, 0.885, 0.420, 1.310)'
	    });
  }
}

export default RmHomeController;
