import React from 'recat';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute(props) {
    const { component, user, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location }
                            }}
                        />
                    )
                }

                return <Component {...props} />
            }}
        />
    )
}
