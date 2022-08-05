import { useEffect, useState } from "react";
import styled from "styled-components";
import { Top, Header, Menu } from "../common";
import { Main } from "../styles/styles";
import checkIcon from "../../assets/image/check.svg"
import { getTodayHabit, habitCheck, habitUncheck } from "../../../services/trackit";

function TodayList({
    name,
    currentSequence,
    highestSequence,
    done,
    habitId
}) {
    console.log(done)
    const handleHabitCheck = () => {
        if (done) {
            habitUncheck(habitId)
                .catch(error => console.log(error.response.data))
                .then(response => console.log(response));
        } else {
            habitCheck(habitId)
                .catch(error => console.log(error.response.data))
                .then(response => console.log(response));
        }
    };

    return (
        <TodayHabit>
            <TodayTitle>
                <h1>{name}</h1>
                <h2>{`Sequência atual: ${currentSequence} dias`}</h2>
                <h2>{`Seu recorde: ${highestSequence} dias`}</h2>
            </TodayTitle>
            <Check done={done} onClick={handleHabitCheck}>
                <img src={checkIcon} alt='' />
            </Check>
        </TodayHabit>
    );
}

export default function TodayPage() {
    const [todayHabits, setTodayHabits] = useState([]);

    useEffect(() => {
        getTodayHabit()
            .catch(error => alert(error.response.data.message))
            .then(response => {
                console.log(response.data);
                setTodayHabits(response.data)
            });
    }, [])

    return (
        <>
            <Top />
            <Main>
                <Header today>
                    <h1>Segunda</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
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
    h2 {
        font-size: 14px;
        line-height: 16px;
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