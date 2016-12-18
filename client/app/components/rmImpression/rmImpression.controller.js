import image1 from './../../common/img/print-1.jpg';
import image2 from './../../common/img/print-2.jpg';
import image3 from './../../common/img/print-3.jpg';
import image4 from './../../common/img/print-4.jpg';
import image5 from './../../common/img/print-5.jpg';
import image6 from './../../common/img/print-6.jpg';
import image7 from './../../common/img/print-7.jpg';
import image8 from './../../common/img/print-8.jpg';
import image9 from './../../common/img/print-9.jpg';
import image10 from './../../common/img/print-10.jpg';
import image11 from './../../common/img/print-11.jpg';
import image12 from './../../common/img/print-12.jpg';
import image13 from './../../common/img/print-13.jpg';
import image14 from './../../common/img/print-14.jpg';
import image15 from './../../common/img/print-15.jpg';
import image16 from './../../common/img/print-16.jpg';
import image17 from './../../common/img/print-17.jpg';
import image18 from './../../common/img/print-18.jpg';
import image19 from './../../common/img/print-19.jpg';
import image20 from './../../common/img/print-20.jpg';
import image21 from './../../common/img/print-21.jpg';
import image22 from './../../common/img/print-22.jpg';
import image23 from './../../common/img/print-23.jpg';
import image24 from './../../common/img/print-24.jpg';
import image25 from './../../common/img/print-25.jpg';
import image26 from './../../common/img/print-26.jpg';

class RmImpressionController {
  /*@ngInject*/
  constructor(User) {
    this.name = 'rmImpression';

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
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20,
      image21,
      image22,
      image23,
      image24,
      image25,
      image26
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

export default RmImpressionController;
