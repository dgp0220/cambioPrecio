import React, { useState, useEffect } from 'react';
import { Layout, Avatar, Popover, Drawer } from 'antd';
import logoUser from '../../../assets/images/user.png';
import './dashboardHeader.scss';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import AppMenu from '../../menu/AppMenu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function DashboardHeader(props) {
  const { isBroken } = props;
  const { Header } = Layout;
  const [isVisibleDrawer, setIsVsibleDrawer] = useState(
    false,
  );
  const userName = useSelector(
    (state) => state.auth.user.name,
  );

  useEffect(() => {
    setIsVsibleDrawer(false);
  }, [isBroken]);

  const content = (
    <div>
      <div>Mi perfil</div>
      <div>Mensajes</div>
      <Link to="/login">Cerrar Sesión</Link>
    </div>
  );

  const showDrawer = () => {
    setIsVsibleDrawer(true);
  };
  return (
    <Header>
      <div>
        {isBroken &&
          React.createElement(
            isVisibleDrawer
              ? MenuUnfoldOutlined
              : MenuFoldOutlined,
            {
              className: 'header-collapse',
              onClick: showDrawer,
            },
          )}
        <p>Sistema de Gestión de Cambio de Precio</p>
        <Drawer
          placement="left"
          onClose={() => setIsVsibleDrawer(false)}
          visible={isVisibleDrawer}
          drawerStyle={{ backgroundColor: '#001529' }}
          bodyStyle={{ padding: 0 }}
          width="300px"
        >
          <AppMenu isBroken={isBroken} />
        </Drawer>
      </div>
      <Popover
        placement="bottom"
        title="Usuarrio"
        content={content}
        trigger="click"
        overlayStyle={{
          paddingRight: '10px',
          width: '250px',
        }}
      >
        <span className="action">
          <span>{userName}</span>
          <Avatar className="avatar" src={logoUser} />
        </span>
      </Popover>
    </Header>
  );
}
