import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.svg"

function renderError() {
    localStorage.clear("trackit");

    return (
        <ReturnTo>
            <img src={logo} alt='TrackIt' />
            <h1>Sessão expirada</h1>
            <Link to='/'>
                <button>Login</button>
            </Link>
        </ReturnTo>
    );
}

export default function Private({ children }) {
    const auth = JSON.parse(localStorage.getItem("trackit"));
    
    if (!auth) {
        return renderError();
    };
    
    const timeLogged = auth.timestamp;
    const timeNow = +new Date();   
    const hour = (1000 * 60) * 60;

    if (timeNow - timeLogged <= hour) {
        return <>{children}</>;
    } else {
        window.location.reload();
        return renderError();
    };
}

const ReturnTo = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 23px;
        margin: 30px 0 40px 0;
    }

    button {
        width: 303px;
        height: 45px;
        font-size: 20px;
        color: #ffffff;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
    }
`;