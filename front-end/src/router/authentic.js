import { sideRoute, sideLinkRoute, sideHiddenRoute } from './routeFactory';

export default [{
  // path:''
  ...sideRoute('时空数据集成','icon-shujujicheng').setPath('/itgr')
    .setSubRoute([])
}];
