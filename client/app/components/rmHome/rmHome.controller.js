import logo from '../../common/img/logo.png';
import years from '../../common/img/years2.png';

class RmHomeController {
  /*@ngInject*/
  constructor($element, $timeout, $scope, User) {
    this.name = 'rmHome';
    this.$element = $element;
    this.$timeout = $timeout;
    this.$scope = $scope;

    this.services = {
      user: User
    };

    this.logo = logo;
    this.years = years;
    this.oneScrollOptions = {
      sectionContainer: 'section',
      easing: 'cubic-bezier(0.175, 0.885, 0.420, 1.310)',
      beforeMove: (page) => this.$timeout(this.onBeforeMove(page))
    };
  }
  $onInit() {
    this.services.user.setNavBar(false);
    this.services.user.setNavButton(false);
  }

  $onDestroy() {
    this.$timeout(() => {
      $('.main', this.$element).destroy_onepage_scroll(this.oneScrollOptions);
    });
    this.services.user.setNavBar(true);
  }

  $postLink() {
    this.$timeout(() => {
      $('.main', this.$element).onepage_scroll(this.oneScrollOptions);
    });
  }

  onBeforeMove(page) {
    if (page === 1) {
      this.services.user.setNavBar(false);
      this.services.user.setNavButton(false);
    } else {
      this.services.user.setNavBar(true);
      this.services.user.setNavButton(true);
    }
  }
}

export default RmHomeController;
