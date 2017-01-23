import image2 from './../../common/img/fotografia/2.jpg';
import image1 from './../../common/img/fotografia/1.jpg';
import image3 from './../../common/img/fotografia/3.jpg';
import image4 from './../../common/img/fotografia/4.jpg';
import image5 from './../../common/img/fotografia/5.jpg';
import image6 from './../../common/img/fotografia/6.jpg';
import image7 from './../../common/img/fotografia/7.jpg';
import image8 from './../../common/img/fotografia/8.jpg';
import image9 from './../../common/img/fotografia/9.jpg';
import image10 from './../../common/img/fotografia/10.jpg';
import image11 from './../../common/img/fotografia/11.jpg';
import image12 from './../../common/img/fotografia/12.jpg';
import image13 from './../../common/img/fotografia/13.jpg';
import image14 from './../../common/img/fotografia/14.jpg';
import image15 from './../../common/img/fotografia/15.jpg';
import image16 from './../../common/img/fotografia/16.jpg';
class RmPhotographyController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmPhotography';
    this.services = {
      user: User
    };

    this.images = [
      image2,
      image1,
      image3,
      image4,
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
      image16
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

export default RmPhotographyController;
