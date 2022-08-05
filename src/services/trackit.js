import axios from "axios";

const urlBase = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("trackit"));

    if (auth !== null) {
        const config = {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        };
        return config;
    };
}

function signUp(bodySignup) {
    const promise = axios.post(`${urlBase}/auth/sign-up`, bodySignup);
    return promise;
}

function login(bodyLogin) {
    const config = createHeaders();
    const promise = axios.post(`${urlBase}/auth/login`, bodyLogin, config);
    return promise;
}

function createHabits(bodyHabit) {
    const config = createHeaders();
    const promise = axios.post(`${urlBase}/habits`, bodyHabit, config);
    return promise;
}

function getHabitList() {
    const config = createHeaders();
    const promise = axios.get(`${urlBase}/habits`, config);
    return promise;
}

function deleteHabit(habitId) {
    const config = createHeaders();
    const promise = axios.delete(`${urlBase}/habits/${habitId}`, config);
    return promise;
}

function getTodayHabit() {
    const config = createHeaders();
    const promise = axios.get(`${urlBase}/habits/today`, config);
    return promise;
}

function habitCheck(habitId) {
    console.log(habitId, "chamei check")
    const config = createHeaders();
    const promise = axios.post(`${urlBase}/habits/${habitId}/check`, {}, config);
    return promise;
}

function habitUncheck(habitId) {
    const config = createHeaders();
    const promise = axios.post(`${urlBase}/habits/${habitId}/uncheck`, {}, config);
    return promise;
}

export {
    signUp,
    login,
    createHabits,
    getHabitList,
    deleteHabit,
    getTodayHabit,
    habitCheck,
    habitUncheck
};