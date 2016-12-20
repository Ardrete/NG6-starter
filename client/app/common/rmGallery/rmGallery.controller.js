class RmGalleryController {
  /*@ngInject*/
  constructor($timeout, $element) {
    this.name = 'rmGallery';
    this.$timeout = $timeout;
    this.$element = $element;

    this.slickOptions = {
      dots: true,
      appendDots: '.dots',
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnFocus: false,
      pauseOnHover: false
    };
  }

  $onChanges(changes) {
    if (changes.ngShow && changes.ngShow.currentValue) {
      this.show();
    }
    if (changes.images && changes.images.currentValue) {
      this.imageStyle = _.map(this.images, (item) => {
        return {
          'background-image': `url(${item})`
        };
      });
    }

  }

  $postLink() {
    this.initCarousel();
  }

  $onDestroy() {
    this.carousel.slick('unslick');
  }

  show() {
    this.$timeout(() => {
      this.carousel.slick('setPosition');
    });
  }

  slideLeft() {
    this.carousel.slick('slickPrev');
  }

  slideRight() {
    this.carousel.slick('slickNext');
  }

  initCarousel() {
    this.$timeout(() => {
      if (!this.carousel) {
        this.carousel = $('.-carousel-full', this.$element);
        this.carousel.slick(this.slickOptions);
      }
    });
  }
}

export default RmGalleryController;
