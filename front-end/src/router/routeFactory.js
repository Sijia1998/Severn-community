class RouteFactory {
  constructor(componentPath) {
    this.component = require(`src/components/${componentPath}`).default;
    this.path = `/${componentPath}`;
  }

  setAttr({ ...attr }) {
    Object.assign(this, attr);
    return this;
  }

  setPath(path) {
    return this.setAttr({ path });
  }

  setComponent(component) {
    return this.setAttr({ component });
  }

  /**
   * path/to/:param 中param的枚举
   * @param {object} paramsEnum
   *  {
   *    [paramName]: [
   *      { param: '' label: ''}
   *    ]
   *  }
   */

  setParamsEnum(paramsEnum) {
    return this.setAttr({ paramsEnum });
  }

  setSubRoute(routes) {
    return this.setAttr({ routes });
  }
}

export const baseRoute = componentPath => new RouteFactory(componentPath);

//侧边栏folder路由
export const sideRoute = (label, icon) =>
  new RouteFactory("layout/Empty").setAttr({
    label,
    icon,
    sideRoute: true
  });

/**
 * 链接路由
 */
export const sideLinkRoute = (componentPath, label, icon) =>
  new RouteFactory(componentPath).setAttr({
    label,
    icon,
    linkRoute: true,
    exact: true
  });

// 不会显示在侧边栏
export const sideHiddenRoute = (componentPath, label, icon) =>
  new RouteFactory(componentPath).setAttr({
    label,
    icon,
    hidden: true,
    exact: true
  });
