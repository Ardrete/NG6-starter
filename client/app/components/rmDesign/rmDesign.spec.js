import RmDesignModule from './rmDesign'
import RmDesignController from './rmDesign.controller';
import RmDesignComponent from './rmDesign.component';
import RmDesignTemplate from './rmDesign.html';

describe('RmDesign', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RmDesignModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RmDesignController();
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
      expect(RmDesignTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RmDesignComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RmDesignTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RmDesignController);
      });
  });
});
