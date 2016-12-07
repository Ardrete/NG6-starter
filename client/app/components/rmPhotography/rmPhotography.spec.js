import RmPhotographyModule from './rmPhotography'
import RmPhotographyController from './rmPhotography.controller';
import RmPhotographyComponent from './rmPhotography.component';
import RmPhotographyTemplate from './rmPhotography.html';

describe('RmPhotography', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RmPhotographyModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RmPhotographyController();
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
      expect(RmPhotographyTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RmPhotographyComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RmPhotographyTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RmPhotographyController);
      });
  });
});
