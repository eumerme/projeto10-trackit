import { Top, Header, Menu } from "../common";
import { Info, Main } from "../styles/styles";

export default function HistoryPage() {
    return (
        <>
            <Top />
            <Main>
                <Header>
                    <h1>Histórico</h1>
                </Header>
                <Info>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </Info>
            </Main>
            <Menu />
        </>
    );
}