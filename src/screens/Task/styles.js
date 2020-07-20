import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 2; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4); 

  .box {
    max-width: 600px;
    margin: auto;
    background: ${props => props.theme.secundary};
    border-radius: 4px;
    position: relative;
    animation-name: animatetop;
    animation-duration: 1s;

    @keyframes animatetop {
      from {top:-300px; opacity:0}
      to {top:0; opacity:1}
    }
    
    .header {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #ddd;
      padding: 10px 0;
      margin-bottom: 10px;

      h1{
        color: ${props => props.theme.text};
      }
    }

    form{
      display: flex;
      flex-direction: column;

      .icons-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        img {
          padding: 10px;
          background: ${props => props.theme.primary};
          border-radius: 10px;
          margin: 5px;
          cursor: pointer;
        }

        .radio {
          display: none;
        }

        .selected img{
          border: 2px solid blue;
        }
      }
    }
    
    .msg-alert {
      width: 100%;
      display: flex;
      justify-content: center;
      border: 1px solid red;
      margin-top: 10px;
      color: red;
    }

    h2 {
      margin: 20px 5px 0px;
      color: ${props => props.theme.text};
    }
    .title, .description {
      padding: 10px 20px;
      border-radius: 4px;
      border: 1px solid #ddd;
      margin: 5px;
      font-size: 16px;
    }
  
    button {
      padding: 10px 20px;
      border: 0;
      background: ${props => props.theme.primary};
      border-radius: 4px;
      color: #fff;
      font-size: 25px;
      height: 56px;
      margin: 20px 5px 5px 5px;

      &:hover {
        background: ${props => props.theme.tertiary};
      }
    }
  } 
`;