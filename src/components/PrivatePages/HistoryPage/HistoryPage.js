import { Top, Header, Menu } from "../common";
import { Info, Container } from "../styles/sharedStyles";

export default function HistoryPage() {
    return (
        <>
            <Top />
            <Container>
                <Header>
                    <h1>Histórico</h1>
                </Header>
                <Info>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </Info>
            </Container>
            <Menu />
        </>
    );
}