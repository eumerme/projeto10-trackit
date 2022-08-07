import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signUp } from '../../../services/trackit';
import { ThreeDots } from "react-loader-spinner";
import { Wrapper, LoaderSpinner } from '../styles/styles';
import logo from '../../assets/image/logo.svg';

export default function SingupPage() {
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        image: '',
        password: '',
    });

    const handleInputs = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setDisable(true);
        const bodySignup = { ...formData };
        const promise = signUp(bodySignup);

        promise.catch(error => {
            setDisable(false);
            alert(error.response.data.message);
        });
        promise.then(response => {
            alert("Cadastro realizado com sucesso!");
            navigate('/');
        });
    };

    return (
        <Wrapper disable={disable}>
            <img src={logo} alt='TrackIt' />
            <form onSubmit={handleSignup}>
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
                <div>
                    <input
                        type='text'
                        placeholder='nome'
                        required
                        value={formData.name}
                        name="name"
                        disabled={disable}
                        onChange={handleInputs}
                    />
                </div>
                <div>
                    <input
                        type='url'
                        placeholder='foto'
                        required
                        value={formData.image}
                        name="image"
                        disabled={disable}
                        onChange={handleInputs}
                    />
                </div>
                {!disable ? (
                    <button type='submit' disabled={disable}>Entrar</button>
                ) : (
                    <LoaderSpinner>
                        <ThreeDots color="#ffffff" height={13} width={51} />
                    </LoaderSpinner>
                )}
            </form>
            <Link to='/'>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </Wrapper>
    );
}