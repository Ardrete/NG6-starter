class rmAccordionGroupController {
  /*@ngInject*/
  constructor($scope) {
    this.name = 'rmAccordionGroup';
    this.accordions = {};
    this.active = null;
    this._scope = $scope;
  }

  add(key, accordion) {
    this.accordions[key] = accordion;
  }

  shouldToggle(index) {
    const shouldChange = !!this._scope &&
      (!this._scope.onChange ||
        this._scope.onChange({
          newTab: index
        }));

    return shouldChange;
  }

  open(index) {
    this.close();
    if (index && this.accordions[index]) {
      this.accordions[index].status = 'open';
    }
    this.active = index;
    this._scope.selected = index;
    this._scope.closed = false;
  }

  close() {
    if (this.active && this.accordions[this.active]) {
      this.accordions[this.active].status = 'close';
    }
    this.active = null;
    this._scope.closed = true;
  }
}

export default rmAccordionGroupController;
