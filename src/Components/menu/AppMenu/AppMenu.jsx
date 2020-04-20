import React, { Fragment, useState } from 'react';
import { Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import DatosAppMenu from '../../../datos/datos';

import './appMenu.scss';

export default function AppMenu(props) {
  const { toggleCollapsed, collapsed } = props;
  const { SubMenu, Item } = Menu;
  const headerColor = collapsed ? 'rgba(255, 255, 255, 0.65)' : '#cac400';
  const history = useHistory();
  const location = useLocation();

  const initialMenuState = {
    menuKey: [''],
    parentMenuKey: [''],
  };

  const locationState = (location && location.state) || initialMenuState;

  console.log(locationState, history);

  const [currentMenuKey, setCurrentMenuKey] = useState(locationState.menuKey);
  const [parentMenuKey, setParentMenuKey] = useState(
    locationState.parentMenuKey
  );

  const navigatePage = (menuKey, parentMenuKey, link) => {
    setCurrentMenuKey(menuKey);
    setParentMenuKey(parentMenuKey);

    history.push(link, { menuKey, parentMenuKey });
  };

  return (
    <Fragment>
      <div className="menu-left-logo">
        {!collapsed && (
          <div className="div-demo">
            <Link to="/home">{/* <img src={Logo} alt="logo" /> */}</Link>
          </div>
        )}
        <ButtonCollapsed
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
        />
      </div>
      <div className="menu-left-title">
        <h4 style={{ color: headerColor }}>
          {collapsed ? '...' : 'MENÚ APLICACIÓN'}
        </h4>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={currentMenuKey}
        mode="inline"
        defaultOpenKeys={parentMenuKey}
      >
        <SubMenu
          key="seguridad"
          title={
            <span>
              <MoneyCollectOutlined />
              <span>{DatosAppMenu.seguridad}</span>
            </span>
          }
        >
          <Item
            key="configuracion_usuario"
            onClick={() =>
              navigatePage(
                ['configuracion_usuario'],
                ['seguridad'],
                '/seguridad/configuracion-usuario'
              )
            }
          >
            <DashboardOutlined />
            <span>{'Configuracion Usuario'}</span>
          </Item>
        </SubMenu>
        <SubMenu
          key="asignacion_productos"
          title={
            <span>
              <MoneyCollectOutlined />
              <span>{'Asginacion Productos'}</span>
            </span>
          }
        >
          <Item
            key="asignacion_productos_rutina"
            onClick={() =>
              navigatePage(
                ['asignacion_productos_rutina'],
                ['asignacion_productos'],
                '/asignacion-productos/rutina'
              )
            }
          >
            <DashboardOutlined />
            <span>{'Asginacion Productos Rutina'}</span>
          </Item>
        </SubMenu>
        <SubMenu
          key="solicitud_cambio"
          title={
            <span>
              <MoneyCollectOutlined />
              <span>{'Solicitud Cambio'}</span>
            </span>
          }
        >
          <Item key="registro_solicitud_cambio">
            <DashboardOutlined />
            <span>{'Registro Solicitud Cambio PVP'}</span>
          </Item>
        </SubMenu>
      </Menu>
    </Fragment>
  );
}

export function ButtonCollapsed(props) {
  const { collapsed, toggleCollapsed } = props;
  return (
    <>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'logo-icon',
        onClick: toggleCollapsed,
      })}
    </>
  );
}
