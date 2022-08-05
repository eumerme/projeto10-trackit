import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useContext } from "react";
import UserContext from "../../../Contexts/UserContext";

export default function Menu() {
    const { percentage } = useContext(UserContext);
    return (
        <Wrapper>
            <Link to='/habitos'>
                <span>Hábitos</span>
            </Link>
            <Link to='/hoje'>
                <div>
                    <CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </div>
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
    z-index: 1;

    div {
        width: 91px;
        height: 91px;
        margin-bottom: 40px;
    }
`;