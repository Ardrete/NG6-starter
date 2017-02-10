import image5 from './../../common/img/diseno/5.jpg';
import image1 from './../../common/img/diseno/1.jpg';
import image2 from './../../common/img/diseno/2.jpg';
import image3 from './../../common/img/diseno/3.jpg';
import image4 from './../../common/img/diseno/4.jpg';

class RmDesignController {
  /*@ngInject*/
  constructor(User, $rootScope) {
    this.name = 'rmDesign';
    this.$rootScope = $rootScope;
    this.services = {
      user: User
    };

    this.videos = [{
      sources: [{
          src: 'https://s3.amazonaws.com/f.cl.ly/items/3t3i3g342j1U2n0v3P3w/RomoPrevio.webm',
          type: 'video/webm'
        },
        {
          src: 'https://d3vv6lp55qjaqc.cloudfront.net/items/0i2u1y3Y2l3D0c02000v/RomoPrevio.mp4',
          type: 'video/mp4'
        }
      ]
    }];

    this.images = [
      image5,
      image1,
      image2,
      image3,
      image4
    ];

    this.subscriptions = [];
  }

  $onInit() {
    this.galleryShowed = false;
    this.services.user.setCloseButton(false);
  }

  closeGallery() {
    this.galleryShowed = false;
    this.services.user.setCloseButton(false);
    this.subscriptions.push(this.$rootScope.$broadcast('gallery.close'));
  }

  $onDestroy(){
    _.forEach(this.subscriptions, item => item());
  }

  showGallery() {
    this.galleryShowed = true;
    this.services.user.setCloseButton(true, () => this.closeGallery());
  }
}

export default RmDesignController;
