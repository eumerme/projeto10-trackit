import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/trackit";
import Wrapper from "../styles/style";
import logo from "../../assets/image/logo.svg";
//import UserContext from "../../../Contexts/UserContext";

export default function LoginPage() {
    const navigate = useNavigate();
  //  const { user, setUser } = useContext(UserContext);

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

        login(bodyLogin)
            .catch(error => alert(error.response.data.message))
            .then(response => {
                localStorage.setItem("trackit", JSON.stringify(
                    {
                        token: response.data.token,
                        image: response.data.image,
                        timestamp: +new Date()
                    }
                ));
             //   setUser(JSON.parse(localStorage.getItem("trackit")));
                navigate('/hoje')
            });
    };

    return (
        <Wrapper>
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
        </Wrapper>
    );
}