import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {
  Redirect,
  Route,
  HashRouter,
  Switch,
  Link,
  NavLink,
  withRouter
} from 'react-router-dom';
import styles from './style.less';
import './style.less';
import Footer from '../footer';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  state = {
    current: 'mail'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div>
        <div className={styles['menu-wrapper']}>
          <HashRouter>
            <div>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode='horizontal'
                className={styles['menu-wrapper']}
                className='testStyle'
              >
                <Menu.Item key='mail'>
                  <Icon type='mail' />
                  Vue
                </Menu.Item>
                <Menu.Item key='app'>
                  <Icon type='appstore' />
                  React
                </Menu.Item>
                <SubMenu
                  title={
                    <span className='submenu-title-wrapper'>
                      <Icon type='setting' />
                      Angular
                    </span>
                  }
                >
                  <MenuItemGroup title='Item 1'>
                    <Menu.Item key='setting:1'>
                      <NavLink to='/typescript'>Typescript</NavLink>
                    </Menu.Item>
                    <Menu.Item key='setting:2'>Option 2</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title='Item 2'>
                    <Menu.Item key='setting:3'>Option 3</Menu.Item>
                    <Menu.Item key='setting:4'>Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <Menu.Item key='alipay'>
                  <NavLink to='test'>
                    <Icon type='setting' />
                    Typescript
                  </NavLink>
                </Menu.Item>
                <Menu.Item key='apple'>
                  <NavLink to='/filesystem'>
                    <Icon type='desktop' />
                    iPhone
                  </NavLink>
                </Menu.Item>
              </Menu>
              <Route path='test' component={Footer} />
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default Header;
