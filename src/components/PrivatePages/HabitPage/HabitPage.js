import { useContext, useEffect, useState } from "react";
import { Main, Header, Habit, Title, Days, Buttons, Info } from "../styles/styles";
import axios from "axios";
import "../styles/style.css";
import Menu from "../common/Menu";
import Top from "../common/Top";
import deleteHabit from "../../assets/image/trash-outline.svg";
import UserContext from "../../../Contexts/UserContext";

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

function Habits({ days, name }) {
    return (
        <Habit>
            <Title>
                <img src={deleteHabit} alt='deletar hábito' />
                <h1>{name}</h1>
            </Title>
            <Days>
                {weekdays.map((value, index) => {
                    const isSelected = days.some(id => id === index);
                    if (isSelected) {
                        return <div className="day selected" key={index}>{value}</div>
                    } else {
                        return <div className="day" key={index}>{value}</div>
                    };
                })}
            </Days>
        </Habit>
    );
}


function Weekday({ id, day, getDayID }) {
    const [selected, setSelected] = useState(false);

    return (
        <div
            key={id}
            onClick={() => { getDayID(id); setSelected(!selected) }}
            className={`day ${selected ? "selected" : ""}`}
        >
            {day}
        </div>
    );
}

export default function HabitPage() {
    const { user } = useContext(UserContext);
    const [habitList, setHabitlist] = useState(null);
    const [openForm, setOpenForm] = useState(false);
    const [name, setName] = useState('');
    const [days, setDays] = useState([]);

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };

    const getHabitList = () => {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

        const promise = axios.get(url, config);
        promise.catch(error => alert(error.response.data.message));
        promise.then(response => setHabitlist(response.data));
    };
    getHabitList();

    const handleCreateHabit = (e) => {
        e.preventDefault();
        const bodyHabit = {
            name,
            days,
        };
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

        const promise = axios.post(url, bodyHabit, config);
        promise.catch(error => alert(error.response.data.message));
        promise.then(response => {
            getHabitList();
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
                                    <Weekday key={index} id={index} day={value} getDayID={getDayID} />
                                ))}
                            </Days>
                        </div>
                        <Buttons>
                            <span>Cancelar</span>
                            <button type='submit'>Salvar</button>
                        </Buttons>
                    </Habit >
                ) : ("")}
                {habitList === null ? (
                    <Info>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </Info>
                ) : (
                    <>
                        {habitList.map(value => (
                            <Habits key={value.id} days={value.days} name={value.name} />
                        ))}
                    </>
                )}
            </Main>
            <Menu />
        </>
    );
}