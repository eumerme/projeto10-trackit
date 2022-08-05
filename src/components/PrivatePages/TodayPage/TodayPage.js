import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Top, Header, Menu } from "../common";
import { Main } from "../styles/styles";
import checkIcon from "../../assets/image/check.svg"
import { getTodayHabit, habitCheck, habitUncheck } from "../../../services/trackit";
import { getWeekday, getDay } from "./TodayData";
import UserContext from "../../../Contexts/UserContext";

function TodayList({
    name,
    currentSequence,
    highestSequence,
    done,
    habitId,
    update,
    setUpdate
}) {
    const handleHabitCheck = () => {
        if (done) {
            habitUncheck(habitId)
                .catch(error => alert(error.response.data.message))
                .then(response => setUpdate(!update));
        } else {
            habitCheck(habitId)
                .catch(error => alert(error.response.data.message))
                .then(response => setUpdate(!update));
        }
    };

    return (
        <TodayHabit>
            <TodayTitle done={done} goal={done && currentSequence === highestSequence}>
                <h1>{name}</h1>
                <div>
                    <h2>Sequência atual:</h2>&nbsp;
                    <p>{`${currentSequence} ${currentSequence === 1 ? "dia" : "dias"}`}</p>
                </div>
                <div>
                    <h2>Seu recorde:</h2>&nbsp;
                    <span>{`${highestSequence} ${highestSequence === 1 ? "dia" : "dias"}`}</span>
                </div>
            </TodayTitle>
            <Check done={done} onClick={handleHabitCheck}>
                <img src={checkIcon} alt='' />
            </Check>
        </TodayHabit>
    );
}

export default function TodayPage() {
    const { percentage, setPercentage } = useContext(UserContext);
    const [update, setUpdate] = useState(false);
    const [todayHabits, setTodayHabits] = useState([]);
    const [habitDone, setHabitDone] = useState(false);

    useEffect(() => {
        getTodayHabit()
            .catch(error => alert(error.response.data.message))
            .then(response => {
                setTodayHabits(response.data);

                const isDone = response.data.filter(value => value.done);
                const getPercentDone = Math.round((isDone.length / todayHabits.length) * 100);

                setPercentage(getPercentDone);

                if (isDone.length !== 0) {
                    setHabitDone(true);
                } else {
                    setHabitDone(false);

                }
            });
    }, [setPercentage, todayHabits, update]);

    return (
        <>
            <Top />
            <Main>
                <Header today >
                    <h1>{`${getWeekday}, ${getDay}`}</h1>
                    {percentage !== 0 ? (
                        <h2>{`${percentage}% dos hábitos concluídos`}</h2>
                    ) : (
                        <h2>Nenhum hábito concluído ainda</h2>
                    )}
                </Header>
                {todayHabits.length !== 0 ? (
                    todayHabits.map((value) => (
                        <TodayList
                            key={value.id}
                            habitId={value.id}
                            name={value.name}
                            done={value.done}
                            currentSequence={value.currentSequence}
                            highestSequence={value.highestSequence}
                            update={update}
                            setUpdate={setUpdate}
                        />))
                ) : ("")}
            </Main>
            <Menu />
        </>
    );
}

const TodayHabit = styled.div`
    width: 100%;
    height: 97px;
    padding: 18px;
    margin-bottom: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    position: relative;
`;


const TodayTitle = styled.div`
    h1 {
        font-size: 20px;
        margin-bottom: 10px;
    }

    div{
        display: flex;
    }

    h2 {
        font-size: 14px;
        line-height: 16px;
    }

    p {
        font-size: 14px;
        color: ${props => props.done ? "#8FC549" : ""};
    }

    span {
        font-size: 14px;
        color: ${props => props.goal ? "#8FC549" : ""};
    }
`;

const Check = styled.div`
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    display: grid;
    place-content: center;
    position: absolute;
    top: 14px;
    right: 14px;

`;