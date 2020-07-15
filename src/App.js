import React, { useState } from 'react';

import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import themes from './themes';

import Home from './screens/Home';
import Task from './screens/Task';

function App() {

  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    return theme === true ? themes.dark : themes.light;
  }

  return (
    <>
      <ThemeProvider theme={toggleTheme}>
        <GlobalStyle />
        {/* <Home /> */}
        <Home theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
