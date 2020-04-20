import React, { useState } from 'react';
import { Layout } from 'antd';
import DashboardHeader from '../Components/dashboard/DashboardHeader';
import DashboardFooter from '../Components/dashboard/DashboardFooter';
import AppMenu from '../Components/menu/AppMenu';

export default function DashboardPageLayout(props) {
    const { Sider } = Layout;
    const { children } = props;
    const [collapsed, setCollapsed] = useState(false);
    const [visibleDrawer, setVisibleDrawer] = useState(false);

    const toggleCollapsedLeft = () => {
        setCollapsed(!collapsed);
    };

    const onClose = () => {
        setVisibleDrawer(false);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                className="sider-left"
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={320}
                collapsedWidth={80}
                breakpoint={'md'}
                onBreakpoint={onClose}
            >
                <AppMenu toggleCollapsed={toggleCollapsedLeft} collapsed={collapsed} />
            </Sider>
            <Layout>
                <DashboardHeader />
                {children}
                <DashboardFooter />
            </Layout>
        </Layout>
    )
}