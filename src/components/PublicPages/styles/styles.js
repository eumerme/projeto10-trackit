import styled from "styled-components";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    background-color: #ffffff;

    img {
        margin: 30px 0;
    }

    input {
        width: 100%;
        height: 45px;
        font-size: 20px;
        color: #666666;
        margin-bottom: 6px;
        outline: none;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 0 10px;
        background-color: ${props => props.disable ? "#F2F2F2" : ""};
    }

    input::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }

    button {
        width: 100%;
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

const LoaderSpinner = styled.div`
    width: 100%;
    height: 45px;
    background-color: #86CCFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6px 0 25px 0;

    ${props => {
        if (props.saveHabit) {
            return `
              &&& {
                width: 84px;
                height: 35px;
                display: grid;
                align-content: center;
                margin: 0;
              } 
            `;
        }
    }}
`;

export { Wrapper, LoaderSpinner };