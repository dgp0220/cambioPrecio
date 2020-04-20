import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Login, Home, AsignacionProductoRutina, ConfiguracionUsuario } from './Pages';
import './App.css';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/seguridad/configuracion-usuario" component={ConfiguracionUsuario} />
                <Route path="/asignacion-productos/rutina" component={AsignacionProductoRutina} />
            </Switch>
        </Router>
    )
}