import image1 from './../../common/img/distr_1.jpg';
import image2 from './../../common/img/distr_2.jpg';
import image3 from './../../common/img/distr_3.jpg';
import image4 from './../../common/img/distr_4.jpg';
import image5 from './../../common/img/distr_5.jpg';

class RmDistributionController {
  /*@ngInject*/
  constructor(User, $timeout, $element) {
    this.name = 'rmDistribution';
    this.$timeout = $timeout;
    this.$element = $element;

    this.services = {
      user: User
    };

    this.images = [
      image1,
      image2,
      image3,
      image4,
      image5
    ];


    this.slickOptionsFor = {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      asNavFor: '.-carousel-nav',
    };

    this.slickOptionsNav = {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.-carousel-for',
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      centerPadding: '90px',
      adaptiveHeight: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 7000
    };
  }

  $onInit() {
    this.galleryShowed = false;
    this.services.user.setCloseButton(false);
  }

  $onDestroy() {
    this.carouselFor.slick('unslick');
    this.carouselNav.slick('unslick');
  }

  closeGallery() {
    this.galleryShowed = false;
    this.services.user.setCloseButton(false);
  }

  showGallery() {
    this.initCarousel();
    this.galleryShowed = true;
    this.services.user.setCloseButton(true, () => this.closeGallery());
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

export default RmDistributionController;
