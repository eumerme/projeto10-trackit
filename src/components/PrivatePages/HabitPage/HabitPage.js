import { useEffect, useState } from "react";
import { createHabits, getHabitList } from "../../../services/trackit";
import { Main, Habit, Title, Days, Day, Buttons, Info } from "../styles/styles";
import { Top, Header, Menu } from "../common";
import Habits from "./Habits";
import Loading from "../../LoadingPage/Loading";
import { ThreeDots } from "react-loader-spinner";
import { LoaderSpinner } from "../../PublicPages/styles/style";

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

function Weekday({ id, day, getDayID, disable }) {
    const [selected, setSelected] = useState(false);
    return (
        <Day
            type="button"
            isSelected={selected}
            onClick={() => { getDayID(id); setSelected(!selected) }}
            disabled={disable}
        >
            {day}
        </Day>
    );
}

export default function HabitPage() {
    const [updateHabits, setUpdateHabits] = useState(false);
    const [habitList, setHabitlist] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [name, setName] = useState('');
    const [days, setDays] = useState([]);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        getHabitList()
            .catch(error => alert(error.response.data.message))
            .then(response => setHabitlist(response.data.reverse()));
    }, [updateHabits])

    const handleCreateHabit = (e) => {
        e.preventDefault();
        setDisable(true);
        const bodyHabit = {
            name,
            days,
        };

        createHabits(bodyHabit)
            .catch(error => {
                alert(error.response.data.message);
                setDisable(false);
            })
            .then(response => {
                setUpdateHabits(!updateHabits);
                setOpenForm(!openForm);
                setName("");
                setDays([]);
                setDisable(false);
            });
    };

    console.log(disable, "habit")

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
                {habitList.length === 0 ? (
                    <Loading />
                ) : (
                    <>
                        <Header>
                            <h1>Meus hábitos</h1>
                            <div onClick={() => { setOpenForm(!openForm) }}>+</div>
                        </Header>
                        {openForm ? (
                            <Habit onSubmit={handleCreateHabit}>
                                <div>
                                    <Title disabled={disable}>
                                        <input
                                            type='text'
                                            placeholder='nome do hábito'
                                            required
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            disabled={disable}
                                        />
                                    </Title>
                                    <Days>
                                        {weekdays.map((value, index) => (
                                            <Weekday
                                                key={index}
                                                id={index}
                                                day={value}
                                                getDayID={getDayID}
                                                disable={disable}
                                            />
                                        ))}
                                    </Days>
                                </div>
                                <Buttons>
                                    <span onClick={() => { setOpenForm(!openForm) }}>Cancelar</span>
                                    {!disable ? (
                                        <button type='submit'>Salvar</button>
                                    ) : (
                                        <LoaderSpinner saveHabit>
                                            <ThreeDots color="#ffffff" height={11} width={43} />
                                        </LoaderSpinner>
                                    )}
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
                                        updateHabits={updateHabits}
                                        setUpdateHabits={setUpdateHabits}
                                    />
                                ))}
                            </>
                        )}
                    </>
                )}
            </Main>
            <Menu />
        </>
    );
}