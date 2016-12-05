class appController {
  /*@ngInject*/
  constructor(User, $scope) {
    this.name = 'app';
    this.services = {
      user: User
    };
  }
}

export default appController;
