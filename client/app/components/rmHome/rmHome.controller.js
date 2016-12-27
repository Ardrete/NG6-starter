import logo from '../../common/img/logo.png';
import years from '../../common/img/years2.png';

import book1 from '../../common/img/book1.jpg';
import book2 from '../../common/img/book2.jpg';
import book3 from '../../common/img/book3.jpg';
import book4 from '../../common/img/book4.jpg';
import book5 from '../../common/img/book5.jpg';
import book6 from '../../common/img/book6.jpg';
import book7 from '../../common/img/book7.jpg';
import book8 from '../../common/img/book8.jpg';
import bookOpen1 from '../../common/img/book-open1.jpg';
import bookOpen2 from '../../common/img/book-open2.jpg';
import bookOpen3 from '../../common/img/book-open3.jpg';
import bookOpen4 from '../../common/img/book-open4.jpg';
import bookOpen5 from '../../common/img/book-open5.jpg';
import bookOpen6 from '../../common/img/book-open6.jpg';
import bookOpen7 from '../../common/img/book-open7.jpg';
import bookOpen8 from '../../common/img/book-open8.jpg';

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
      name: 'Alas de la ciudad',
      imageOpen: bookOpen1,
      sections: [{
        name: 'Almacenamiento y distribución',
        link: 'distribution'
      }, {
        name: 'Empaque',
        link: 'packing'
      }, {
        name: 'Impresión',
        link: 'printing'
      },
        {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premios',
        link: 'prices'
      }, 
        {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Diseño',
        link: 'design'
      }, {
        name: 'Coordinación editorial',
        link: 'editionCare'
      }]
    }, {
      image: book2,
      name: 'Retrotabula',
      imageOpen: bookOpen2,
      sections: [{
        name: 'Almacenamiento y distribución',
        link: 'distribution'
      }, {
        name: 'Empaque',
        link: 'packing'
      }, {
        name: 'Impresión',
        link: 'printing'
      },
        {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premios',
        link: 'prices'
      }, 
        {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Diseño',
        link: 'design'
      }, {
        name: 'Coordinación editorial',
        link: 'editionCare'
      }]
    }, {
      image: book3,
      name: 'México Encanto y Pasión',
      imageOpen: bookOpen3,
      sections: [{
          name: 'Impresión',
          link: 'printing'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Almacenamiento y distribución',
        link: 'distribution'
      }]
    }, {
      image: book4,
      name: 'Habeas Corpus',
      imageOpen: bookOpen4,
      sections: [{
        name: 'Almacenamiento y distribución',
        link: 'distribution'
      }, {
        name: 'Empaque',
        link: 'packing'
      }, {
        name: 'Impresión',
        link: 'printing'
      },
        {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premios',
        link: 'prices'
      }, 
        {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Diseño',
        link: 'design'
      }, {
        name: 'Coordinación editorial',
        link: 'editionCare'
      }]
    }, {
      image: book5,
      name: 'La patria',
      imageOpen: bookOpen5,
      sections: [{
        name: 'Almacenamiento y distribución',
        link: 'distribution'
      }, {
        name: 'Empaque',
        link: 'packing'
      }, {
        name: 'Impresión',
        link: 'printing'
      }, {
        name: 'Premios',
        link: 'prices'
      }, 
        {
        name: 'Premedia',
        link: 'premedia'
      }]
    }, {
      image: book6,
      name: '14 flores',
      imageOpen: bookOpen6,
      sections: [{
        name: 'Almacenamiento y distribución',
        link: 'distribution'
      }, {
        name: 'Empaque',
        link: 'packing'
      }, {
        name: 'Impresión',
        link: 'printing'
      },
        {
        name: 'Video',
        link: 'video'
      }, {
        name: 'Premios',
        link: 'prices'
      }, 
        {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Premios',
        link: 'prices'
      }, {
        name: 'Fotografía',
        link: 'photography'
      }, {
        name: 'Diseño',
        link: 'design'
      }, {
        name: 'Coordinación editorial',
        link: 'editionCare'
      }]
    }, {
      image: book7,
      name: 'Regalos',
      imageOpen: bookOpen7,
      sections: [{
        name: 'Impresión',  
          link: 'printing'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Almacenamiento y distribución',
        link: 'distribution'
      }, {
        name: 'Fotografía',
        link: 'photography'
      }]
    }, {
      image: book8,
      name: 'Los moles',
      imageOpen: bookOpen8,
      sections: [{
        name: 'Almacenamiento y distribución',
        link: 'distribution'
      }, {
        name: 'Empaque',
        link: 'packing'
      }, {
        name: 'Impresión',
        link: 'printing'
      }, {
        name: 'Premedia',
        link: 'premedia'
      }, {
        name: 'Premios',
        link: 'prices'
      }, {
        name: 'Coordinación editorial',
        link: 'editionCare'
      }]
    }];

    this.services = {
      user: User
    };

    this.logo = logo;
    this.years = years;
    this.oneScrollOptions = {
      sectionContainer: 'section',
      // easing: 'cubic-bezier(0.175, 0.885, 0.420, 1.310)',
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
      const book = this.services.user.getBookOpen();

      this.services.user.setBookOpen(null);
      if (book) {
        this.slickOptions.initialSlide = book.bookKey;
        this.imageSelected = book.bookSelected;
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

  nav(url) {
    this.services.user.setBookOpen({
      bookSelected: this.imageSelected,
      bookKey: this.slickOptions.initialSlide
    });
    this.services.user.setBackButton(true, () => {
      this.services.user.setBackButton(false);
      this.$state.go('home');
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
