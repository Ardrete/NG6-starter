import RmPacketModule from './rmPacket'
import RmPacketController from './rmPacket.controller';
import RmPacketComponent from './rmPacket.component';
import RmPacketTemplate from './rmPacket.html';

describe('RmPacket', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RmPacketModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RmPacketController();
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
      expect(RmPacketTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RmPacketComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RmPacketTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RmPacketController);
      });
  });
});
