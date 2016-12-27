import trophy from '../../common/img/trophy.png';

class RmPricesController {
  /*@ngInject*/
  constructor($timeout, $element) {
    this.name = 'rmPrices';
    this.$element = $element;
    this.$timeout = $timeout;
    this.trophy = trophy;
    this.prices = {
        
        "LIBRO DE BRONCES": [
          "MEDALLA DE ORO SAPPI REGION TRADING (2005)",
          "MENCIÓN PREMIO NACIONAL ARTES GRÁFICAS: UILMAC (2005)"
        ],
        "LIBRO DE LOS MOLES": [
        "LIBRO DE LOS MOLESPREMIO NACIONAL ARTES GRÁFICA: UILMAC (2005)"
        ],
        "LIBRO MEXICO ENCANTO Y PASIÓN": [
        "MEDALLA DE PLATA SAPPI REGION TRADING (2006)"
        ],
        "CATÁLOGO ANDREA ABIERTO VERANO 06": [
        "MENCIÓN PREMIO NACIONAL ARTES GRÁFICAS: UILMAC (2006)"
        ],
        "CATALOGO ANDREA MODA JOVEN OI 2006-2007": [
            "PREMIO LATINOAMERICANO THEOBALDO DE NIGRIS (2006)"
        ],
        "CALENDARIO KODAK 2007 DIGITAL": [
            "PREMIO NACIONAL ARTES GRÁFICA: UILMAC (2007)"
        ],
        "CALENDARIO ANDREA DE PARED 2007": [
            "MEDALLA DE PLATA SAPPI REGION TRADING (2007)",
            "MENCIÓN PREMIO NACIONAL ARTES GRÁFICAS: UILMAC (2007)",
            "PREMIO AL RECONOCIMIENTO PIA INTERNACIONAL (2007)"
        ],
        "CATÁLOGO ANDREA EDICIÓN ESPECIAL": [
            "PREMIO NACIONAL ARTES GRÁFICA: UILMAC (2007)",
            "MEDALLA DE ORO SAPPI REGION TRADING (2007)",
            "ELEFANTE DE SAPPI 1ER LUGAR MUNDIAL (2007)",
            "PREMIO AL RECONOCIMIENTO PIA INTERNACIONAL (2007)"
        ],
        "LIBRO 3 SIGLOS DE FILATELIA EN MEXICO": [
            "CERTIFICADO 2007 NACIONAL: UILMAC (2007)"
            
        ],
        'LIBRO CERAMICA "EL TAJIN"': [
            "PREMIO NACIONAL ARTES GRÁFICA: UILMAC (2008)",
            "CERTIFICADO AL MERITO PIA (2009)"
            
        ],
        "PRESSKIT ANDREA 2008": [
            "CERTIFICADO AL MERITO PIA (2009)"
        ],
        "CATÁLOGO 14 FLORES DE ANDREA": [
            "BEST OF DIVISION PIA (2009)",
            "BEST O CATEGORY PIA (2009)",
            "BEST IN SHOW PIA (2009)"
        ],
        "CATÁLOGO ARTE ANDREA":[
          "BEST OF CATEGORY PIA (2010)"  
        ],
        "ESTAMPILLA POSTAL 100 AÑOS DE LA UNAM":[
          "PREMIO LATINOAMERICANO THEOBALDO DE NIGRIS (2010)"  
        ],
        "CATÁLOGO ARTE ANDREA":[
          "PREMIO NACIONAL ARTES GRÁFICA: UILMAC (2011)"  
        ],
        "CATÁLOGO ANDREA EDICION ESPECIAL":[
          "BEST OF CATEGORY PIA (2012)"  
        ],
        "LIBRO ALAS DE LA CIUDAD":[
          "PREMIO NACIONAL ARTES GRÁFICA: UILMAC (2012)"  
        ],
        "CATÁLOGO ANDREA":[
          "PREMIO NACIONAL ARTES GRÁFICA: UILMAC (2013)"  
        ],
         "SUPER EMPRESAS EXPANSION":[
          "SUPER EMPRESAS -TOP COMPANIES (2015 - 2016)"  
        ],
         "PHOTOBOOK":[
          "PREMIO NACIONAL ARTES GRÁFICA: UILMAC (2016)"  
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
