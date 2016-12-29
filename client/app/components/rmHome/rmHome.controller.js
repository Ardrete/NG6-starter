import logo from '../../common/img/logo.png';
import years from '../../common/img/years2.png';

class RmHomeController {
  /*@ngInject*/
  constructor($element, $timeout, $scope, User, $state, $stateParams, bookSections) {
    this.name = 'rmHome';
    this.$element = $element;
    this.$timeout = $timeout;
    this.$scope = $scope;
    this.$state = $state;
    this.$stateParams = $stateParams;

    this.books = bookSections;
    this.services = {
      user: User
    };

    this.logo = logo;
    this.years = years;
    this.oneScrollOptions = {
      sectionContainer: 'section',
      beforeMove: (page) => this.$timeout(this.onBeforeMove(page))
    };

    this.slickOptions = {
      centerMode: true,
      centerPadding: '90px',
      adaptiveHeight: true,
      slidesToShow: 3,
      arrows: false,
      focusOnSelect: true
    };
  }
  $onInit() {
    this.services.user.setNavBar(false);
    this.services.user.setNavButton(false);
    this.services.user.setCloseButton(false);
  }

  $onDestroy() {
    this.$timeout(() => {
      $('.main', this.$element).destroy_onepage_scroll(this.oneScrollOptions);
      this.carousel.slick('unslick');
    });
    this.services.user.setNavBar(true);
    this.services.user.setCloseButton(false);
  }

  $postLink() {
    this.$timeout(() => {
      $('.main', this.$element).onepage_scroll(this.oneScrollOptions);
      let book;

      if (this.$stateParams.key) {
        book = this.books[this.$stateParams.key];
      }
      if (this.$stateParams['#']) {
        $('.main', this.$element).moveTo(this.$stateParams['#']);
      }

      if (book) {
        this.slickOptions.initialSlide = this.$stateParams.key;
        this.imageSelected = book;
        this.services.user.setCloseButton(true, () => this.closeBook());
        $('.main', this.$element).moveDown();
        this.$timeout(() => {
          this.showTransition = true;
        }, 500);
      }
      this.carousel = $('.-carousel', this.$element);
      this.carousel.slick(this.slickOptions);
    });
  }

  onBeforeMove(page) {
    if (page === 1) {
      this.services.user.setNavBar(false);
      this.services.user.setNavButton(false);
    } else {
      this.services.user.setNavBar(true);
      this.services.user.setNavButton(false);
    }
  }

  closeBook() {
    this.imageSelected = null;
    this.showTransition = false;
    this.services.user.setCloseButton(false);
    this.$timeout(() => {
      this.carousel = $('.-carousel', this.$element);
      this.carousel.slick(this.slickOptions);
    });
  }

  nav(url, key) {
    this.services.user.setBackButton(true, () => {
      this.services.user.setBackButton(false);
      this.$state.go('home', {
        key
      });
    });
    this.$state.go(url);
  }

  showDetail(image, $event, key) {
    const element = $($event.target).closest('.-image');

    if (element.hasClass('slick-current')) {
      this.slickOptions.initialSlide = key;
      this.imageSelected = image;
      this.services.user.setCloseButton(true, () => this.closeBook());
      this.$timeout(() => {
        this.showTransition = true;
      }, 500);
    }
  }

  slideLeft() {
    this.carousel.slick('slickPrev');
  }

  slideRight() {
    this.carousel.slick('slickNext');
  }
}

export default RmHomeController;
