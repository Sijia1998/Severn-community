import { action, extendObservable } from 'mobx';

// 可观察属性
const OBSERVABLE = {
  foldSidebar: false
};

class Layout {
  constructor() {
    extendObservable(this, {
      ...OBSERVABLE
    });
  }

  @action.bound reset() {
    Object.assign(this, OBSERVABLE);
  }

  @action.bound update(data) {
    Object.assign(this, data);
  }
}

export default new Layout();
