import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

const { Item: MenuItem, SubMenu } = Menu;

@inject('layout')
@observer
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: this.props.foldSidebar
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultOpenKeys={['sub2']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {/* {meuns} */}
          {/* <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}

export default SideBar;