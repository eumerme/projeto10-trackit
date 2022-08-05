import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 18px;
    margin: 53px 0 70px 0;
`;

const Habit = styled.form`
    width: 100%;
    min-height: 91px;
    max-height: 180px;
    padding: 18px;
    margin-bottom: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    position: relative;

    div {
        width: 100%;
        height: auto;
    }
`;

const Title = styled.div`
    input {
        width: 100%;
        height: 45px;
        font-size: 20px;
        color: #666666;
        margin-bottom: 8px;
        outline: none;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding-left: 10px;
    }

    input::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }

    h1 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

const Days = styled.div`
    width: 100%;
    height: 31px;
    display: flex;
`;

const Day = styled.div`
    width: 30px !important;
    height: 30px !important;
    margin-right: 5px;
    font-size: 20px;
    color: #DBDBDB;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => {
        if (props.isSelected) {
            return `
                color: #ffffff;
                background-color: #CFCFCF;
            `;
        }
    }}
`;

const Buttons = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: flex-end;
    margin-top: 29px;

    span {
        width: 84px;
        height: 35px;
        font-size: 16px;
        color: #52B6FF;
        display: grid;
        place-content: center;
        margin-right: 20px;
    }

    button {
        width: 84px;
        height: 35px;
        font-size: 16px;
        color: #ffffff;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        display: grid;
        place-content: center;
    }
`;

const Info = styled.div`
    font-size: 18px;
    line-height: 22px;
`;

export { Main, Habit, Title, Days, Day, Buttons, Info };