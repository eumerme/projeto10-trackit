import { useContext, useEffect, useState } from "react";
import { createHabits, getHabitList } from "../../../services/trackit";
import { Container, Habit, Title, Days, Day, Buttons, Info } from "../styles/sharedStyles";
import { Top, Header, Menu } from "../common";
import Habits from "./Habits";
import Loading from "../../LoadingPage/Loading";
import { ThreeDots } from "react-loader-spinner";
import { LoaderSpinner } from "../../PublicPages/styles/styles";
import UserContext from "../../../Contexts/UserContext";

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
    const { reload, setReload } = useContext(UserContext);
    const [habitList, setHabitlist] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [name, setName] = useState('');
    const [days, setDays] = useState([]);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        getHabitList()
            .catch(error => alert(error.response.data.message))
            .then(response => setHabitlist(response.data.reverse()));
    }, [reload])

    const handleCreateHabit = (e) => {
        e.preventDefault();
        const bodyHabit = {
            name,
            days,
        };

        if (days.length !== 0) {
            setDisable(true);
            createHabits(bodyHabit)
                .catch(error => {
                    setDisable(false);
                    alert(error.response.data.message);
                })
                .then(response => {
                    setReload(!reload);
                    setOpenForm(!openForm);
                    setName("");
                    setDays([]);
                    setDisable(false);
                });
        } else {
            alert("Escolha pelo menos um dia.")
        }
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
            <Container>
                {habitList === null ? (
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
                                    />
                                ))}
                            </>
                        )}
                    </>
                )}
            </Container>
            <Menu />
        </>
    );
}