import React from 'react';
import { Layout } from 'antd';

export default function DashboardFooter() {
  const { Footer } = Layout;
  const year = new Date().getFullYear();

  return (
    <Footer style={{ backgroundColor: '#fff' }}>
      <h1>{year} - Derechos Reservados</h1>
    </Footer>
  );
}
