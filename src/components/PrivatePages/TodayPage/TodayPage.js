import { useContext, useEffect, useState } from "react";
import { Top, Header, Menu } from "../common";
import { Container, Info } from "../styles/sharedStyles";
import { getTodayHabit } from "../../../services/trackit";
import { getWeekday, getDay } from "./TodayData";
import UserContext from "../../../Contexts/UserContext";
import Loading from "../../LoadingPage/Loading";
import TodayList from "./TodayList";

export default function TodayPage() {
    const { percentage, setPercentage, reload } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        getTodayHabit()
            .catch(error => alert(error.response.data.message))
            .then(response => {
                setTodayHabits(response.data.reverse());

                if (todayHabits !== null) {
                    const isDone = response.data.filter(value => value.done);
                    const getPercentDone = Math.round((isDone.length / todayHabits.length) * 100);

                    setPercentage(getPercentDone);
                }
            });
        setUpdate([...todayHabits]);
    }, [setPercentage, reload, todayHabits.length]);

    return (
        <>
            <Top />
            <Container>
                {update === null ? (
                    <Loading />
                ) : (
                    <>
                        {todayHabits.length === 0 ? (
                            <Info today>
                                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                            </Info>
                        ) : (
                            <>
                                <Header today >
                                    <h1>{`${getWeekday}, ${getDay}`}</h1>
                                    {(percentage !== 0 && percentage !== Infinity) ? (
                                        <h2>{`${percentage}% dos hábitos concluídos`}</h2>
                                    ) : (
                                        <h2>Nenhum hábito concluído ainda</h2>
                                    )}
                                </Header>
                                {todayHabits.map((value) => (
                                    <TodayList
                                        key={value.id}
                                        habitId={value.id}
                                        name={value.name}
                                        done={value.done}
                                        currentSequence={value.currentSequence}
                                        highestSequence={value.highestSequence}
                                    />))}
                            </>
                        )}
                    </>
                )}
            </Container>
            <Menu />
        </>
    );
}