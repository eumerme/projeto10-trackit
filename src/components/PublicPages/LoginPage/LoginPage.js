import { useState } from "react";
import { Link } from "react-router-dom";
import ContainerLoginSignup from "../styles/style";
import logo from "../../assets/image/logo.svg";

export default function LoginPage() {
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

    return (
        <ContainerLoginSignup>
            <img src={logo} alt='TrackIt' />
            <form /* onSubmit={handleLogin} */>
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