import { Habit, Title, Days } from "../styles/styles";
import { deleteHabit } from "../../../services/trackit";
import deleteIcon from "../../assets/image/trash-outline.svg";

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function Habits({ days, name, habitId, update, setUpdate }) {
    const handleDeleteHabit = () => {
        const confirm = window.confirm("Gostaria de apagar esse hábito?")

        if (confirm) {
            deleteHabit(habitId)
                .catch(error => alert(error.response.data.message))
                .then(response => setUpdate(!update));
        };
    };

    return (
        <Habit>
            <Title>
                <img src={deleteIcon} onClick={handleDeleteHabit} alt='deletar hábito' />
                <h1>{name}</h1>
            </Title>
            <Days>
                {weekdays.map((value, index) => {
                    const isSelected = days.some(id => id === index);
                    if (isSelected) {
                        return <div className="day selected" key={index}>{value}</div>;
                    } else {
                        return <div className="day" key={index}>{value}</div>;
                    };
                })}
            </Days>
        </Habit>
    );
}