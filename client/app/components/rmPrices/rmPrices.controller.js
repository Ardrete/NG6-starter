import trophy from '../../common/img/trophy.png';

class RmPricesController {
  /*@ngInject*/
  constructor($timeout, $element) {
    this.name = 'rmPrices';
    this.$element = $element;
    this.$timeout = $timeout;
    this.trophy = trophy;
    this.prices = [
      'certificado 2007 Nacional: Uilmac',
      'premio Nacional Artes Gráfica: Uilmac',
      'certificado Al Merito 2009 Pia',
      'certificado Al Merito 2009 Pia',
      'best Of Division Pia 2009',
      'best O Category Pia 2009',
      'best In Show Pia 2009',
      'best Of Category Pia 2010',
      'premio Latinoamericano Theobaldo De Nigris',
      'premio Nacional Artes Gráfica: Uilmac',
      'best Of Category Pia 2012',
      'premio Nacional Artes Gráfica: Uilmac',
      'premio Nacional Artes Gráfica: Uilmac',
      'super Empresas -Top Companies',
      'super Empresas -Top Companies',
      'premio Nacional Artes Gráfica: Uilmac',
      'premio Latinoamericano Theobaldo De Nigris',
      'premio Nacional Artes Gráfica: Uilmac',
      'medalla De Oro Sappi Region Trading',
      'elefante De Sappi 1er Lugar Mundial',
      'premio Al Reconocimiento Pia Internacional',
      'best Of Division Pia 2009',
      'best O Category Pia 2009',
      'best In Show Pia 2009',
      'best Of Category Pia 2010',
      'premio Nacional Artes Gráfica: Uilmac',
      'best Of Category Pia 2012',
      'premio Nacional Artes Gráfica: Uilmac',
      'premio Nacional Artes Gráfica: Uilmac',
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
