import { createGlobalStyle } from 'styled-components';

import background from '../assets/vector.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans&display=swap');
  

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body {
    background: ${props => props.theme.secundary} url(${props => props.theme.top}) no-repeat top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Quattrocento Sans', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;