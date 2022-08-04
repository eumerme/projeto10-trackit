import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ContainerLoginSignup from "../styles/style";
import logo from "../../assets/image/logo.svg";
import UserContext from "../../../Contexts/UserContext";

export default function LoginPage() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputs = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const bodyLogin = { ...formData };
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

        const promise = axios.post(url, bodyLogin);
        promise.catch(error => alert(error.response.data.message));
        promise.then(response => {
            setUser(response.data);
            /* localStorage.setItem("trackit", JSON.stringify(response.data.token)); */
            console.log(response.data);
            /* console.log(localStorage) */
            navigate('/hoje')
        });
    };

    return (
        <ContainerLoginSignup>
            <img src={logo} alt='TrackIt' />
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type='email'
                        placeholder='email'
                        required
                        value={formData.email}
                        name="email"
                        onChange={handleInputs}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='senha'
                        required
                        value={formData.password}
                        name="password"
                        onChange={handleInputs}
                    />
                </div>
                <button type='submit'>Entrar</button>
            </form>
            <Link to='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </ContainerLoginSignup>
    );
}