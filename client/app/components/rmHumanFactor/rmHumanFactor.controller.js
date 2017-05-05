import image16 from './../../common/img/factor_humano/16.jpg';
import image2 from './../../common/img/factor_humano/2.jpg';
import image3 from './../../common/img/factor_humano/3.jpg';
import image4 from './../../common/img/factor_humano/4.jpg';
import image5 from './../../common/img/factor_humano/5.jpg';
import image6 from './../../common/img/factor_humano/6.jpg';
import image7 from './../../common/img/factor_humano/7.jpg';
import image8 from './../../common/img/factor_humano/8.jpg';
import image9 from './../../common/img/factor_humano/9.jpg';
import image10 from './../../common/img/factor_humano/10.jpg';
import image11 from './../../common/img/factor_humano/11.jpg';
import image13 from './../../common/img/factor_humano/13.jpg';
import image14 from './../../common/img/factor_humano/14.jpg';
import image15 from './../../common/img/factor_humano/15.jpg';
import image17 from './../../common/img/factor_humano/17.jpg';
import image19 from './../../common/img/factor_humano/19.jpg';
import image20 from './../../common/img/factor_humano/20.jpg';

class RmHumanFactorController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmHumanFactor';
    this.services = {
      user: User
    };

    this.images = [
      image16,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image13,
      image14,
      image15,
      image17,
      image19,
      image20
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

export default RmHumanFactorController;
