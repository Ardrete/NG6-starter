import RmSectionModule from './rmSection'
import RmSectionController from './rmSection.controller';
import RmSectionComponent from './rmSection.component';
import RmSectionTemplate from './rmSection.html';

describe('RmSection', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RmSectionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RmSectionController();
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
      expect(RmSectionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RmSectionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RmSectionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RmSectionController);
      });
  });
});
