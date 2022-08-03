import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

export const LoginBox = styled.div`
    width: 500px;
    background-color: var(--secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 32px;
`;

export const LoginHeader = styled.div`
    color: var(--white);
    text-align: center;
    margin-bottom: 20px;
    width: 100%;

    > h5 {
        font-size: 25px !important;
    }

    > span {
        font-size: 16px;
        color: var(--gray);
    }
`;

export const LoginForm = styled.form`
    width: 100%;
`;

export const LoginBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > div {
        margin-bottom: 20px;
        width: 100%;
    }

    > div > h5 {
        font-size: 12px;   
        color: var(--gray);   
        font-weight: bold;
        width: 100%; 
    }

    > div > input {
        width: 100%;
        background-color: var(--tertiary);
        border-radius: 3px;
        padding: 10px;
        height: 40px;
        color: var(--white);
    }
`;

export const LoginFooter = styled.div`
`;