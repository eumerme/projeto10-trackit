import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
    return (
        <Wrapper>
            <Link to='/habitos'>
                <span>Hábitos</span>
            </Link>
            <Link to='/hoje'>
                <span>Hoje</span>
            </Link>
            <Link to='/historico'>
                <span>Histórico</span>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    font-size: 18px;
    color: #52B6FF;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    right: 0;
`;