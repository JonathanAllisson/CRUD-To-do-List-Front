import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

import themes from '../themes';

const Context = createContext();

function AuthProvider({ children }){

    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const userls = localStorage.getItem('@CRUDUser');
            setUser(userls);
            const token = localStorage.getItem('@CRUDToken');
            if (token) {
                api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            }
            setLoading(false);
    }, [])

    const signup = async(data) => {
        const res = await api.post('user', data);
        return res;
    }

    const signin = async(data) => {
        const res = await api.post('signin', data);
        const token = res.data.token;
        await localStorage.setItem('@CRUDUser', JSON.stringify(res.data));
        await localStorage.setItem('@CRUDToken', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(res);
        return res;
    }
    
    const toggleTheme = () => {
        return theme === true ? themes.dark : themes.light;
    }

    return (
        <Context.Provider value={{ authenticated: !!user, theme, setTheme, toggleTheme, loading, signup, signin }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider };