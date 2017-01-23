import image1 from './../../common/img/coordinacion_editorial/1.jpg';
import image2 from './../../common/img/coordinacion_editorial/2.jpg';

class RmEditionCareController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmEditionCare';
    this.services = {
      user: User
    };
    
  this.images = [
    image1,
    image2
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


export default RmEditionCareController;
