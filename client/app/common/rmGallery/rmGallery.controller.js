class RmGalleryController {
  /*@ngInject*/
  constructor($timeout, $element) {
    this.name = 'rmGallery';
    this.$timeout = $timeout;
    this.$element = $element;

    this.slickOptionsFor = {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      asNavFor: '.-carousel-nav'
    };

    this.slickOptionsNav = {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.-carousel-for',
      centerMode: true,
      focusOnSelect: true,
      variableHeight: true,
      variableWidth: true,
      centerPadding: '90px',
      adaptiveHeight: true,
      autoplay: false,
      dots: true,
      autoplaySpeed: 7000
    };
  }

  $onChanges(changes) {
    if (changes.ngShow && changes.ngShow.currentValue) {
      this.show();
    }
  }

  $postLink() {
    this.initCarousel();
  }

  $onDestroy() {
    this.carouselFor.slick('unslick');
    this.carouselNav.slick('unslick');
  }

  show() {
    this.$timeout(() => {
      this.carouselFor.slick('setPosition');
      this.carouselNav.slick('setPosition');
    });
  }

  slideLeft() {
    this.carouselNav.slick('slickPrev');
  }

  slideRight() {
    this.carouselNav.slick('slickNext');
  }

  initCarousel() {
    this.$timeout(() => {
      if (!this.carouselFor && !this.carouselNav) {
        this.carouselFor = $('.-carousel-for', this.$element);
        this.carouselNav = $('.-carousel-nav', this.$element);
        this.carouselFor.slick(this.slickOptionsFor);
        this.carouselNav.slick(this.slickOptionsNav);
      }
    });
  }
}

export default RmGalleryController;
