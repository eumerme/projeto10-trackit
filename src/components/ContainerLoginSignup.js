import styled from "styled-components";

export default function ContainerLoginSignup({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    img {
        margin: 30px 0;
    }

    input {
        width: 303px;
        height: 45px;
        font-size: 20px;
        margin-bottom: 6px;
        outline: none;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
    }

    input::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }

    button {
        width: 303px;
        height: 45px;
        font-size: 20px;
        color: #ffffff;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        margin: 6px 0 25px 0;
    }

    p {
        font-size: 14px;
        color: #52B6FF;
        text-decoration: underline;
    }
`;