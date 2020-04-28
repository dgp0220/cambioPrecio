import { Layout } from 'antd';
import React from "react";
// import { useSelector } from 'react-redux';

import DashboardPageLayout from '../layout/DashboardPageLayout';

export default function AsignacionProductoRutina() {
    const { Content } = Layout;

    // const idPokemon = useSelector(state => state.configurationUserFamily.idPokemon)

    return (
        <DashboardPageLayout>
            <Content>
                <div>asignación producto rutina ...</div>
            </Content>
        </DashboardPageLayout>
    )
} 