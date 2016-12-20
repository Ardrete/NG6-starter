import trophy from '../../common/img/trophy.png';

class RmPricesController {
  /*@ngInject*/
  constructor($timeout, $element) {
    this.name = 'rmPrices';
    this.$element = $element;
    this.$timeout = $timeout;
    this.trophy = trophy;
    this.prices = {
      "Catalogo Andrea Moda Joven OI 2006-2007": [
        "Premio Lationamericano Theobaldo de Nigris",
        "Premio Nacional Artes Graficas: UILMAC"
      ],
      "Catalogo Andrea Moda Joven OI 2006-2008": [
        "Premio Lationamericano Theobaldo de Nigris",
        "Premio Nacional Artes Graficas: UILMAC"
      ],
      "Catalogo Andrea Moda Joven OI 2006-2009": [
        "Premio Lationamericano Theobaldo de Nigris",
        "Premio Nacional Artes Graficas: UILMAC"
      ],
      "Catalogo Andrea Moda Joven OI 2006-20010": [
        "Premio Lationamericano Theobaldo de Nigris",
        "Premio Nacional Artes Graficas: UILMAC"
      ]
    };

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
