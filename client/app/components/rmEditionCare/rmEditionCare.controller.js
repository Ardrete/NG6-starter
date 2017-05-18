import image1 from './../../common/img/coordinacion_editorial/1.jpg';
import image2 from './../../common/img/coordinacion_editorial/2.jpg';
import image3 from './../../common/img/coordinacion_editorial/3.jpg';
import image4 from './../../common/img/coordinacion_editorial/4.jpg';
import image5 from './../../common/img/coordinacion_editorial/5.jpg';

class RmEditionCareController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmEditionCare';
    this.services = {
      user: User
    };
    
  this.images = [
    image1,
    image2,
    image3,
    image4,
    image5
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
