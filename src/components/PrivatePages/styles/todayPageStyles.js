import styled from "styled-components";

const TodayHabit = styled.div`
    width: 100%;
    min-height: 97px;
    max-height: 200px;
    padding: 18px 95px 18px 18px;
    margin-bottom: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    position: relative;
`;


const TodayTitle = styled.div`
    h1 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    div{
        display: flex;
    }

    h2 {
        font-size: 14px;
        line-height: 16px;
    }

    p {
        font-size: 14px;
        color: ${props => props.done ? "#8FC549" : ""};
    }

    span {
        font-size: 14px;
        color: ${props => props.goal ? "#8FC549" : ""};
    }
`;

const Check = styled.div`
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    display: grid;
    place-content: center;
    position: absolute;
    top: 14px;
    right: 14px;
`;

export { TodayHabit, TodayTitle, Check };