import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    form {
        width: 400px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-weight: bold;
            font-size: 46px;
            color: #fff;
        }
        input {
            flex: 1;
            height: 46px;
            margin-bottom: 15px;
            padding: 10px;
            color: #777;
            font-size: 15px;
            width: 100%;
            border: 1px solid #ddd;

            &::placeholder {
                color: #999;
            }
        }
        button {
            color: #fff;
            font-size: 16px;
            background: ${props => props.theme.primary};
            height: 56px;
            border-radius: 5px;
            width: 100%;

            &:hover{
                background: ${props => props.theme.tertiary}
            }
        }
        a {
            margin-top: 10px;
            font-size: 16;
            font-weight: bold;
            color: #999;
            text-decoration: none;
        }
    }
`;

