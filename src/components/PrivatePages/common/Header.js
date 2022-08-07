import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../../Contexts/UserContext";

export default function Header({ children, today }) {
    const { percentage } = useContext(UserContext)

    return (
        <Wrapper today={today} percentDone={percentage}>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 79px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 23px;
        color: #126BA5;
    }

    div {
        width: 40px;
        height: 35px;
        font-size: 27px;
        color: #ffffff;
        background: #52B6FF;
        border-radius: 5px;
        display: grid;
        place-content: center;
        padding-bottom: 4px;
    }

    h2 {
        font-size: 18px;
        color: ${props => props.percentDone !== 0 ? "#8FC549" : "#BABABA"};
        margin-top: 10px
    }

    ${props => {
        if (props.today) {
            return `
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                margin: 10px 0 15px 0;
            `;
        }
    }}
`;