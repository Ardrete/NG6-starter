import image5 from './../../common/img/diseno/5.jpg';
import image1 from './../../common/img/diseno/1.jpg';
import image2 from './../../common/img/diseno/2.jpg';
import image3 from './../../common/img/diseno/3.jpg';
import image4 from './../../common/img/diseno/4.jpg';

class RmDesignController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmDesign';
    this.services = {
      user: User
    };

    this.images = [
      image5,
      image1,
      image2,
      image3,
      image4
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
