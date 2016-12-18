import image1 from './../../common/img/proy-1.jpg';
import image2 from './../../common/img/proy-2.jpg';
import image3 from './../../common/img/proy-3.jpg';
import image4 from './../../common/img/proy-4.jpg';
import image5 from './../../common/img/proy-5.jpg';
import image6 from './../../common/img/proy-6.jpg';
import image7 from './../../common/img/proy-7.jpg';
import image8 from './../../common/img/proy-8.jpg';

class RmProjectsController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmProjects';

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

export default RmProjectsController;
