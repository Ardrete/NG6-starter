import image3 from './../../common/img/premedia/3.jpg';
import image1 from './../../common/img/premedia/1.jpg';
import image2 from './../../common/img/premedia/2.jpg';
import image4 from './../../common/img/premedia/4.jpg';
import image5 from './../../common/img/premedia/5.jpg';
import image6 from './../../common/img/premedia/6.jpg';
import image7 from './../../common/img/premedia/7.jpg';
import image8 from './../../common/img/premedia/8.jpg';
class RmPremediaController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmPremedia';
    this.services = {
      user: User
    };

    this.images = [
      image3,
      image1,
      image2,
      image4,
      image5,
      image6,
      image7,
      image8
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
