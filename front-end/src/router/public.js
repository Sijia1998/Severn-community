import { baseRoute } from './routeFactory';

export default [
  // public route
  {
    ...(baseRoute('layout/Public')).setPath('/user'),
    routes: [
      baseRoute('user/login'),
      baseRoute('user/applyAccount').setPath('/user/apply-account'),
      baseRoute('user/applySuccess').setPath('/user/apply-success'),
      baseRoute('user/setPassword').setPath('/user/set-password'),
      baseRoute('user/inviteAccount').setPath('/user/invite-account'),
      baseRoute('user/inviteAccount').setPath('/user/invite-account')
    ]
  }
];
