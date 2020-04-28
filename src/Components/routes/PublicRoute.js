import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute(props) {
    const { component: Component, user, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(props) => {
                if (user.userName) return <Redirect to='/' />

                return <Component {...props} />
            }}
        />
    )
}