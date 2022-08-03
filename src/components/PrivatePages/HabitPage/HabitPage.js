import Menu from "../Menu";
import Top from "../Top";
import deleteHabit from "../../assets/image/trash-outline.svg";
import {Main, Header, Habit, Title, Days, Buttons, Info} from "../styles/styles";

export default function HabitPage() {
    return (
        <>
            <Top />
            <Main>
                <Header>
                    <h1>Meus hábitos</h1>
                    <div>+</div>
                </Header>
                <Habit>
                    {/* <div>
                        <Title>
                            <input
                                type='text'
                                placeholder='nome do hábito'
                                required
                            />
                        </Title>
                        <Days>
                            <div>D</div>
                            <div>S</div>
                            <div>T</div>
                            <div>Q</div>
                            <div>Q</div>
                            <div>S</div>
                            <div>S</div>
                        </Days>
                    </div>
                    <Buttons>
                        <span>Cancelar</span>
                        <button type='submit'>Salvar</button>
                    </Buttons> */}
                    <Title>
                        <img src={deleteHabit} alt='deletar hábito' />
                        <h1>
                            Ler 1 capítulo de livro
                        </h1>
                    </Title>
                    <Days>
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </Days>
                </Habit>
                <Info>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Info>
            </Main>
            <Menu />
        </>
    );
}