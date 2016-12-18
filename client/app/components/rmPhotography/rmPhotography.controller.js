import image1 from './../../common/img/photo-1.jpg';
import image2 from './../../common/img/photo-2.jpg';
import image3 from './../../common/img/photo-3.jpg';
import image4 from './../../common/img/photo-4.jpg';
import image5 from './../../common/img/photo-5.jpg';
import image6 from './../../common/img/photo-6.jpg';
import image7 from './../../common/img/photo-7.jpg';
import image8 from './../../common/img/photo-8.jpg';
import image9 from './../../common/img/photo-9.jpg';
import image10 from './../../common/img/photo-10.jpg';
import image11 from './../../common/img/photo-11.jpg';
class RmPhotographyController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmPhotography';
    this.services = {
      user: User
    };

    this.images = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11
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
