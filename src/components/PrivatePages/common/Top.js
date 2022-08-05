//import { useContext } from "react";
import styled from "styled-components";
//import UserContext from "../../../Contexts/UserContext";

export default function Top() {
    const auth = JSON.parse(localStorage.getItem("trackit"));
    //const { user } = useContext(UserContext)
    return (
        <Wrapper>
            <span>TrackIt</span>
            <img src={auth.image} alt='' />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`;