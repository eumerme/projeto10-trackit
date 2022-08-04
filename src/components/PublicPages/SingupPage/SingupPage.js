import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signUp } from '../../../services/trackit';
import ContainerLoginSignup from '../styles/style';
import logo from '../../assets/image/logo.svg';

export default function SingupPage() {
    const navigate = useNavigate();

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
        const bodySignup = { ...formData };

        signUp(bodySignup)
            .catch(error => alert(error.response.data.message))
            .then(response => navigate('/'));
    };

    return (
        <ContainerLoginSignup>
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
                <div>
                    <input
                        type='text'
                        placeholder='nome'
                        required
                        value={formData.name}
                        name="name"
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
                        onChange={handleInputs}
                    />
                </div>
                <button type='submit'>Cadastrar</button>
            </form>
            <Link to='/'>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </ContainerLoginSignup>
    );
}