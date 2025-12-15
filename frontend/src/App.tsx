import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import ProtectedRoute from "./auth/ProtectedRoute.tsx";
// Pages
import Login from "./pages/Login";
import Home from './pages/Home.tsx';
import Dashboard from "./pages/Dashboard.tsx";
import Tasks from "./pages/Tasks";
import TaskList from "./sections/TaskList.tsx";
import TaskDetail from "./sections/TaskDetail.tsx"
import Calendar from "./pages/Calendar.tsx";
import Profile from "./pages/Profile.tsx";
import Projects from "./pages/Projects.tsx";

export default function App() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    style={{ position: "relative" }}
                >
                    {/* overlays */}
                    <motion.div
                        className="slide_in"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <motion.div
                        className="slide_out"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <Routes location={location}>
                        <Route index element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/tasks" element={<Tasks />}>
                                <Route index element={<TaskList />} />
                                <Route path="task1" element={<TaskDetail />} />
                            </Route>
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/profile" element={<Profile />} />

                        </Route>
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </>


    )
}
