import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../GlobalStyle/globalStyle";
import UserContext from "../Contexts/UserContext";
import LoginPage from "./PublicPages/LoginPage/LoginPage";
import SingupPage from "./PublicPages/SingupPage/SingupPage";
import HabitPage from "./PrivatePages/HabitPage/HabitPage";
import TodayPage from "./PrivatePages/TodayPage/TodayPage";
import HistoryPage from "./PrivatePages/HistoryPage/HistoryPage";
import Private from "./PrivatePages/common/Private";

export default function App() {
    const [currentDay, setCurrentDay] = useState([]);

    

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{ currentDay, setCurrentDay }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/cadastro" element={<SingupPage />} />
                        <Route
                            path="/habitos"
                            element={
                                <Private>
                                    <HabitPage />
                                </Private>
                            }
                        />
                        <Route
                            path="/hoje"
                            element={
                                <Private>
                                    <TodayPage />
                                </Private>
                            }
                        />
                        <Route
                            path="/historico"
                            element={
                                <Private>
                                    <HistoryPage />
                                </Private>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}