import React from 'react';
import { Layout } from 'antd';
import DashboardPageLayout from '../Layout/DashboardPageLayout';

export default function Home() {
    const { Content } = Layout;
    return (
        <DashboardPageLayout>
            <Content style={{
                backgroundColor: "#fff",
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}>
                <div>Home...</div>
            </Content>
        </DashboardPageLayout>
    )
}