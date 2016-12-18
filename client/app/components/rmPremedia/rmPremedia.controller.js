import image1 from './../../common/img/pre-1.jpg';
import image2 from './../../common/img/pre-2.jpg';
import image3 from './../../common/img/pre-3.jpg';
import image4 from './../../common/img/print-1.jpg';
import image5 from './../../common/img/print-2.jpg';
import image6 from './../../common/img/print-3.jpg';
class RmPremediaController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmPremedia';
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

export default RmPremediaController;
