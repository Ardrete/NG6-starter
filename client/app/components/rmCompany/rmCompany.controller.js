class RmCompanyController {
  /*@ngInject*/
  constructor($timeout, User) {
    this.name = 'rmCompany';
    this.$timeout = $timeout;
    this.services = {
      user: User
    };


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
      this.services.user.setNavButton(true);
    });
  }
}

export default RmCompanyController;
