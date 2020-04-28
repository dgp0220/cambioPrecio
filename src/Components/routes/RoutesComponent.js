import React from 'react';
// import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Login, Home, AsignacionProductoRutina, ConfiguracionUsuario } from '../../pages';
import PublicRoutes from './PublicRoute';
import { connect } from 'react-redux';

function RoutesComponent(props) {
    const { user } = props;

    return (
        // <Router>
        < Switch >
            <Route exact path={["/", "/home"]} component={Home} />
            {/* <Route exact path="/login" component={Login} /> */}
            <PublicRoutes
                key="/login"
                exact
                path="/login"
                user={user}
                component={Login}
            />
            <Route exact path="/seguridad/configuracion-usuario" component={ConfiguracionUsuario} />
            <Route exact path="/asignacion-productos/rutina" component={AsignacionProductoRutina} />
        </Switch >
        // </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(RoutesComponent);