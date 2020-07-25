import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import { Context } from './Context/authContext';

import Home from './screens/Home';
import Signin from './screens/Signin';
import Signup from './screens/Signup';

function CustomRoute({ isPrivate, ...rest }){
    const { authenticated, loading } = useContext(Context);

    if(loading){
        return <h1>Loading</h1>;
    }

    if(isPrivate && !authenticated){
        return <Redirect to="/signin" />
    }

    return <Route {...rest} />;
}

function Routes() {
    const { toggleTheme } = useContext(Context);

    return (
        <ThemeProvider theme={toggleTheme}>
            <GlobalStyle />
            <Switch>
                <CustomRoute isPrivate exact path="/" component={Home} />
                <CustomRoute path="/signin" component={Signin} />
                <CustomRoute path="/signup" component={Signup} />
            </Switch>
        </ThemeProvider>
    )
}

export default Routes;