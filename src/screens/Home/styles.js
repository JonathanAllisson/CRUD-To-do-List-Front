import styled from 'styled-components';

export const Screen = styled.div`
    .button{
        button{
            top: 30px;
            right: 30px;
            position: absolute;
        }
    }
`;

export const Container = styled.div`
  max-width: 600px;
  padding: 30px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  h1{
    color: #FFF;
    font-size: 96px;
    margin: auto;
  }

  .btn-submit {
    border: 0;
    flex: 1;
    padding: 15px;
    width: 100%;
    background: #FFF;
    border-radius: 4px;
    margin-top: 50px;
    border: 1px;
    border-style: outset;

    span{
        font-size: 25px;
    }

    &:hover{
        background: #DDD;
    }
    
  }

  .task-list{
    flex: 1;
    padding: 30px;
    list-style: none;
    
    .task{
        margin-top: 30px;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        display: flex;
        background: ${props => props.theme.secundary};

        .box{
            height: 110px;
            width: 30%;
            background: ${props => props.theme.primary};
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius: 4px;

            svg{
                color: #FFF;
                font-size: 50px;
            }
        }

        .box-content {
            padding: 8px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;

            p{
                font-size: 20px;
                color: ${props => props.theme.text};
            }
            span{
                font-size: 16px;
                color: #999;
            }
        }

        .box-actions {
            padding: 8px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            svg{
                font-size: 25px;
                cursor: pointer;
                color: ${props => props.theme.text};
            }
        }
    }
  }

`;