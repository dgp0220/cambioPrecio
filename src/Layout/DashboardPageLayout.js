import React, { useState } from 'react';
import { Layout } from 'antd';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardFooter from '../components/dashboard/DashboardFooter';
import AppMenu from '../components/menu/AppMenu';

export default function DashboardPageLayout(props) {
    const { Sider } = Layout;
    const { children } = props;
    const [collapsed, setCollapsed] = useState(false);
    const [isBroken, setIsBroken] = useState(false);

    const toggleCollapsedLeft = () => {
        setCollapsed(!collapsed);
    };

    const onClose = (broken) => {
        setIsBroken(broken);
        // console.log(broken);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                className="sider-left"
                trigger={null}
                width={isBroken ? 0 : 320}
                collapsible
                collapsed={collapsed}
                collapsedWidth={isBroken ? 0 : 80}
                breakpoint={'md'}
                onBreakpoint={(broken) => onClose(broken)}
            >
                <AppMenu isBroken={isBroken} toggleCollapsed={toggleCollapsedLeft} collapsed={collapsed} />
            </Sider>
            <Layout>
                <DashboardHeader isBroken={isBroken} />
                {children}
                <DashboardFooter />
            </Layout>
        </Layout>
    )
}