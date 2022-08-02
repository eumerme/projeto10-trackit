import { Link } from "react-router-dom";
import ContainerLoginSignup from "../ContainerLoginSignup";
import logo from "../assets/logo.svg";

export default function LoginPage() {
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
                <button type='submit'>Entrar</button>
            </form>
            <Link to='/cadastro'>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </ContainerLoginSignup>
    );
}