import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

import SideBar from '../components/layout/sidebar';

const SubMenu = Menu.SubMenu;

class Layout extends Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div>
          <SideBar />
        </div>
      </LocaleProvider>
    );
  }
}

export default Layout;
