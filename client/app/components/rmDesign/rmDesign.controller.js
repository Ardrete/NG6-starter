import image1 from './../../common/img/desig_1.jpg';
import image2 from './../../common/img/desig_2.jpg';
import image3 from './../../common/img/desig_3.jpg';
import image4 from './../../common/img/desig_4.jpg';
import image5 from './../../common/img/desig_5.jpg';
import image6 from './../../common/img/desig_6.jpg';

class RmDesignController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmDesign';
    this.services = {
      user: User
    };

    this.images = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6
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

export default RmDesignController;
