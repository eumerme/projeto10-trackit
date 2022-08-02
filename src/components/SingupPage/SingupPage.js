import { Link } from 'react-router-dom';
import ContainerLoginSignup from '../ContainerLoginSignup';
import logo from '../assets/logo.svg';


export default function SingupPage() {
    return (
        <ContainerLoginSignup>
            <img src={logo} alt='TrackIt' />
            <form>
                <div>
                    <input
                        type='email'
                        placeholder='email'
                        required
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='senha'
                        required
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='nome'
                        required
                    />
                </div>
                <div>
                    <input
                        type='text'
                        /* type='file'
                        accept="image/*" */
                        placeholder='foto'
                        required
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