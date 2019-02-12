import { action, extendObservable } from 'mobx';

//可观察的属性
const OBSERVABLE = {
  preView: '',
  location: {},
  match: {}
};

class Route {
  constructor() {
    extendObservable(this, {
      ...OBSERVABLE
    });
  }

  @action.bound reset() {
    Object.assign(this, OBSERVABLE);
  }
  @action.bound updateRoute({ location, match }) {
    this.preView = this.location.pathname;
    this.location = location;
    this.match = match;
  }
}

export default new Route();
