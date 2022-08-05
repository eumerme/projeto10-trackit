import { useEffect, useState } from "react";
import { createHabits, getHabitList } from "../../../services/trackit";
import { Main, Habit, Title, Days, Day, Buttons, Info } from "../styles/styles";
import { Top, Header, Menu } from "../common";
import Habits from "./Habits";

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

function Weekday({ id, day, getDayID }) {
    const [selected, setSelected] = useState(false);
    return (
        <Day
            isSelected={selected}
            onClick={() => { getDayID(id); setSelected(!selected) }}
        >
            {day}
        </Day>
    );
}

export default function HabitPage() {
    const [update, setUpdate] = useState(false);
    const [habitList, setHabitlist] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [name, setName] = useState('');
    const [days, setDays] = useState([]);

    useEffect(() => {
        getHabitList()
            .catch(error => alert(error.response.data.message))
            .then(response => setHabitlist(response.data));
    }, [update])

    const handleCreateHabit = (e) => {
        e.preventDefault();
        const bodyHabit = {
            name,
            days,
        };

        createHabits(bodyHabit)
            .catch(error => alert(error.response.data.message))
            .then(response => {
                setUpdate(!update);
                setOpenForm(!openForm);
                setName("");
                setDays([]);
            });
    };

    const getDayID = (index) => {
        const isSelected = days.some(id => id === index);

        if (days.length === 0 || !isSelected) {
            setDays([...days, index]);
        } else {
            setDays(days.filter(id => id !== index));
        };
    };

    return (
        <>
            <Top />
            <Main>
                <Header>
                    <h1>Meus hábitos</h1>
                    <div onClick={() => { setOpenForm(!openForm) }}>+</div>
                </Header>
                {openForm ? (
                    <Habit onSubmit={handleCreateHabit}>
                        <div>
                            <Title>
                                <input
                                    type='text'
                                    placeholder='nome do hábito'
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Title>
                            <Days>
                                {weekdays.map((value, index) => (
                                    <Weekday
                                        key={index}
                                        id={index}
                                        day={value}
                                        getDayID={getDayID}
                                    />
                                ))}
                            </Days>
                        </div>
                        <Buttons>
                            <span onClick={() => { setOpenForm(!openForm) }}>Cancelar</span>
                            <button type='submit'>Salvar</button>
                        </Buttons>
                    </Habit >
                ) : ("")}
                {habitList.length === 0 ? (
                    <Info>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </Info>
                ) : (
                    <>
                        {habitList.map(value => (
                            <Habits
                                key={value.id}
                                days={value.days}
                                name={value.name}
                                habitId={value.id}
                                update={update}
                                setUpdate={setUpdate}
                            />
                        ))}
                    </>
                )}
            </Main>
            <Menu />
        </>
    );
}