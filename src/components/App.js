import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../GlobalStyle/globalStyle";
import LoginPage from "./LoginPage/LoginPage";
import SingupPage from "./SingupPage/SingupPage";
import HabitPage from "./HabitPage/HabitPage";
import TodayPage from "./TodayPage/TodayPage";
import HistoryPage from "./HistoryPage/HistoryPage";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<SingupPage />} />
                    <Route path="/habitos" element={<HabitPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/historico" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}