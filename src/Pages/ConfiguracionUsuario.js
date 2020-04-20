import React from 'react';
import { Layout, Breadcrumb } from 'antd';
// import { Icon as LegacyIcon } from '@ant-design/compatible';
import DashboardPageLayout from '../Layout/DashboardPageLayout';
import PageContent from '../Components/common/PageContent';
import ConfigurationUserFamilyForm from '../Components/form/ConfigurationUserFamilyForm';

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