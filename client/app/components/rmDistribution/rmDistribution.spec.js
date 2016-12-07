import RmDistributionModule from './rmDistribution'
import RmDistributionController from './rmDistribution.controller';
import RmDistributionComponent from './rmDistribution.component';
import RmDistributionTemplate from './rmDistribution.html';

describe('RmDistribution', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RmDistributionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RmDistributionController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(RmDistributionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RmDistributionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RmDistributionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RmDistributionController);
      });
  });
});
