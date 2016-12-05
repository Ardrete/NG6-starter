import RmContactModule from './rmContact'
import RmContactController from './rmContact.controller';
import RmContactComponent from './rmContact.component';
import RmContactTemplate from './rmContact.html';

describe('RmContact', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RmContactModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RmContactController();
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
      expect(RmContactTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RmContactComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RmContactTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RmContactController);
      });
  });
});
