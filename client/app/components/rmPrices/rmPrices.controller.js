import trophy from '../../common/img/trophy.png';

class RmPricesController {
  /*@ngInject*/
  constructor($timeout, $element) {
    this.name = 'rmPrices';
    this.$element = $element;
    this.$timeout = $timeout;
    this.trophy = trophy;
    this.prices = [
      'Medalla De Oro Sappi Region Trading',
      'Mención Premio Nacional Artes Grá cas: Uilmac',
      'Premio Nacional Artes Grá ca: Uilmac',
      'Medalla De Plata Sappi Region Trading',
      'Mención Premio Nacional Artes Grá cas: Uilmac',
      'Premio Latinoamericano Theobaldo De Nigris',
      'Premio Nacional Artes Grafica: Uilmac',
      'Medalla De Plata Sappi Region Trading',
      'Mención Premio Nacional Artes Grá cas: Uilmac',
      'Premio Al Reconocimiento Pia Internacional',
      'Premio Nacional Artes Grafica: Uilmac',
      'Medalla De Oro Sappi Region Trading',
      'Elefante De Sappi 1Er Lugar Mundial',
      'Premio Al Reconocimiento Pia Internacional',
      'Certificado 2007 Nacional: Uilmac',
      'Premio Nacional Artes Gráfica: Uilmac',
      'Certificado Al Merito 2009 Pia',
      'Certificado Al Merito 2009 Pia',
      'Best Of Division Pia 2009',
      'Best Of Category Pia 2009',
      'Best In Show Pia 2009',
      'Best Of Category Pia 2010',
      'Premio Latinoamericano Theobaldo De Nigris',
      'Premio Nacional Artes Grafica: Uilmac',
      'Best Of Category Pia 2012',
      'Premio Nacional Artes Grafica: Uilmac',
      'Premio Nacional Artes Grafica: Uilmac',
      'Premio Latinoamericano Theobaldo De Nigris',
      'Premio Nacional Artes Grafica: Uilmac',
      'Medalla De Oro Sappi Region Trading',
      'Elefante De Sappi 1Er Lugar Mundial',
      'Premio Al Reconocimiento Pia Internacional',
      'Best Of Division Pia 2009',
      'Best O Category Pia 2009',
      'Best In Show Pia 2009',
      'Best Of Category Pia 2010',
      'Premio Nacional Artes Grafica: Uilmac',
      'Best Of Category Pia 2012',
      'Premio Nacional Artes Grá ca: Uilmac',
      'Premio Nacional Artes Grá ca: Uilmac'
    ];

    this.oneScrollOptions = {
      sectionContainer: 'section',
      direction: 'horizontal'
    };
  }

  $onDestroy() {
    this.$timeout(() => {
      $('.-main', this.$element).destroy_onepage_scroll(this.oneScrollOptions);
    });
  }

  $postLink() {
    this.$timeout(() => {
      $('.-main', this.$element).onepage_scroll(this.oneScrollOptions);
    });
  }
}

export default RmPricesController;
