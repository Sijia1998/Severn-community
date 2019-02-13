import Footer from 'src/components/footer';
import Header from 'src/components/header';
import SiderBar from 'src/components/siderBar';
const routes = {
  path: '/',
  component: Header,
  exact: true,
  childRoutes: [
    { path: 'footer', component: Footer, exact: true },
    { path: 'siderbar', component: SiderBar, exact: true }
  ]
};

export default routes;
