import { Habit, Title, Days, Day } from "../styles/sharedStyles";
import { deleteHabit } from "../../../services/trackit";
import deleteIcon from "../../assets/image/trash-outline.svg";
import { useContext } from "react";
import UserContext from "../../../Contexts/UserContext";

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function Habits({ days, name, habitId }) {
    const { reload, setReload } = useContext(UserContext);

    const handleDeleteHabit = () => {
        const confirm = window.confirm("Gostaria de apagar esse hábito?")

        if (confirm) {
            deleteHabit(habitId)
                .catch(error => alert(error.response.data.message))
                .then(response => setReload(!reload));
        };
    };

    return (
        <Habit added>
            <Title>
                <img src={deleteIcon} onClick={handleDeleteHabit} alt='deletar hábito' />
                <h1>{name}</h1>
            </Title>
            <Days>
                {weekdays.map((value, index) => {
                    const selected = days.some(id => id === index);
                    if (selected) {
                        return <Day isSelected={selected} key={index}>{value}</Day>;
                    } else {
                        return <Day key={index}>{value}</Day>;
                    };
                })}
            </Days>
        </Habit>
    );
}