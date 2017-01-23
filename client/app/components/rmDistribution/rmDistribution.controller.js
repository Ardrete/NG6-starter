import image1 from './../../common/img/insumos_almacenaje/1.jpg';
import image2 from './../../common/img/insumos_almacenaje/2.jpg';
import image3 from './../../common/img/insumos_almacenaje/3.jpg';
import image4 from './../../common/img/insumos_almacenaje/4.jpg';
import image5 from './../../common/img/insumos_almacenaje/5.jpg';

class RmDistributionController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmDistribution';
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

export default RmDistributionController;
