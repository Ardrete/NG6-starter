import RmVideoModule from './rmVideo'
import RmVideoController from './rmVideo.controller';
import RmVideoComponent from './rmVideo.component';
import RmVideoTemplate from './rmVideo.html';

describe('RmVideo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RmVideoModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RmVideoController();
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
      expect(RmVideoTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RmVideoComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RmVideoTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RmVideoController);
      });
  });
});
