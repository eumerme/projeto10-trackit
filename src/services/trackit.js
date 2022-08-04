import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import axios from "axios";

const urlBase = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function creatHeaders() {
    const auth = JSON.parse(localStorage.getItem("trackit"));

    const config = {
        headers: {
            Authorization: `Bearer ${auth}`
        }
    };

    return config;
}

function signUp(bodySignup) {
    const promise = axios.post(`${urlBase}/trackit/auth/sign-up`, bodySignup);
    return promise;
}

function login(bodyLogin) {
    const config = creatHeaders();
    const promise = axios.post(`${urlBase}/auth/login`, bodyLogin, config);
    return promise;
}

function createHabits(bodyHabit) {
    const config = creatHeaders();
    const promise = axios.post(`${urlBase}/habits`, bodyHabit, config);
    return promise;
}

function getHabitList() {
    const config = creatHeaders();
    const promise = axios.get(`${urlBase}/habits`, config);
    return promise;
}

function deleteHabit(habitId) {
    const config = creatHeaders();
    const promise = axios.delete(`${urlBase}/habits/${habitId}`, config);
    return promise;
}

export { signUp, login, createHabits, getHabitList, deleteHabit };