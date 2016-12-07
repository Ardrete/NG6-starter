import logo from '../../common/img/logo.png';
import years from '../../common/img/years2.png';

import book1 from '../../common/img/book1.jpg';
import bookOpen1 from '../../common/img/book-open1.jpg';
import book2 from '../../common/img/book2.jpg';
import book3 from '../../common/img/book3.jpg';
import book4 from '../../common/img/book4.jpg';
import book5 from '../../common/img/book5.jpg';
import book6 from '../../common/img/book6.jpg';
import book7 from '../../common/img/book7.jpg';
import book8 from '../../common/img/book8.jpg';

class RmHomeController {
  /*@ngInject*/
  constructor($element, $timeout, $scope, User, $state) {
    this.name = 'rmHome';
    this.$element = $element;
    this.$timeout = $timeout;
    this.$scope = $scope;
    this.$state = $state;

    this.books = [{
      image: book1,
      name: 'Libro Alas de la Ciudad',
      imageOpen: bookOpen1,
      sections: [{
        name: 'Distribucion',
        link: 'distribucion'
      }, {
        name: 'Diseño',
        link: 'disenio'
      }, {
        name: 'Fotografia',
        link: 'fotografia'
      }, {
        name: 'Impresion',
        link: 'impresion'
      }, {
        name: 'Empaque',
        link: 'empaque'
      }, {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Premios',
        link: 'premios'
      }, {
        name: 'Cuidado edicion',
        link: 'cuidado'
      }]

    }, {
      image: book2,
      name: 'Libro Retrotabula',
      imageOpen: bookOpen1,
      sections: [{
        name: 'Distribucion',
        link: 'distribucion'
      }, {
        name: 'Diseño',
        link: 'disenio'
      }, {
        name: 'Fotografia',
        link: 'fotografia'
      }, {
        name: 'Impresion',
        link: 'impresion'
      }, {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }]
    }, {
      image: book3,
      name: 'Libro México',
      imageOpen: bookOpen1,
      sections: [{
        name: 'Distribucion',
        link: 'distribucion'
      }, {
        name: 'Empaque',
        link: 'empaque'
      }, {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Premios',
        link: 'premios'
      }, {
        name: 'Cuidado edicion',
        link: 'cuidado'
      }]
    }, {
      image: book4,
      name: 'Libro Habeas Corpus',
      imageOpen: bookOpen1,
      sections: [{
        name: 'Impresion',
        link: 'impresion'
      }, {
        name: 'Empaque',
        link: 'empaque'
      }, {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Premios',
        link: 'premios'
      }, {
        name: 'Cuidado edicion',
        link: 'cuidado'
      }]
    }, {
      image: book5,
      name: 'Libro La Patria',
      imageOpen: bookOpen1,
      sections: [{
        name: 'Distribucion',
        link: 'distribucion'
      }, {
        name: 'Fotografia',
        link: 'fotografia'
      }, {
        name: 'Impresion',
        link: 'impresion'
      }, {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Premios',
        link: 'premios'
      }, {
        name: 'Cuidado edicion',
        link: 'cuidado'
      }]
    }, {
      image: book6,
      name: 'Libro 14 Flores',
      imageOpen: bookOpen1,
      sections: [{
        name: 'Distribucion',
        link: 'distribucion'
      }, {
        name: 'Empaque',
        link: 'empaque'
      }, {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Premios',
        link: 'premios'
      }, {
        name: 'Cuidado edicion',
        link: 'cuidado'
      }]
    }, {
      image: book7,
      name: 'Libro Regalos',
      imageOpen: bookOpen1,
      sections: [{
        name: 'Distribucion',
        link: 'distribucion'
      }, {
        name: 'Diseño',
        link: 'disenio'
      }, {
        name: 'Fotografia',
        link: 'fotografia'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Premios',
        link: 'premios'
      }, {
        name: 'Cuidado edicion',
        link: 'cuidado'
      }]
    }, {
      image: book8,
      name: 'Libro De los Moles',
      imageOpen: bookOpen1,
      sections: [{
        name: 'Distribucion',
        link: 'distribucion'
      }, {
        name: 'Diseño',
        link: 'disenio'
      }, {
        name: 'Fotografia',
        link: 'fotografia'
      }, {
        name: 'Impresion',
        link: 'impresion'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Premios',
        link: 'premios'
      }, {
        name: 'Cuidado edicion',
        link: 'cuidado'
      }]
    }];

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
  }

  $postLink() {
    this.$timeout(() => {
      $('.main', this.$element).onepage_scroll(this.oneScrollOptions);
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
      this.services.user.setNavButton(true);
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

  nav(url){
    this.$state.go(url);
  }

  showDetail(image, $event) {
    const element = $($event.target).closest('.-image');

    if (element.hasClass('slick-current')) {
      this.imageSelected = image;
      this.services.user.setCloseButton(true, () => this.closeBook());
      this.$timeout(() => {
        this.showTransition = true;
      }, 500);
    }
  }

  slideLeft() {
    this.carousel.slick('slickNext');
  }

  slideRight() {
    this.carousel.slick('slickPrev');
  }
}

export default RmHomeController;
