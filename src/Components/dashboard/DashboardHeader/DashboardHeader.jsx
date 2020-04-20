import React from 'react';
import { Layout } from 'antd';

export default function DashboardHeader() {
  const { Header } = Layout;
  return (
    <Header style={{ backgroundColor: '#fff' }}>
      <h1>Sistema de Gestión de Cambio de Precio</h1>
    </Header>
  );
}
