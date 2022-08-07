import { TodayHabit, TodayTitle, Check } from "../styles/todayPageStyles";
import checkIcon from "../../assets/image/check.svg";
import { habitCheck, habitUncheck } from "../../../services/trackit";
import { useContext } from "react";
import UserContext from "../../../Contexts/UserContext";

export default function TodayList({
    name,
    currentSequence,
    highestSequence,
    done,
    habitId
}) {
    const {update, setUpdate} = useContext(UserContext);
    
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