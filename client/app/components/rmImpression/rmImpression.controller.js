import image4 from './../../common/img/imprenta/4.jpg';
import image1 from './../../common/img/imprenta/1.jpg';
import image2 from './../../common/img/imprenta/2.jpg';
import image3 from './../../common/img/imprenta/3.jpg';
import image5 from './../../common/img/imprenta/5.jpg';
import image6 from './../../common/img/imprenta/6.jpg';
import image7 from './../../common/img/imprenta/7.jpg';
import image8 from './../../common/img/imprenta/8.jpg';
import image9 from './../../common/img/imprenta/9.jpg';
import image10 from './../../common/img/imprenta/10.jpg';
import image11 from './../../common/img/imprenta/11.jpg';
import image12 from './../../common/img/imprenta/12.jpg';
import image13 from './../../common/img/imprenta/13.jpg';
import image14 from './../../common/img/imprenta/14.jpg';
import image15 from './../../common/img/imprenta/15.jpg';
import image16 from './../../common/img/imprenta/16.jpg';
import image17 from './../../common/img/imprenta/17.jpg';
import image19 from './../../common/img/imprenta/19.jpg';
import image22 from './../../common/img/imprenta/22.jpg';
import image23 from './../../common/img/imprenta/23.jpg';
import image24 from './../../common/img/imprenta/24.jpg';

class RmImpressionController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmImpression';

    this.services = {
      user: User
    };

    this.images = [
      image4,
      image1,
      image2,
      image3,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image19,
      image22,
      image23,
      image24
    ];
  }

  $onInit() {
    this.galleryShowed = false;
    this.services.user.setCloseButton(false);
  }

  closeGallery() {
    this.galleryShowed = false;
    this.services.user.setCloseButton(false);
  }

  showGallery() {
    this.galleryShowed = true;
    this.services.user.setCloseButton(true, () => this.closeGallery());
  }
}

export default RmImpressionController;
