import { Breadcrumb, Layout } from 'antd';
import React from 'react';

import { PageContent } from '../components/common';
import ConfigurationUserFamilyForm from '../components/form/ConfigurationUserFamilyForm';
import DashboardPageLayout from '../layout/DashboardPageLayout';

export default function ConfiguracionUsuario() {
    const { Content } = Layout;
    return (
        <DashboardPageLayout>
            <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>
                        Seguridad
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Configuración de Usuario por Familia</Breadcrumb.Item>
                </Breadcrumb>
                <PageContent title={"Configuración de Usuarios por Familia"} titleDivider>
                    <ConfigurationUserFamilyForm />
                </PageContent>
            </Content>
        </DashboardPageLayout>
    )
}