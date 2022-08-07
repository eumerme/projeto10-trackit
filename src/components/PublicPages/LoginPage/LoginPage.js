import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../../services/trackit";
import { ThreeDots } from "react-loader-spinner";
import { Wrapper, LoaderSpinner } from "../styles/styles";
import logo from "../../assets/image/logo.svg";

export default function LoginPage() {
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("trackit"));
    const [disable, setDisable] = useState(false);
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
        setDisable(true);
        const bodyLogin = { ...formData };

        login(bodyLogin)
            .catch(error => {
                setDisable(false);
                alert(error.response.data.message);
            })
            .then(response => {
                localStorage.setItem("trackit", JSON.stringify(
                    {
                        token: response.data.token,
                        image: response.data.image,
                        timestamp: +new Date()
                    }
                ));
                navigate('/hoje')
            });
    };

    return (
        <>
            {auth ? (
                <Navigate to="/hoje" />
            ) : (
                <Wrapper disable={disable}>
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
                                disabled={disable}
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
                                disabled={disable}
                            />
                        </div>
                        {!disable ? (
                            <button type='submit'>Entrar</button>
                        ) : (
                            <LoaderSpinner>
                                <ThreeDots color="#ffffff" height={13} width={51} />
                            </LoaderSpinner>
                        )}
                    </form>
                    <Link to='/cadastro'>
                        <p>Não tem uma conta? Cadastre-se!</p>
                    </Link>
                </Wrapper>
            )}
        </>
    );
}